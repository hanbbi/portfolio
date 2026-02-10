export default function AnimationDemo() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
        애니메이션 데모
      </h2>

      <div className="space-y-8">
        {/* 1. 튀는 효과 */}
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Bounce (튀기)</p>
          <div className="animate-bounce inline-block text-4xl">
            ⬇️
          </div>
        </div>
        
        {/* 2. 깜빡임 */}
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Pulse (깜빡임)</p>
          <div className="animate-pulse inline-block bg-blue-500 text-white px-6 py-3 rounded-lg">
            로딩 중...
          </div>
        </div>
        
        {/* 3. 회전 */}
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Spin (회전)</p>
          <div className="animate-spin inline-block text-4xl">
            ⚙️
          </div>
        </div>
        
        {/* 4. 핑 (파동) */}
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Ping (파동)</p>
          <div className="relative inline-block">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-12 w-12 bg-red-500 items-center justify-center text-white">
              🔴
            </span>
          </div>
        </div>
        
        {/* 5. 커스텀 애니메이션 (호버) */}
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Hover Animation (마우스 올려보세요)</p>
          <button className="
            bg-gradient-to-r from-purple-500 to-pink-500
            text-white px-8 py-4 rounded-lg font-bold
            transform transition-all duration-300
            hover:scale-110 hover:rotate-3
            hover:shadow-2xl
            active:scale-95
          ">
            애니메이션 버튼
          </button>
        </div>
        
        {/* 6. 슬라이드 인 */}
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Slide In</p>
          <div className="
            bg-green-500 text-white px-6 py-3 rounded-lg inline-block
            animate-[slideIn_1s_ease-in-out]
          ">
            왼쪽에서 나타남!
          </div>
        </div>
      </div>
    </div>
  );
}