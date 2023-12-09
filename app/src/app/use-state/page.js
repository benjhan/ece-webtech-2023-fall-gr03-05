"use client";
import { useState } from 'react';


export default function Login() {
    
    const [index, setIndex] = useState(0);
  
    function handleClick() {
      setIndex(index + 1);
    }
  
    return (

      <>
        <button onClick={handleClick}>
          Next
        </button>
        <p>You clicked {index} times</p>
      </>

    );
    
  }
    
