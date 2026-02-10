export default function AboutPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100 dark:from-gray-900 dark:to-purple-950">
      <div className="bg-white dark:bg-gray-800 p-12 rounded-2xl shadow-xl max-w-2xl">
        <h1 className="text-5xl font-bold mb-6 text-purple-600 dark:text-purple-400">
          소개 페이지
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-200 mb-4">
          안녕하세요! 👋
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          이것은 Next.js + React + TypeScript로 만든
          첫 번째 웹 애플리케이션입니다.
        </p>
        <div className="mt-8 p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            💡 <strong>재미있는 사실:</strong> 이 페이지는
            app/about/page.tsx 파일 하나로 자동 생성되었습니다!
            정말 신기하네요.
          </p>
        </div>
      </div>
    </div>
  );
}