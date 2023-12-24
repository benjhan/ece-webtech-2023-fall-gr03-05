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
        {!isLoggedIn ? (
          <>
            <li>
              <Link href="/login" passHref>
                <button className="text-white hover:text-blue-200 text-xl font-bold">Login</button>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="flex items-center text-white hover:text-blue-200 cursor-pointer text-xl font-bold">
             {userProfile && (
                 <Image src={`/${userProfile.image}`} alt="User Icon" width={25} height={25} />
                )}
             <span className="text-xl font-bold">Welcome, {userProfile ? userProfile.username : ''}</span>
              </li>


            <li>
              <button onClick={handleDisconnect} className="text-white hover:text-blue-200 text-xl font-bold">
                Disconnect
              </button>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}
