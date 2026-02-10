import GradientText from './GradientText';

export default function GradientShowcase() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 space-y-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
        그라데이션 텍스트 쇼케이스
      </h2>
      
      <div className="space-y-6 text-center">
        {/* 1. 핑크 → 퍼플 → 블루 */}
        <GradientText 
          from="from-pink-500" 
          via="via-purple-500" 
          to="to-blue-500"
          size="6xl"
        >
          멋진 제목
        </GradientText>
        
        {/* 2. 오렌지 → 레드 */}
        <GradientText 
          from="from-orange-500" 
          to="to-red-500"
          size="4xl"
        >
          불타는 열정
        </GradientText>
        
        {/* 3. 그린 → 틸 */}
        <GradientText 
          from="from-green-400" 
          to="to-teal-500"
          size="4xl"
        >
          자연의 색
        </GradientText>
        
        {/* 4. 인디고 → 퍼플 */}
        <GradientText 
          from="from-indigo-500" 
          via="via-purple-500"
          to="to-pink-500"
          size="4xl"
        >
          우주의 신비
        </GradientText>
        
        {/* 5. 옐로우 → 오렌지 → 레드 */}
        <GradientText 
          from="from-yellow-400" 
          via="via-orange-500"
          to="to-red-500"
          size="4xl"
        >
          일몰의 아름다움
        </GradientText>
      </div>
      
      {/* 추가 효과들 */}
      <div className="mt-12 space-y-6">
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">호버 효과</p>
          <h2 className="
            text-5xl font-bold
            bg-gradient-to-r from-cyan-500 to-blue-500
            bg-clip-text text-transparent
            hover:from-blue-500 hover:to-cyan-500
            transition-all duration-500
            cursor-pointer
          ">
            마우스 올려보세요!
          </h2>
        </div>
        
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">애니메이션 그라데이션</p>
          <h2 className="
            text-5xl font-bold
            bg-gradient-to-r from-purple-400 via-pink-500 to-red-500
            bg-clip-text text-transparent
            bg-[length:200%_auto]
            animate-[gradient_3s_linear_infinite]
          ">
            흐르는 색상
          </h2>
        </div>
      </div>
    </div>
  );
}