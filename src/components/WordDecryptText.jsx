import { useState } from "react";

const WordDecryptedText = ({ text, speed = 200 }) => {
  const words = text.split(/(\s+)/);
  const [visibleCount, setVisibleCount] = useState(0);

  const handleClick = () => {
    if (hasAnimated) return; // 🚫 prevent re-run

    setHasAnimated(true);

    let i = 0;
    const interval = setInterval(() => {
        i++;
        setVisibleCount(i);

        if (i >= words.length) {
        clearInterval(interval);
        }
    }, speed);
  };

  const getRandomWord = (word) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*";
    return word
        .split("")
        .map((char) =>
        char === " "
            ? " "
            : chars[Math.floor(Math.random() * chars.length)]
        )
        .join("");
    };

    const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <span
        onClick={handleClick}
        className="cursor-pointer whitespace-pre-line"
        >
        {words.map((word, index) => {
  const isWord = word.trim() !== "";

  return (
    <span key={index}>
      {isWord ? (
        <span
          className={`transition-all duration-300 ${
            index < visibleCount
              ? "opacity-100 translate-y-0 text-white/90"
              : "opacity-40 translate-y-1 text-gray-500 font-mono"
          }`}
        >
          {index < visibleCount ? word : getRandomWord(word)}
        </span>
      ) : (
        word // keep spaces/newlines untouched
      )}
    </span>
  );
})}
    </span>
  );
};

export default WordDecryptedText;