import React from 'react'
import { words  } from './words.js'

// 3,284 words
export function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }
  
export function isalpha(str) {
    return /^[a-zA-Z]+$/.test(str);
  }
  
export const useMyRefs = () => {
    const input2Ref = React.useRef(null);
    const input3Ref = React.useRef(null);
    const input4Ref = React.useRef(null);
    const input5Ref = React.useRef(null);
    const input6Ref = React.useRef(null);

    return [input2Ref,input3Ref,input4Ref, input5Ref, input6Ref]
}