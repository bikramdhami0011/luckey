"use client"
import { useEffect } from 'react';
import gsap from 'gsap';
import style from "./page.module.css"

const TextReveal = ({ text }) => {
  useEffect(() => {
    const revealText = () => {
      const letters = text.split('');

      const tl = gsap.timeline({ defaults: { duration: 0.5 } });

      letters.forEach((letter, index) => {
        tl.fromTo(`.letter-${index}`, { opacity: 0 ,duration:0.1}, { opacity: 1 ,duration:0.1 });
        tl.repeat();
      });
    };

    revealText();
  }, [text]);

  return (
    <div className={style.cenword}>
    <div>

      {text.split('').map((letter, index) => (
        <span key={index} className={`letter letter-${index}`} style={{ opacity: 0 }}>
          {letter}
        </span>
      ))}
    </div>
    </div>
  );
};

export default TextReveal;


