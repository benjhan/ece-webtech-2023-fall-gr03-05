import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Header() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    router.push('/');
  };

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
        {user ? (
          <li className="text-white hover:text-blue-200 cursor-pointer">
            <span className="flex items-center" onClick={handleLogout}>
              <Image src="/account-icon.svg" alt="Compte" width={25} height={25} />
              <span className="ml-2">{user.username}</span>
            </span>
          </li>
        ) : (
          <li>
            <Link href="/login" passHref>
              <span className="text-white hover:text-blue-200 cursor-pointer">Login</span>
            </Link>
          </li>
        )}
      </ul>
    </header>
  );
}
