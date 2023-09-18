import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-blue-500 py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <Link href={`/`} className="flex items-center space-x-2 text-white">
          <Image src="/adaltas.svg" alt="Adaltas Logo" width={25} height={25} />
          <span className="text-xl font-bold">Web technologies</span>
        </Link>
      </div>
      <ul className="flex space-x-6">
        <li>
          <Link href="/articles" className="text-white hover:text-blue-200">Articles</Link>
        </li>
        <li>
          <Link href="/about" className="text-white hover:text-blue-200">About us</Link>
        </li>
        <li>
          <Link href="/contacts" className="text-white hover:text-blue-200">Contact us</Link>
        </li>
      </ul>
    </header>
  )
}

