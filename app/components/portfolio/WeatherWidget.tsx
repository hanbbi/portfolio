'use client';

import { useState, useEffect } from 'react';

interface WeatherData {
  temp: number;
  description: string;
  icon: string;
  city: string;
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // OpenWeatherMap API (무료)
        // 인천 좌표 사용
        const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY || 'demo';

        if (API_KEY === 'demo') {
          // 데모 데이터
          setWeather({
            temp: 3,
            description: '맑음',
            icon: '01d',
            city: '인천'
          });
          setLoading(false);
          return;
        }

        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=37.4563&lon=126.7052&appid=${API_KEY}&units=metric&lang=kr`
        );

        if (!res.ok) throw new Error('Weather fetch failed');

        const data = await res.json();
        setWeather({
          temp: Math.round(data.main.temp),
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          city: '인천'
        });
      } catch {
        setError(true);
        // 에러 시 기본값
        setWeather({
          temp: 3,
          description: '맑음',
          icon: '01d',
          city: '인천'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const getWeatherEmoji = (icon: string) => {
    const iconMap: { [key: string]: string } = {
      '01d': '☀️', '01n': '🌙',
      '02d': '⛅', '02n': '☁️',
      '03d': '☁️', '03n': '☁️',
      '04d': '☁️', '04n': '☁️',
      '09d': '🌧️', '09n': '🌧️',
      '10d': '🌦️', '10n': '🌧️',
      '11d': '⛈️', '11n': '⛈️',
      '13d': '❄️', '13n': '❄️',
      '50d': '🌫️', '50n': '🌫️',
    };
    return iconMap[icon] || '🌤️';
  };

  if (loading) {
    return (
      <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-3 animate-pulse">
        <div className="h-8 w-20 bg-white/20 rounded" />
      </div>
    );
  }

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-3 flex items-center gap-3">
      <span className="text-3xl">{weather && getWeatherEmoji(weather.icon)}</span>
      <div>
        <p className="text-2xl font-bold">{weather?.temp}°C</p>
        <p className="text-sm opacity-80">{weather?.city} · {weather?.description}</p>
      </div>
      {error && <span className="text-xs opacity-50">(데모)</span>}
    </div>
  );
}
