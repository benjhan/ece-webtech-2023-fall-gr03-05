import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import UserContext from './UserContext';
import { useDarkMode } from './DarkModeContext'; // Import the useDarkMode hook

export default function Header() {
  const { user } = useContext(UserContext);
  const { darkMode, setDarkMode } = useDarkMode(); // Use the darkMode state and setDarkMode function

  return (
    <header className="bg-custom-teal py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <Link href={`/`} passHref>
          <span className="flex items-center space-x-2 text-white cursor-pointer">
            <Image src="/plane.png" alt="Icon Logo" width={25} height={25} />
            <span className="text-white hover:text-blue-200 text-xl font-bold">WebSpotBlog</span>
          </span>
        </Link>
      </div>
      <ul className="flex space-x-6 items-center">
      <li>
          <div className="flex items-center">
            <span className="text-white text-xl font-bold mr-2">Dark Mode</span>
            <label className="switch">
              <input 
                type="checkbox" 
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </li>
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
          <Link href="/createpost" passHref>
            <span className="text-white hover:text-blue-200 cursor-pointer text-xl font-bold">Create post</span>
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
