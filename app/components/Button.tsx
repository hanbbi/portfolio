// 버튼의 속성(props) 타입 정의
interface ButtonProps {
  onClick: () => void;      // 클릭 시 실행할 함수
  children: React.ReactNode; // 버튼 안의 텍스트
  color: 'red' | 'blue' | 'gray' | 'green'; // 색상 선택
}

export default function Button({ onClick, children, color }: ButtonProps) {
  // 색상별 스타일 매핑
  const colorStyles = {
    red: 'bg-red-500 hover:bg-red-600',
    blue: 'bg-blue-500 hover:bg-blue-600',
    gray: 'bg-gray-500 hover:bg-gray-600',
    green: 'bg-green-500 hover:bg-green-600',
  };

  return (
    <button
      onClick={onClick}
      className={`${colorStyles[color]} text-white px-6 py-3 rounded-lg transition`}
    >
      {children}
    </button>
  );
}