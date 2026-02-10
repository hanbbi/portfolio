'use client'

import { useState, useEffect } from 'react';

export default function DarkModeButton() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = saved === 'dark' || (!saved && prefersDark);

    setIsDark(shouldBeDark);

    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);

    if (next) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  if (!mounted) {
    return <div className="w-[100px] h-[36px]" />;
  }

  return (
    <button
      onClick={toggle}
      className={`
        px-3 py-1.5 rounded-lg text-sm font-medium transition-all
        ${isDark
          ? 'bg-gray-700 text-white hover:bg-gray-600'
          : 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
        }
      `}
    >
      {isDark ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}
