'use client';

import { useEffect } from 'react';

export default function GoogleAnalytics() {
  useEffect(() => {
    // 添加 Google Analytics 脚本
    const scriptTag1 = document.createElement('script');
    scriptTag1.src = 'https://www.googletagmanager.com/gtag/js?id=G-6FB9EKMXN0';
    scriptTag1.async = true;
    document.head.appendChild(scriptTag1);

    // 添加 Google Analytics 配置
    const scriptTag2 = document.createElement('script');
    scriptTag2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-6FB9EKMXN0');
    `;
    document.head.appendChild(scriptTag2);

    return () => {
      // 清理函数
      document.head.removeChild(scriptTag1);
      document.head.removeChild(scriptTag2);
    };
  }, []);

  return null;
} 