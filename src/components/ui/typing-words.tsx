"use client";

import { useEffect, useState, useRef } from "react";

export function TypingWords({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseBeforeDelete = 1200,
  className = "",
}: {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseBeforeDelete?: number;
  className?: string;
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const pauseScheduled = useRef(false);

  const currentWord = words[wordIndex % words.length];

  useEffect(() => {
    if (!currentWord) return;

    if (
      !isDeleting &&
      currentText === currentWord &&
      currentWord.length > 0 &&
      !pauseScheduled.current
    ) {
      pauseScheduled.current = true;
      const t = setTimeout(() => {
        setIsDeleting(true);
        pauseScheduled.current = false;
      }, pauseBeforeDelete);
      return () => clearTimeout(t);
    }

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < currentWord.length) {
            setCurrentText(currentWord.slice(0, currentText.length + 1));
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentWord.slice(0, currentText.length - 1));
          } else {
            setIsDeleting(false);
            setWordIndex((i) => i + 1);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    currentWord,
    currentText,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseBeforeDelete,
  ]);

  return (
    <span className={`inline ${className}`}>
      <span aria-hidden="true" className="inline">
        {currentText.split("").map((char, i) => (
          <span key={`${wordIndex}-${i}`} className="typing-words-char">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
      <span
        className="typing-words-cursor"
        aria-hidden="true"
        style={{
          display: "inline-block",
          width: 8,
          height: 8,
          marginLeft: 4,
          borderRadius: "50%",
          backgroundColor: isDeleting ? "#ef4444" : "#3b82f6",
          opacity: 0.9,
          verticalAlign: "middle",
        }}
      />
    </span>
  );
}
