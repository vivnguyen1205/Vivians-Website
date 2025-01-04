import React, { useState, useEffect } from 'react';

const TypingComp = ({ words, colors }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [currentColor, setCurrentColor] = useState('');

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1150);

    return () => clearInterval(typingInterval);
  }, [words]);

  useEffect(() => {
    const typeWord = () => {
      setCurrentWord(words[currentWordIndex]);
      setCurrentColor(colors[currentWordIndex]);
    };

    const typeWordInterval = setInterval(typeWord, 100);

    return () => clearInterval(typeWordInterval);
  }, [currentWordIndex, words, colors]);

  return <span style={{ color: currentColor }}>{currentWord}</span>;
};

function Home() {
  const colors = ['var(--color-secondary)', 'var(--color-secondary)','var(--color-secondary)', 'var(--color-secondary)']; 

  return (
    <>
      <h1 className="top-h1" style={{ marginBottom: '0px' }}>
        hey there,
      </h1>
      <h1 style={{ marginTop: '0px', marginBottom: '0px' }}> i'm vivian nguyen!</h1>
      <br />
      <p>
        welcome to my <i>tiny</i> section of the internet!
        <br />
        <br />
        <br />
        <br />
        <br />
        (or anywhere here)
        <br />
        <br />
      </p>
    </>
  );
}

export default Home;
