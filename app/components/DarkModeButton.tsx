'use client'

import { useCallback, useSyncExternalStore } from 'react';

function getThemeSnapshot(): boolean {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return saved === 'dark' || (!saved && prefersDark);
}

function getServerSnapshot(): boolean | undefined {
  return undefined;
}

function subscribeToTheme(callback: () => void): () => void {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', callback);
  window.addEventListener('storage', callback);
  return () => {
    mediaQuery.removeEventListener('change', callback);
    window.removeEventListener('storage', callback);
  };
}

export default function DarkModeButton() {
  const isDark = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getServerSnapshot);

  const toggle = useCallback(() => {
    const next = !getThemeSnapshot();

    if (next) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    window.dispatchEvent(new Event('storage'));
  }, []);

  if (isDark === undefined) {
    return <div className="w-[100px] h-[36px]" />;
  }

  if (isDark && !document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.add('dark');
  } else if (!isDark && document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
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
