interface SkillCategory {
  title: string;
  icon: string;
  skills: {
    name: string;
    level: 1 | 2 | 3;
    description?: string;
  }[];
}

const skillData: SkillCategory[] = [
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Java', level: 3, description: 'Spring Boot' },
      { name: 'MySQL', level: 3, description: '쿼리 최적화, 설계' },
      { name: 'MyBatis / JPA', level: 2 },
      { name: 'Next.js', level: 1, description: 'Claude Code 활용하여 학습 중' },
    ],
  },
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'HTML / CSS', level: 3, description: '반응형, 크로스 브라우징' },
      { name: 'JavaScript', level: 3, description: 'ES6+, 비동기 처리' },
      { name: 'React', level: 1, description: 'Claude Code 활용하여 학습 중' },
      { name: 'TypeScript', level: 1, description: 'Claude Code 활용하여 학습 중' },
    ],
  },
  {
    title: 'DevOps & Server',
    icon: '🖥️',
    skills: [
      { name: 'Apache Tomcat', level: 2, description: 'WAR 배포, 운영' },
      { name: 'Linux', level: 2, description: 'SSH, 로그 분석' },
      { name: 'SSL 인증서', level: 2, description: '발급 및 갱신' },
    ],
  },
  {
    title: 'Tools',
    icon: '🛠️',
    skills: [
      { name: 'Git / SVN', level: 2 },
      { name: 'VS Code / STS4', level: 2 },
      { name: 'Xcode', level: 2, description: 'iOS 앱 개발' },
      { name: 'Figma', level: 2, description: '디자인 협업' },
    ],
  },
];

const levelStars = (level: number) => {
  return '⭐'.repeat(level) + '☆'.repeat(3 - level);
};

const levelLabel = (level: number) => {
  const labels = ['', '학습 중', '사용 가능', '능숙'];
  return labels[level];
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        {/* 섹션 제목 */}
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">
            Skills
          </span>
        </h2>

        {/* 스킬 그리드 */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillData.map((category) => (
            <div
              key={category.title}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* 카테고리 헤더 */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* 스킬 목록 */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-xl"
                  >
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-white">
                        {skill.name}
                      </p>
                      {skill.description && (
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.description}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="text-lg">{levelStars(skill.level)}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {levelLabel(skill.level)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 범례 */}
        <div className="flex justify-center gap-8 mt-12 text-sm text-gray-500 dark:text-gray-400">
          <span>⭐☆☆ 학습 중</span>
          <span>⭐⭐☆ 사용 가능</span>
          <span>⭐⭐⭐ 능숙</span>
        </div>
      </div>
    </section>
  );
}
