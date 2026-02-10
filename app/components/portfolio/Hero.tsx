'use client';

import { useState, useEffect } from 'react';
import WeatherWidget from './WeatherWidget';

export default function Hero() {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }));
      setCurrentDate(now.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
      }));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 dark:from-gray-900 dark:via-purple-950 dark:to-gray-900" />

      {/* 애니메이션 배경 원 */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* 메인 컨텐츠 */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* 시간/날짜 & 날씨 위젯 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-3">
            <p className="text-3xl font-bold">{currentTime}</p>
            <p className="text-sm opacity-80">{currentDate}</p>
          </div>
          <WeatherWidget />
        </div>

        {/* 인사말 */}
        <p className="text-lg sm:text-xl mb-4 opacity-90">안녕하세요, 저는</p>

        {/* 이름 */}
        <h1 className="text-5xl sm:text-7xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-white">
            유한비
          </span>
        </h1>

        {/* 직함 */}
        <h2 className="text-2xl sm:text-3xl font-medium mb-6 opacity-90">
          웹 개발자
        </h2>

        {/* 한 줄 소개 */}
        <p className="text-lg sm:text-xl mb-10 opacity-80 max-w-2xl mx-auto">
          문제를 해결하고 사용자 경험을 개선하는 개발자입니다.
        </p>

        {/* CTA 버튼 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-opacity-90 transition-all hover:scale-105 shadow-lg"
          >
            프로젝트 보기
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-purple-600 transition-all hover:scale-105"
          >
            연락하기
          </a>
        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
