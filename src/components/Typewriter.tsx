import React, { useEffect, useState } from 'react';

interface TypewriterProps {
  roles: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  roles,
  typingSpeed = 65,
  deletingSpeed = 35,
  pauseDuration = 2000,
  className = '',
}) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const currentFullText = roles[currentRoleIndex];

    if (!isDeleting) {
      // Typing phase
      if (displayText.length < currentFullText.length) {
        // Natural speed variation
        const randomSpeed = typingSpeed + (Math.random() * 25 - 12);
        timeout = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        }, Math.max(25, randomSpeed));
      } else {
        // Completed typing full phrase, pause before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      // Deleting phase
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        // Word cleared, switch to next role
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex, roles, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <div className={`inline-flex items-center min-h-[1.75em] ${className}`}>
      <span className="text-cyan-400 font-semibold tracking-wide drop-shadow-[0_0_12px_rgba(34,211,238,0.35)]">
        {displayText}
      </span>
      <span className="typewriter-caret" aria-hidden="true" />
    </div>
  );
};
