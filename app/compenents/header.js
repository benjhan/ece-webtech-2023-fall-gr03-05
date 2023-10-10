import REACT from 'react'
import style from './header.module.css'
import Link from 'next/link'
const header = () =>{
    return(
        <header className={style.header}>
            <Link href="/"> Home</Link>
            <div>
            <Link href="/about"> About</Link>
            <Link href="/contacts"> Contacts</Link>  
            <Link href="/articles"> Articles</Link> 
            </div>
             
        </header>
    )
} 
export default header