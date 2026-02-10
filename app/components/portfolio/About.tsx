export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto">
        {/* 섹션 제목 */}
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            About Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 소개 텍스트 */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              안녕하세요! <strong className="text-purple-600 dark:text-purple-400">3년차 웹 개발자 유한비</strong>입니다.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Java Spring 기반의 풀스택 개발을 주로 하고 있으며,
              현재는 <strong className="text-blue-600 dark:text-blue-400">React와 Next.js</strong>를 학습하며
              프론트엔드 전문성을 강화하고 있습니다.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              사용자 경험을 개선하고 문제를 해결하는 것에 보람을 느끼며,
              새로운 기술을 배우는 것을 즐깁니다.
            </p>

            {/* 키워드 태그 */}
            <div className="flex flex-wrap gap-2 pt-4">
              {['문제 해결', '사용자 중심', '빠른 학습', '협업'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* 정보 카드 */}
          <div className="grid gap-4">
            {/* 경력 */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-2xl text-white shadow-lg">
              <div className="flex items-center gap-4">
                <div className="text-4xl">💼</div>
                <div>
                  <h3 className="text-xl font-bold">(주) 파이어독스</h3>
                  <p className="opacity-90">웹 개발자 · 2023.04 ~ 현재</p>
                </div>
              </div>
            </div>

            {/* 학력 */}
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4">
                <div className="text-4xl">🎓</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">청운대학교</h3>
                  <p className="text-gray-600 dark:text-gray-300">컴퓨터공학과 · 2019.03 ~ 2022.02</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">학점: 3.46 / 4.5</p>
                </div>
              </div>
            </div>

            {/* 자격증 */}
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4">
                <div className="text-4xl">📜</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">자격증</h3>
                  <p className="text-gray-600 dark:text-gray-300">정보처리기사 · 2022.11</p>
                  <p className="text-gray-600 dark:text-gray-300">리눅스마스터 2급 1차 · 2022.11</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
