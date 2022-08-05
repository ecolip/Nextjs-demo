import { useState, useRef } from 'react';
import styles from '../styles/About.module.css';

function About() {
  const [text, setText] = useState('');
  const inputRef = useRef('');

  const updateText = () => {
    console.log('這是在client side執行唷！');
    setText(inputRef.current.value);
    inputRef.current.value = '';
  };

  return (
    <div className={styles.about}>
      <div>This is about page!</div>
      <div>輸入的值: {text}</div>
      <input type='text' ref={inputRef} />
      <button onClick={()=>{updateText()}}>更新</button>
    </div>
  );
}

export default About;