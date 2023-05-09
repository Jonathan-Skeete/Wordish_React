'use client'
import styles from './page.module.css'
import Head from 'next/head'
import React from 'react'
import { getRandomWord, isalpha  } from './functions.js'
import { words  } from './words.js'


export default function Home() {
  const input2Ref = React.useRef(null);
  const input3Ref = React.useRef(null);
  const input4Ref = React.useRef(null);
  const input5Ref = React.useRef(null);
  const input6Ref = React.useRef(null);
  const [input1Editable, setInput1Editable] = React.useState(true);
  const [input2Editable, setInput2Editable] = React.useState(false);
  const [input3Editable, setInput3Editable] = React.useState(false);
  const [input4Editable, setInput4Editable] = React.useState(false);
  const [input5Editable, setInput5Editable] = React.useState(false);
  const [input6Editable, setInput6Editable] = React.useState(false);
  const [isFocused2, setIsFocused2] = React.useState(false);
  const [isFocused3, setIsFocused3] = React.useState(false);
  const [isFocused4, setIsFocused4] = React.useState(false);
  const [isFocused5, setIsFocused5] = React.useState(false);
  const [isFocused6, setIsFocused6] = React.useState(false);
  const [text1, setText1] = React.useState('');
  const [text2, setText2] = React.useState('');
  const [text3, setText3] = React.useState('');
  const [text4, setText4] = React.useState('');
  const [text5, setText5] = React.useState('');
  const [text6, setText6] = React.useState('');
  const [result, setResult] = React.useState("*  *  *  *  *");
  const [answer, setAnswer] = React.useState("*  *  *  *  *");
  const [letters, setLetters] = React.useState("");
  const [randomWord, setRandomWord] = React.useState(React.useEffect(() => setRandomWord(getRandomWord()), []));

  const restart_game = () => {
    setInput1Editable(true);
    setInput2Editable(false);
    setInput3Editable(false);
    setInput4Editable(false);
    setInput5Editable(false);
    setInput6Editable(false);
    setIsFocused2(false);
    setIsFocused3(false);
    setIsFocused4(false);
    setIsFocused5(false);
    setIsFocused6(false);
    setText1("");
    setText2("");
    setText3("");
    setText4("");
    setText5("");
    setText6("");
    setAnswer("*  *  *  *  *");
    setResult("*  *  *  *  *");
    setLetters("");
    setRandomWord(getRandomWord());
  }

  const handleInput1Submit = (event) => {
    if (event.key === 'Enter') 
    {
      event.preventDefault();
      if (text1.length < 5 || !isalpha(text1) || !words.includes(text1.toUpperCase()))
      {
        return;
      }
    
      if (text1.toUpperCase() === randomWord) 
      {
        setResult(randomWord);
        setAnswer(randomWord);
        setInput1Editable(false);
        setText1(text1.toUpperCase());
        return;
      }
      setText1(text1.toUpperCase());
      let display_word1 = "";
      let display_letters1 = new Set();
      for (let i = 0; i < 5; i++)
      {
        if (text1[i].toUpperCase() === randomWord[i])
        {
          display_word1 += randomWord[i];
        }
        else
        {
          if (i < 4)
          {
            display_word1 += "*  ";
          }
          else
          {
            display_word1 += "*";
          }
        }
        if (text1[i].toUpperCase() != randomWord[i])
        {
          for (let j = 0; j < 5;j++)
          {
            if (i === j)
            {
              continue;
            }
            if (text1[i].toUpperCase() === randomWord[j])
            {
              display_letters1.add(randomWord[j]);
            }
          }
        }
      }
   
      setLetters(Array.from(display_letters1).join(' - '));
      console.log("letters:", Array.from(display_letters1).join(' - '));
      setResult(display_word1);
      setInput2Editable(true);
      setIsFocused2(true);
      input2Ref.current.focus();
      setInput1Editable(false);
      console.log(input2Ref);
    }
  };
  React.useEffect(() => {
    console.log('input2Editable changed to:', input2Editable);
    console.log('inputFocused2 changed to:', isFocused2);
    input2Ref.current.focus();
    input2Ref.current.click();
  }, [input2Editable,isFocused2]);
  

  const handleInput2Submit = (event) => {
    if (event.key === 'Enter')
    {
      event.preventDefault();
      if (text2.length < 5 || !isalpha(text2) || !words.includes(text2.toUpperCase()))
      {
        return;
      }
      if (text2.toUpperCase() === randomWord) 
      {
        setResult(randomWord);
        setAnswer(randomWord);
        setInput2Editable(false);
        setText2(text2.toUpperCase());
        return;
      }
      setText2(text2.toUpperCase());
      let display_word2 = "";
      let display_letters2 = new Set();
      for (let i = 0; i < 5; i++)
      {
        if (text2[i].toUpperCase() === randomWord[i])
        {
          display_word2 += randomWord[i];
        }
        else
        {
          if (i < 4)
          {
            display_word2 += "*  ";
          }
          else
          {
            display_word2 += "*";
          }
        }
        if (text2[i].toUpperCase() != randomWord[i])
        {
          for (let j = 0; j < 5;j++)
          {
            if (i === j)
            {
              continue;
            }
            if (text2[i].toUpperCase() === randomWord[j])
            {
              display_letters2.add(randomWord[j]);
            }
          }
        }
      }
      setLetters(Array.from(display_letters2).join(' - '));
      setResult(display_word2);
      setInput3Editable(true);
      setIsFocused3(true);
      input3Ref.current.focus();
      setInput2Editable(false);

    }
  };

  React.useEffect(() => {
    console.log('input3Editable changed to:', input3Editable);
    console.log('inputFocused3 changed to:', isFocused3);
    input3Ref.current.focus();
    input3Ref.current.click();
  }, [input3Editable,isFocused3]);

  const handleInput3Submit = (event) => {
    if (event.key === 'Enter') 
    {
      event.preventDefault();
      if (text3.length < 5 || !isalpha(text3) || !words.includes(text3.toUpperCase()))
      {
        return;
      }
      if (text3.toUpperCase() === randomWord) 
      {
        setResult(randomWord);
        setAnswer(randomWord);
        setInput3Editable(false);
        setText3(text3.toUpperCase());
        return;
      }
      setText3(text3.toUpperCase());
      let display_word3 = "";
      let display_letters3 = new Set();
      for (let i = 0; i < 5; i++)
      {
        if (text3[i].toUpperCase() === randomWord[i])
        {
          display_word3 += randomWord[i];
        }
        else
        {
          if (i < 4)
          {
            display_word3 += "*  ";
          }
          else
          {
            display_word3 += "*";
          }
        }
        if (text3[i].toUpperCase() != randomWord[i])
        {
          for (let j = 0; j < 5;j++)
          {
            if (i === j)
            {
              continue;
            }
            if (text3[i].toUpperCase() === randomWord[j])
            {
              display_letters3.add(randomWord[j]);
            }
          }
        }
      }
      setLetters(Array.from(display_letters3).join(' - '));
      setResult(display_word3);
      setInput4Editable(true);
      setIsFocused4(true);
      input4Ref.current.focus();
      setInput3Editable(false);
    }  
  };
  React.useEffect(() => {
    console.log('input4Editable changed to:', input4Editable);
    console.log('inputFocused4 changed to:', isFocused4);
    input4Ref.current.focus();
    input4Ref.current.click();
  }, [input4Editable,isFocused4]);

  const handleInput4Submit = (event) => {
    if (event.key === 'Enter') 
    {
      event.preventDefault();
      if (text4.length < 5 || !isalpha(text4) || !words.includes(text4.toUpperCase()))
      {
        return;
      }
      if (text4.toUpperCase() === randomWord) 
      {
        setResult(randomWord);
        setAnswer(randomWord);
        setInput4Editable(false);
        setText4(text4.toUpperCase());
        return;
      }
      setText4(text4.toUpperCase());
      let display_word4 = "";
      let display_letters4 = new Set();
      for (let i = 0; i < 5; i++)
      {
        if (text4[i].toUpperCase() === randomWord[i])
        {
          display_word4 += randomWord[i];
        }
        else
        {
          if (i < 4)
          {
            display_word4 += "*  ";
          }
          else
          {
            display_word4 += "*";
          }
        }
        if (text4[i].toUpperCase() != randomWord[i])
        {
          for (let j = 0; j < 5;j++)
          {
            if (i === j)
            {
              continue;
            }
            if (text4[i].toUpperCase() === randomWord[j])
            {
              display_letters4.add(randomWord[j]);
            }
          }
        }
      }
      setLetters(Array.from(display_letters4).join(' - '));
      setResult(display_word4);
      setInput5Editable(true);
      setIsFocused5(true);
      input5Ref.current.focus();
      setInput4Editable(false);
    }
  };
  React.useEffect(() => {
    console.log('input5Editable changed to:', input5Editable);
    console.log('inputFocused5 changed to:', isFocused5);
    input5Ref.current.focus();
    input5Ref.current.click();
  }, [input5Editable,isFocused5]);

  const handleInput5Submit = (event) => {
    if (event.key === 'Enter') 
    {
      event.preventDefault();
      if (text5.length < 5 || !isalpha(text5) || !words.includes(text5.toUpperCase()))
      {
        return;
      }
      if (text5.toUpperCase() === randomWord) 
      {
        setResult(randomWord);
        setAnswer(randomWord);
        setInput5Editable(false);
        setText5(text5.toUpperCase());

        return;
      }
      setText5(text5.toUpperCase());
      let display_word5 = "";
      let display_letters5 = new Set();
      for (let i = 0; i < 5; i++)
      {
        if (text5[i].toUpperCase() === randomWord[i])
        {
          display_word5 += randomWord[i];
        }
        else
        {
          if (i < 4)
          {
            display_word5 += "*  ";
          }
          else
          {
            display_word5 += "*";
          }
        }
        if (text5[i].toUpperCase() != randomWord[i])
        {
          for (let j = 0; j < 5;j++)
          {
            if (i === j)
            {
              continue;
            }
            if (text5[i].toUpperCase() === randomWord[j])
            {
              display_letters5.add(randomWord[j]);
            }
          }
        }
      }
      setLetters(Array.from(display_letters5).join(' - '));
      setResult(display_word5);
      setInput6Editable(true);
      setIsFocused6(true);
      input6Ref.current.focus();
      setInput5Editable(false);
    }
  };
  React.useEffect(() => {
    console.log('input6Editable changed to:', input6Editable);
    console.log('inputFocused6 changed to:', isFocused6);
    input6Ref.current.focus();
    input6Ref.current.click();
  }, [input6Editable,isFocused6]);

  const handleInput6Submit = (event) => {
    if (event.key === 'Enter') 
    {
      if (text6.length < 5 || !isalpha(text6) || !words.includes(text6.toUpperCase()))
      {
        return;
      }
      if (text6.toUpperCase() === randomWord) 
      {
        setResult(randomWord);
        setAnswer(randomWord);
        setInput6Editable(false);
        setText6(text6.toUpperCase());
        return;
      }
      setText6(text6.toUpperCase());
      setInput6Editable(false);
      setAnswer(randomWord);
    }  
  };

  const onChangeText1 = (newText) => {
    setText1(newText.target.value);
  };

  const onChangeText2 = (newText) => {
    setText2(newText.target.value);
  };

  const onChangeText3 = (newText) => {
    setText3(newText.target.value);
  };

  const onChangeText4 = (newText) => {
    setText4(newText.target.value);
  };

  const onChangeText5 = (newText) => {
    setText5(newText.target.value);
  };

  const onChangeText6 = (newText) => {
    setText6(newText.target.value);
  };


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.wordish}>
            Wordish
          </div>
          <div className={styles.inputContainer}>
          <input id="textInput1" 
                      className={styles.inputs}
                      placeholder="Type Here"
                      autoCapitalize="characters"
                      type="text"
                      maxLength={5}
                      onChange={onChangeText1}
                      value={text1}
                      onPaste={(event) => { event.preventDefault(); }}
                      disabled={!input1Editable}
                      onKeyDown={handleInput1Submit}
            />
            <input id="textInput2" 
                      ref={input2Ref}
                      autoFocus={input2Editable}
                      placeholder={isFocused2 ? "Type Here" : ""}
                      className={styles.inputs}
                      autoCapitalize="characters"
                      maxLength={5}
                      onChange={onChangeText2}
                      value={text2}
                      onPaste={(event) => { event.preventDefault(); }}
                      disabled={!input2Editable}
                      onKeyDown={handleInput2Submit}
            />
            <input id="textInput3" 
                      ref={input3Ref}
                      placeholder={isFocused3 ? "Type Here" : ""}
                      className={styles.inputs}
                      autoCapitalize="characters"
                      maxLength={5}
                      onChange={onChangeText3}
                      value={text3}
                      onPaste={(event) => { event.preventDefault(); }}
                      disabled={!input3Editable}
                      onKeyDown={handleInput3Submit}
            />
            <input id="textInput4" 
                      ref={input4Ref}
                      placeholder={isFocused4 ? "Type Here" : ""}
                      className={styles.inputs}
                      autoCapitalize="characters"
                      maxLength={5}
                      onChange={onChangeText4}
                      value={text4}
                      onPaste={(event) => { event.preventDefault(); }}
                      disabled={!input4Editable}
                      onKeyDown={handleInput4Submit}
            />
            <input id="textInput5" 
                      ref={input5Ref}
                      placeholder={isFocused5 ? "Type Here" : ""}
                      className={styles.inputs}
                      autoCapitalize="characters"
                      maxLength={5}
                      onChange={onChangeText5}
                      value={text5}
                      onPaste={(event) => { event.preventDefault(); }}
                      disabled={!input5Editable}
                      onKeyDown={handleInput5Submit}
            />
            <input id="textInput6" 
                      ref={input6Ref}
                      placeholder={isFocused6 ? "Type Here" : ""}
                      className={styles.inputs}
                      autoCapitalize="characters"
                      maxLength={5}
                      onChange={onChangeText6}
                      value={text6}
                      onPaste={(event) => { event.preventDefault(); }}
                      disabled={!input6Editable}
                      onKeyDown={handleInput6Submit}
                      
            />
            <span className={styles.sofar}>{result}</span>
            <span className={styles.letters}>{letters}</span>
            <span className={styles.answer}>{answer}</span>
            <button className={styles.restart} onClick={text1.length>0 ? restart_game : undefined}>
              Restart Game
            </button>
          </div>
        </div>
      </div>
      
    </>
  )

}

// cd Programming
// npx create-next-app wordish_next
// cd wordish_next  
// code .  
// npm run dev
//   
//
//
//