import React, { useState, useEffect, useMemo } from "react";

const Typewriter = () => {
    const sentences = useMemo(() => [
        "I am a Frontend Developer",
        "I am a Java Developer",
        "I am a Backend Developer",
        "I am a Problem Solver"
      ], []);

  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 150;
  const erasingSpeed = 60;
  const newSentenceDelay = 1000; // Delay before moving to the next sentence

  useEffect(() => {
    const handleTyping = () => {
      const sentence = sentences[sentenceIndex];

      if (!isDeleting) {
        // Typing
        setCurrentText(sentence.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex === sentence.length) {
          setTimeout(() => setIsDeleting(true), newSentenceDelay);
        }
      } else {
        // Erasing
        setCurrentText(sentence.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setSentenceIndex((prev) => (prev + 1) % sentences.length);
        }
      }
    };

    const typingTimeout = setTimeout(
      handleTyping,
      isDeleting ? erasingSpeed : typingSpeed
    );

    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, sentenceIndex, sentences]);

  return (
    <div style={{ textAlign: "start",marginTop: "1%" }}>
      <h3>
        {currentText}
        <span className="cursor">|</span>
      </h3>
      <style>{`
        .cursor {
          display: inline-block;
          color: red;
          width: 2px;
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          50%, 100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Typewriter;
