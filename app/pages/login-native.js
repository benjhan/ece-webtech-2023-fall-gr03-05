import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';

export default function Login() {
  const [error, setError] = useState('');
  const [loginInfo, setLoginInfo] = useState({ username: '', password: '' });
  const router = useRouter();

  const handleLogin = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get('username');
    const password = formData.get('password');

    // Set the login info state to display it
    setLoginInfo({ username, password });

    // Optionally, log the info to the console
    console.log('Username:', username, 'Password:', password);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto p-4">
        <h1 className="text-3xl mb-4">Connexion</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Nom d’utilisateur</label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          {error && <p className="mt-4 text-red-500">{error}</p>}
          {loginInfo.username && <p className="mt-4">Username: {loginInfo.username}</p>}
          {loginInfo.password && <p>Password: {loginInfo.password}</p>}
          <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Se connecter</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
