# CI/CD 파이프라인 구축 가이드

> GitHub → Jenkins → Docker Hub → Kubernetes 자동 배포 설정 방법

---

## 📋 목차

1. [사전 준비](#1-사전-준비)
2. [Docker 설정 파일 생성](#2-docker-설정-파일-생성)
3. [Kubernetes 배포 파일 생성](#3-kubernetes-배포-파일-생성)
4. [Jenkinsfile 생성](#4-jenkinsfile-생성)
5. [GitHub에 Push](#5-github에-push)
6. [Jenkins Pipeline 생성](#6-jenkins-pipeline-생성)
7. [빌드 및 배포](#7-빌드-및-배포)
8. [유용한 명령어](#8-유용한-명령어)

---

## 1. 사전 준비

### 필요한 것들

| 항목 | 설명 |
|------|------|
| Docker Desktop | 로컬에서 Docker & Kubernetes 실행 |
| Jenkins | CI/CD 파이프라인 실행 |
| Docker Hub 계정 | Docker 이미지 저장소 |
| GitHub 저장소 | 소스 코드 저장소 |

### Docker Desktop 설정

1. Docker Desktop 실행
2. Settings → Kubernetes → **Enable Kubernetes** 체크
3. Apply & Restart

### Jenkins 설정 (최초 1회)

```bash
# Jenkins 컨테이너 실행
docker run -d --name jenkins \
  -p 8080:8080 -p 50000:50000 \
  -v jenkins_home:/var/jenkins_home \
  -v /var/run/docker.sock:/var/run/docker.sock \
  --user root \
  jenkins/jenkins:lts

# 초기 비밀번호 확인
docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword
```

- http://localhost:8080 접속 → 초기 설정 완료
- 플러그인 설치: `Docker Pipeline`, `Kubernetes CLI`
- Docker Hub 자격 증명 추가:
  - Jenkins 관리 → Credentials → Add Credentials
  - Kind: Username with password
  - ID: `dockerhub-credentials` (정확히!)
  - Username/Password: Docker Hub 계정 정보

---

## 2. Docker 설정 파일 생성

### Dockerfile

프로젝트 루트에 `Dockerfile` 생성:

```dockerfile
# Next.js Dockerfile
FROM node:20-alpine

WORKDIR /app

# 의존성 설치
COPY package*.json ./
RUN npm ci

# 소스 복사 및 빌드
COPY . .
RUN npm run build

EXPOSE 30001

# 프로덕션 실행 (포트 지정)
CMD ["npm", "start", "--", "-p", "30001"]
```

### .dockerignore

프로젝트 루트에 `.dockerignore` 생성:

```
node_modules
.next
.git
*.md
.DS_Store
.env.local
```

---

## 3. Kubernetes 배포 파일 생성

### 폴더 생성

```bash
mkdir -p k8s
```

### k8s/deployment.yaml

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: portfolio-yhb
  labels:
    app: portfolio-yhb
spec:
  replicas: 2
  selector:
    matchLabels:
      app: portfolio-yhb
  template:
    metadata:
      labels:
        app: portfolio-yhb
    spec:
      containers:
      - name: portfolio-yhb
        image: IMAGE_PLACEHOLDER
        ports:
        - containerPort: 30001
---
apiVersion: v1
kind: Service
metadata:
  name: portfolio-yhb-service
spec:
  type: NodePort
  selector:
    app: portfolio-yhb
  ports:
  - port: 30001
    targetPort: 30001
    nodePort: 30001
```

> **참고**: `IMAGE_PLACEHOLDER`는 Jenkins가 빌드 시 자동으로 교체합니다.

---

## 4. Jenkinsfile 생성

프로젝트 루트에 `Jenkinsfile` 생성:

```groovy
pipeline {
    agent any

    environment {
        DOCKER_HUB_REPO = 'yhb1109/portfolio-yhb'  // Docker Hub 사용자명/이미지명
        IMAGE_TAG = "${BUILD_NUMBER}"
    }

    stages {
        stage('Checkout') {
            steps {
                echo '📥 코드 체크아웃...'
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                echo '🐳 Docker 이미지 빌드 중...'
                sh "docker build -t ${DOCKER_HUB_REPO}:${IMAGE_TAG} ."
                sh "docker tag ${DOCKER_HUB_REPO}:${IMAGE_TAG} ${DOCKER_HUB_REPO}:latest"
            }
        }

        stage('Push to Docker Hub') {
            steps {
                echo '📤 Docker Hub에 Push 중...'
                withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh "echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin"
                    sh "docker push ${DOCKER_HUB_REPO}:${IMAGE_TAG}"
                    sh "docker push ${DOCKER_HUB_REPO}:latest"
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                echo '☸️ Kubernetes에 배포 중...'
                sh "sed -i 's|IMAGE_PLACEHOLDER|${DOCKER_HUB_REPO}:${IMAGE_TAG}|g' k8s/deployment.yaml"
                sh "kubectl apply -f k8s/deployment.yaml"
            }
        }
    }

    post {
        success {
            echo '✅ 배포 성공!'
        }
        failure {
            echo '❌ 배포 실패!'
        }
    }
}
```

---

## 5. GitHub에 Push

```bash
# 파일 추가
git add Dockerfile .dockerignore k8s/ Jenkinsfile

# 커밋
git commit -m "Add Docker and Kubernetes CI/CD configuration"

# Push
git push origin main
```

---

## 6. Jenkins Pipeline 생성

1. http://localhost:8080 접속
2. **New Item** 클릭
3. 설정:
   - 이름: `portfolio-yhb-pipeline`
   - 타입: **Pipeline** 선택
   - OK 클릭
4. Pipeline 섹션 설정:

   | 항목 | 값 |
   |------|-----|
   | Definition | Pipeline script from SCM |
   | SCM | Git |
   | Repository URL | `https://github.com/[username]/[repo].git` |
   | Branch | `*/main` |
   | Script Path | `Jenkinsfile` |

5. **Save** 클릭

---

## 7. 빌드 및 배포

### 최초 빌드

1. Jenkins에서 해당 Pipeline 클릭
2. **Build Now** 클릭
3. 빌드 진행 상황 확인 (Console Output)
4. 완료 후 접속: `http://localhost:30001`

### 이후 업데이트 시

```bash
# 1. 코드 수정

# 2. GitHub에 Push
git add .
git commit -m "Update something"
git push origin main

# 3. Jenkins에서 Build Now 클릭
```

---

## 8. 유용한 명령어

### Docker 명령어

```bash
# 실행 중인 컨테이너 확인
docker ps

# 이미지 목록
docker images

# 컨테이너 로그
docker logs [container-name]

# 컨테이너 중지 & 삭제
docker stop [container-name]
docker rm [container-name]
```

### Kubernetes 명령어

```bash
# Pod 상태 확인
kubectl get pods

# Service 확인
kubectl get services

# 로그 확인
kubectl logs deployment/[deployment-name]

# Pod 개수 조절
kubectl scale deployment/[deployment-name] --replicas=3

# 이전 버전으로 롤백
kubectl rollout undo deployment/[deployment-name]

# 배포 히스토리
kubectl rollout history deployment/[deployment-name]
```

### Jenkins 명령어

```bash
# Jenkins 컨테이너 재시작
docker restart jenkins

# Jenkins 로그 확인
docker logs jenkins
```

---

## 📊 파이프라인 흐름도

```
┌──────────────────────────────────────────────────────────────┐
│                      CI/CD 파이프라인                         │
│                                                              │
│   [GitHub]  ──→  [Jenkins]  ──→  [Docker Hub]  ──→  [K8s]   │
│      │             │                 │                │      │
│   코드 저장     자동 빌드        이미지 저장      컨테이너    │
│                                                    실행      │
│                                                     │        │
│                                            localhost:30001   │
└──────────────────────────────────────────────────────────────┘
```

---

## ⚠️ 문제 해결

### 빌드 실패 시

1. Jenkins Console Output 확인
2. Docker Hub 자격 증명 확인 (ID: `dockerhub-credentials`)
3. Dockerfile 문법 오류 확인

### 접속 안 될 때

```bash
# Pod 상태 확인
kubectl get pods

# Pod 로그 확인
kubectl logs deployment/[deployment-name]

# Service 확인
kubectl describe service [service-name]
```

### 포트 충돌 시

```bash
# 해당 포트 사용 중인 프로세스 확인
lsof -i :30001

# 기존 컨테이너 중지
docker stop [container-name]
```

---

## 📝 체크리스트

- [ ] Docker Desktop 실행 및 Kubernetes 활성화
- [ ] Jenkins 실행 중
- [ ] Docker Hub 자격 증명 등록 (ID: `dockerhub-credentials`)
- [ ] Dockerfile 생성
- [ ] .dockerignore 생성
- [ ] k8s/deployment.yaml 생성
- [ ] Jenkinsfile 생성
- [ ] GitHub에 Push
- [ ] Jenkins Pipeline 생성
- [ ] Build Now!

---

*작성일: 2026-02-12*
