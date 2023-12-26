import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import UserContext from './UserContext';

export default function Header() {
  const { user } = useContext(UserContext);

  return (
    <header className="bg-custom-teal py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <Link href={`/`} passHref>
          <span className="flex items-center space-x-2 text-white cursor-pointer">
            <Image src="/plane.png" alt="Icon Logo" width={25} height={25} />
            <span className=" text-white hover:text-blue-200 text-xl font-bold">WebSpotBlog</span>
          </span>
        </Link>
      </div>
      <ul className="flex space-x-6">
        <li>
          <Link href="/articles" passHref>
            <span className="text-white hover:text-blue-200 cursor-pointer text-xl font-bold">Articles</span>
          </Link>
        </li>
        <li>
          <Link href="/about" passHref>
            <span className="text-white hover:text-blue-200 cursor-pointer text-xl font-bold">About us</span>
          </Link>
        </li>
        <li>
          <Link href="/contacts" passHref>
            <span className="text-white hover:text-blue-200 cursor-pointer text-xl font-bold">Contact us</span>
          </Link>
        </li>
        <li>
          {user ? (
            <Link href="/profile" passHref>
              <span className="text-white hover:text-blue-200 cursor-pointer text-xl font-bold">Profile</span>
            </Link>
          ) : (
            <Link href="/login" passHref>
              <span className="text-white hover:text-blue-200 cursor-pointer text-xl font-bold">Login</span>
            </Link>
          )}
        </li>
      </ul>
    </header>
  );
}
