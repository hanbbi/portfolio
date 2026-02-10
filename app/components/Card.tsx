import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  icon: string;
  color: 'blue' | 'purple' | 'green' | 'red';
  link: string;
}

export default function Card({ title, description, icon, color, link }: CardProps) {
  const colorStyles = {
    blue: 'from-blue-400 to-blue-600',
    purple: 'from-purple-400 to-purple-600',
    green: 'from-green-400 to-green-600',
    red: 'from-red-400 to-red-600',
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
      {/* 상단 그라데이션 헤더 */}
      <div className={`bg-gradient-to-r ${colorStyles[color]} p-6 text-white`}>
        <div className="text-5xl mb-2">{icon}</div>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>

      {/* 내용 */}
      <div className="p-6">
        <p className="text-gray-600 dark:text-gray-100 leading-relaxed">{description}</p>
      </div>

      {/* 하단 버튼 */}
      <div className="px-6 pb-6">
        <Link
          href={link}
          className="block w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-semibold py-3 rounded-lg transition text-center"
        >
          자세히 보기 →
        </Link>
      </div>
    </div>
  );
}