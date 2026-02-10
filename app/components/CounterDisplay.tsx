interface CounterDisplayProps {
  count: number;
}

export default function CounterDisplay({ count }: CounterDisplayProps) {
  // 숫자에 따라 색상 변경
  const getColor = () => {
    if (count === 0) return 'text-gray-600 dark:text-gray-300';
    if (count > 0) return 'text-blue-600 dark:text-blue-400';
    return 'text-red-600 dark:text-red-400';
  };

  return (
    <div className={`text-6xl font-bold mb-8 ${getColor()}`}>
      {count}
    </div>
  );
}