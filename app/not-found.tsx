import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-red-50 to-orange-50">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-red-500 mb-4">
          404
        </h1>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          페이지를 찾을 수 없습니다
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          요청하신 페이지가 존재하지 않습니다. 😢
        </p>
        
        <div className="flex gap-4 justify-center">
          <Link 
            href="/"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            ← 홈으로 돌아가기
          </Link>
          <Link 
            href="/counter"
            className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition"
          >
            카운터 보기
          </Link>
        </div>
        
        <div className="mt-12 text-gray-500">
          <p className="text-sm">
            💡 팁: 상단 메뉴에서 원하는 페이지로 이동할 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}