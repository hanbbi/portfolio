# 유한비 | 포트폴리오 웹사이트
URL: https://portfolio-yhb.vercel.app

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)

## ✨ 주요 기능

| 기능 | 설명 |
|------|------|
| **실시간 날씨** | OpenWeatherMap API 연동, 현재 위치 날씨 표시 |
| **실시간 시계** | 현재 시간/날짜 한국어 포맷 표시 |
| **다크모드** | 라이트/다크 테마 토글, localStorage 저장 |
| **반응형 디자인** | 모바일/태블릿/데스크톱 대응 |
| **스크롤 네비게이션** | 스크롤 시 스타일 변경, 부드러운 이동 |
| **프로젝트 모달** | 클릭 시 상세 정보 팝업 |
| **연락처 복사** | 클릭 시 클립보드 복사 |

## 🛠 기술 스택

### Frontend
- **Next.js 15** - React 프레임워크
- **React 19** - UI 라이브러리
- **TypeScript** - 정적 타입
- **Tailwind CSS 4** - 스타일링

### API
- **OpenWeatherMap** - 실시간 날씨 데이터

## 📂 프로젝트 구조

```
app/
├── page.tsx                    # 메인 페이지
├── layout.tsx                  # 레이아웃
├── globals.css                 # 전역 스타일
└── components/
    ├── Navigation.tsx          # 네비게이션 바
    ├── DarkModeButton.tsx      # 다크모드 토글
    └── portfolio/
        ├── Hero.tsx            # 히어로 섹션
        ├── WeatherWidget.tsx   # 날씨 위젯
        ├── About.tsx           # 소개 섹션
        ├── Skills.tsx          # 기술 스택
        ├── Projects.tsx        # 프로젝트 목록
        ├── Contact.tsx         # 연락처
        └── Footer.tsx          # 푸터
```

## 🚀 실행 방법

### 1. 설치

```bash
git clone https://github.com/hanbbi/portfolio.git
cd portfolio
npm install
```

### 2. 환경 변수 설정

`.env.local` 파일 생성:

```env
NEXT_PUBLIC_WEATHER_API_KEY=your_openweathermap_api_key
```

> [OpenWeatherMap](https://openweathermap.org/api)에서 무료 API 키 발급

### 3. 실행

```bash
npm run dev
```

## 📝 배운 점

- React 19의 새로운 패턴 (hydration 처리)
- Tailwind CSS v4 다크모드 설정 (`@custom-variant`)
- 외부 API 연동 및 환경변수 관리
- 컴포넌트 기반 설계 및 재사용

## 👤 Contact

- **Email**: yhb1109@naver.com
- **GitHub**: [github.com/hanbbi](https://github.com/hanbbi)

---

© 2026 유한비. All rights reserved.
