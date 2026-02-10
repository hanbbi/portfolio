export default function ContactPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-100 to-teal-100 dark:from-gray-900 dark:to-green-950">
      <div className="bg-white dark:bg-gray-800 p-12 rounded-2xl shadow-xl max-w-2xl">
        <h1 className="text-5xl font-bold mb-6 text-green-600 dark:text-green-400">
          연락처 페이지
        </h1>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📧</span>
            <span className="text-lg text-gray-700 dark:text-gray-200">yhb1109@naver.com</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">📱</span>
            <span className="text-lg text-gray-700 dark:text-gray-200">010-2489-3539</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">🏢</span>
            <span className="text-lg text-gray-700 dark:text-gray-200">인천광역시 서구</span>
          </div>
        </div>
      </div>
    </div>
  );
}