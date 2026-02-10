interface GradientTextProps {
  children: string;
  from: string;
  via?: string;
  to: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '6xl';
}

export default function GradientText({ 
  children, 
  from, 
  via, 
  to,
  size = '6xl' 
}: GradientTextProps) {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '4xl': 'text-4xl',
    '6xl': 'text-6xl',
  };

  return (
    <h1 className={`
      ${sizeClasses[size]}
      font-bold
      bg-gradient-to-r 
      ${from}
      ${via || ''}
      ${to}
      bg-clip-text 
      text-transparent
      animate-[gradient_3s_ease_infinite]
    `}>
      {children}
    </h1>
  );
}