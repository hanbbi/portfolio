'use client'

import { useState } from 'react';
import Button from '../components/Button';
import CounterDisplay from '../components/CounterDisplay';

export default function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">
          카운터 앱
        </h1>
        
        <CounterDisplay count={count} />
        
        <div className="flex gap-4">
          <Button onClick={() => setCount(count - 1)} color="red">
            감소 -
          </Button>
          <Button onClick={() => setCount(0)} color="gray">
            리셋
          </Button>
          <Button onClick={() => setCount(count + 1)} color="blue">
            증가 +
          </Button>
          <Button onClick={() => setCount(count + 10)} color="green">
            +10
          </Button>
        </div>
      </div>
    </div>
  );
}