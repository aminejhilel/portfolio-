"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TypewriterText({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBeforeDelete = 2000,
}: {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBeforeDelete?: number;
}) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingDelay, setTypingDelay] = useState(typingSpeed);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingDelay(deletingSpeed);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingDelay(typingSpeed);
      }

      if (!isDeleting && text === fullText) {
        timer = setTimeout(() => setIsDeleting(true), delayBeforeDelete);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingDelay(500); // pause before typing next
      } else {
        timer = setTimeout(handleTyping, typingDelay);
      }
    };

    timer = setTimeout(handleTyping, typingDelay);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, phrases, typingSpeed, deletingSpeed, delayBeforeDelete, typingDelay]);

  return (
    <span className="inline-block relative">
      <span className="text-white">{text}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        className="inline-block w-[4px] h-[0.9em] bg-indigo-500 align-middle ml-2 -mb-[2px]"
      />
    </span>
  );
}
