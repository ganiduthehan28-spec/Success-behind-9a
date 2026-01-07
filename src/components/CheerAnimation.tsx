'use client';

import { useMemo } from 'react';

const CheerAnimation = () => {
  const shapes = useMemo(() => {
    const shapeCount = 50;
    const colors = ['#3b82f6', '#10b981', '#ef4444', '#f97316', '#8b5cf6'];

    return Array.from({ length: shapeCount }).map((_, i) => {
      const size = Math.random() * 20 + 10; // 10px to 30px
      const style = {
        width: `${size}px`,
        height: `${size}px`,
        left: `${Math.random() * 100}vw`,
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        animationDuration: `${Math.random() * 5 + 5}s`, // 5s to 10s
        animationDelay: `${Math.random() * 5}s`, // 0s to 5s
      };
      return <div key={i} className="cheer-shape" style={style} />;
    });
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-50">
      {shapes}
    </div>
  );
};

export default CheerAnimation;
