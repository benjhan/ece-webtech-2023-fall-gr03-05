import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useUser } from './UserContext'; 

export default function Header() {
  const { userProfile, isConnected, handleDisconnect } = useUser();
  const [isLoggedIn, setIsLoggedIn] = useState(isConnected);

  useEffect(() => {
    setIsLoggedIn(isConnected);
  }, [isConnected]);

  return (
    <header className="bg-blue-500 py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <Link href={`/`} passHref>
          <span className="flex items-center space-x-2 text-white cursor-pointer">
            <Image src="/icon.svg" alt="Icon Logo" width={25} height={25} />
            <span className="text-xl font-bold">Panda Express</span>
          </span>
        </Link>
      </div>
      <ul className="flex space-x-6">
        <li>
          <Link href="/articles" passHref>
            <span className="text-white hover:text-blue-200 cursor-pointer">Articles</span>
          </Link>
        </li>
        <li>
          <Link href="/about" passHref>
            <span className="text-white hover:text-blue-200 cursor-pointer">About us</span>
          </Link>
        </li>
        <li>
          <Link href="/contacts" passHref>
            <span className="text-white hover:text-blue-200 cursor-pointer">Contact us</span>
          </Link>
        </li>
        {!isLoggedIn ? (
          <>
            <li>
              <Link href="/login-native" passHref>
                <button className="text-white hover:text-blue-200">Login-Native</button>
              </Link>
            </li>
            <li>
              <Link href="/login-controlled" passHref>
                <button className="text-white hover:text-blue-200">Login-Controlled</button>
              </Link>
            </li>
            <li>
              <Link href="/login" passHref>
                <button className="text-white hover:text-blue-200">Login</button>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="text-white hover:text-blue-200 cursor-pointer">
              <span>Welcome, {userProfile ? userProfile.username : ''}</span>
            </li>
            <li>
              <button onClick={handleDisconnect} className="text-white hover:text-blue-200">
                Disconnect
              </button>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}
