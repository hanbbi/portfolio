'use client';

import { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const contacts = [
    {
      type: 'email',
      icon: '📧',
      label: 'Email',
      value: 'yhb1109@naver.com',
      href: 'mailto:yhb1109@naver.com',
    },
    {
      type: 'github',
      icon: '💻',
      label: 'GitHub',
      value: 'github.com/hanbbi',
      href: 'https://github.com/hanbbi',
    },
    {
      type: 'phone',
      icon: '📱',
      label: 'Phone',
      value: '010-2489-3539',
      href: 'tel:010-2489-3539',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto">
        {/* 섹션 제목 */}
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
            Contact
          </span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          궁금한 점이 있으시면 언제든지 연락주세요!
        </p>

        {/* 연락처 카드 */}
        <div className="grid md:grid-cols-3 gap-6">
          {contacts.map((contact) => (
            <div
              key={contact.type}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center group"
            >
              <span className="text-5xl block mb-4">{contact.icon}</span>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                {contact.label}
              </h3>
              <a
                href={contact.href}
                target={contact.type === 'github' ? '_blank' : undefined}
                rel={contact.type === 'github' ? 'noopener noreferrer' : undefined}
                className="text-purple-600 dark:text-purple-400 hover:underline block mb-3"
              >
                {contact.value}
              </a>
              <button
                onClick={() => copyToClipboard(contact.value, contact.type)}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition"
              >
                {copied === contact.type ? '✓ 복사됨!' : '📋 복사하기'}
              </button>
            </div>
          ))}
        </div>

        {/* 추가 메시지 */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 p-[2px] rounded-2xl">
            <div className="bg-white dark:bg-gray-800 rounded-2xl px-8 py-6">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                <span className="text-2xl mr-2">💬</span>
                새로운 기회와 협업에 열려있습니다!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
