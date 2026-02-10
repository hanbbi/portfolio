export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400 mb-4">
          이 포트폴리오는{' '}
          <span className="text-purple-400">Next.js</span> +{' '}
          <span className="text-blue-400">React</span> +{' '}
          <span className="text-cyan-400">TypeScript</span>로 제작되었습니다.
        </p>
        <p className="text-gray-500 text-sm">
          © {currentYear} 유한비. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
