import React, { useState, useEffect } from 'react'; 

interface Props {
  doneLoading: () => void;
};

const LoadingText: React.FC<Props> = ({ doneLoading }) => {
  const [text, setText] = useState<string>(''); 
  const [idx, setIdx] = useState<number>(0); 
  const display: string = "LOADING YOUR JOKE";

  useEffect(() => {
    if (idx < display.length) {
      const displayMethod = setTimeout(() => {
        setText(prev => prev + display[idx]); 
        setIdx(prev => prev + 1);
      }, 75); 
      return () => clearTimeout(displayMethod);
    }
    doneLoading();
  }, [idx]);

  return <h1>{text}</h1>
}; 

export default LoadingText;