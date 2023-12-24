"use client";
import Layout from '@/components/Layout';
import { useState } from 'react';


export default function Login() {
    
    const [index, setIndex] = useState(0);
  
    function handleClick() {
      setIndex(index + 1);
    }
  
    return (
    <Layout>
      <>
        <button onClick={handleClick}>
          Next
        </button>
        <p>You clicked {index} times</p>
      </>
    </Layout>
    );
    
  }
    