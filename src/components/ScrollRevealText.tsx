import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  staggerMs?: number;
  highlightWords?: string[];
}

export const ScrollRevealText: React.FC<ScrollRevealTextProps> = ({
  text,
  className = '',
  wordClassName = '',
  tag: Tag = 'h2',
  staggerMs = 50,
  highlightWords = [],
}) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const words = text.split(' ');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    // @ts-expect-error dynamic tag creation
    <Tag ref={containerRef} className={`flex flex-wrap items-center gap-x-[0.28em] gap-y-1 ${className}`}>
      {words.map((word, index) => {
        const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        const isHighlight = highlightWords.some(
          (hw) => hw.toLowerCase() === cleanWord
        );

        return (
          <span
            key={`${word}-${index}`}
            className={`reveal-word ${isVisible ? 'revealed' : ''} ${
              isHighlight ? 'glow-keyword active-glow font-bold' : ''
            } ${wordClassName}`}
            style={{
              transitionDelay: `${index * staggerMs}ms`,
            }}
          >
            {word}
          </span>
        );
      })}
    </Tag>
  );
};
