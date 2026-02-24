'use client';

import { useState } from 'react';

interface Project {
  id: string;
  title: string;
  period: string;
  role: string;
  description: string;
  techs: string[];
  highlights: string[];
  color: string;
  emoji: string;
}

const projects: Project[] = [
  {
    id: 'lpg',
    title: 'AI 기반 LPG 배송 예측 시스템',
    period: '2026.01 ~ 진행중',
    role: '프로토타입 개발 (1인)',
    description: 'AI를 활용한 LPG 배송 주기 예측 시스템. IoT 센서 데이터와 기온/계절/휴일 변수를 반영한 Gradient Boosting 모델로 다음 충전 시점을 예측합니다.',
    techs: ['Claude Code', 'Next.js', 'TypeScript', 'React', 'Flask', 'scikit-learn'],
    highlights: [
      '±3일 정확도 98.5% 달성',
      '이상 데이터 자동 필터링 구현',
      '회사 내 첫 AI 시스템 도입',
    ],
    color: 'from-blue-500 to-cyan-500',
    emoji: '🤖',
  },
  {
    id: 'ios',
    title: 'iOS 앱 출시',
    period: '2024.06 ~ 2024.07',
    role: 'iOS 개발 전담 (1인)',
    description: '기존 웹뷰 서비스를 iOS 앱으로 출시. Swift를 처음 배우면서 2개월 만에 App Store 출시까지 완료했습니다.',
    techs: ['Swift', 'Xcode', 'WKWebView', 'AVFoundation'],
    highlights: [
      '회사 첫 iOS 앱 출시',
      '바코드/QR 스캔 네이티브 구현',
      'JavaScript Bridge 양방향 통신',
    ],
    color: 'from-gray-700 to-gray-900',
    emoji: '📱',
  },
  {
    id: 'renewal',
    title: '기존 서비스 리뉴얼',
    period: '2024.01 ~ 2024.04',
    role: '프론트엔드 전담',
    description: '오래된 UI/UX를 모던하게 전면 리뉴얼. 디자인 시안 기반으로 반응형 웹을 구현하고 사용자 경험을 크게 개선했습니다.',
    techs: ['HTML5', 'CSS3', 'JavaScript', 'jQuery'],
    highlights: [
      '환경설정 페이지 사용률 증가',
      '기능 찾기 문의 80% 감소',
      '예정보다 빠른 완료로 꼼꼼한 검수',
    ],
    color: 'from-purple-500 to-pink-500',
    emoji: '✨',
  },
  {
    id: 'new-service',
    title: '아파트 검침관리 시스템',
    period: '2023.06 ~ 2023.12',
    role: '풀스택 개발',
    description: '아파트 관리인을 위한 검침 관리 시스템을 기획부터 배포까지 전 과정을 담당했습니다.',
    techs: ['Java', 'Spring Boot', 'MyBatis', 'MySQL', 'JavaScript'],
    highlights: [
      'DB 설계부터 API까지 전체 시스템 설계',
      'Chart.js 활용 대시보드 구현',
      '역할 기반 접근 제어 구현',
    ],
    color: 'from-green-500 to-teal-500',
    emoji: '🏢',
  },
  {
    id: 'maintenance',
    title: '기존 서비스 고도화',
    period: '2023.06 ~ 지속적',
    role: '신규 기능 개발, 유지보수',
    description: '회사 메인 서비스에 지속적으로 기능을 추가하고 사용자 피드백을 반영하여 서비스를 개선했습니다.',
    techs: ['Java', 'Spring Boot', 'JavaScript', 'MySQL'],
    highlights: [
      '100+ 기능 개발, 50+ 버그 수정',
      '카카오 알림톡, 팩스 전송 시스템 등 외부 API 활용',
      'SQL Injection 취약점 발견 및 보안 강화',
    ],
    color: 'from-orange-500 to-red-500',
    emoji: '🔧',
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto">
        {/* 섹션 제목 */}
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500">
            Projects
          </span>
        </h2>

        {/* 프로젝트 그리드 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer group"
            >
              <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                {/* 헤더 */}
                <div className={`bg-gradient-to-r ${project.color} p-6 text-white`}>
                  <span className="text-4xl">{project.emoji}</span>
                  <h3 className="text-xl font-bold mt-2">{project.title}</h3>
                  <p className="text-sm opacity-80">{project.period}</p>
                </div>

                {/* 내용 */}
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* 기술 태그 */}
                  <div className="flex flex-wrap gap-2">
                    {project.techs.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techs.length > 4 && (
                      <span className="px-2 py-1 text-gray-500 text-xs">
                        +{project.techs.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* 자세히 보기 */}
                <div className="px-6 pb-6">
                  <span className="text-purple-600 dark:text-purple-400 text-sm font-medium group-hover:underline">
                    자세히 보기 →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 모달 */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 모달 헤더 */}
            <div className={`bg-gradient-to-r ${selectedProject.color} p-8 text-white`}>
              <span className="text-5xl">{selectedProject.emoji}</span>
              <h3 className="text-3xl font-bold mt-4">{selectedProject.title}</h3>
              <p className="opacity-80 mt-2">{selectedProject.period}</p>
              <p className="mt-1">{selectedProject.role}</p>
            </div>

            {/* 모달 내용 */}
            <div className="p-8">
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {selectedProject.description}
              </p>

              {/* 주요 성과 */}
              <h4 className="font-bold text-gray-800 dark:text-white mb-3">주요 성과</h4>
              <ul className="space-y-2 mb-6">
                {selectedProject.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                    <span className="text-green-500">✓</span>
                    {highlight}
                  </li>
                ))}
              </ul>

              {/* 사용 기술 */}
              <h4 className="font-bold text-gray-800 dark:text-white mb-3">사용 기술</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* 닫기 버튼 */}
              <button
                onClick={() => setSelectedProject(null)}
                className="w-full py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
