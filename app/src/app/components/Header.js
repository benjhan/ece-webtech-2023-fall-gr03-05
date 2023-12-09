"use client"
import Link from 'next/link'
import Image from 'next/image'
import UserContext from "../providers.js"


export default function Header() {
  // const {profile, login, logout} = useContext(UserContext)
  return (
    <header className="bg-blue-500 py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <Link href={`/`} className="flex items-center space-x-2 text-white">
          <Image src="/favicon.ico" alt="Adaltas Logo" width={25} height={25} />
          <span className="text-xl font-bold">Web technologies</span>
        </Link>
      </div>
      <ul className="flex space-x-6">
        <li>
          <Link href="/contacts" className="text-white hover:text-blue-200">Contacts</Link>
        </li>
        <li>
          <Link href="/admin/contacts" className="text-white hover:text-blue-200">View Contacts</Link>
        </li>
        <li>
          <Link href="/articles" className="text-white hover:text-blue-200">Articles</Link>
        </li>

      </ul>
    </header>
  )
}


