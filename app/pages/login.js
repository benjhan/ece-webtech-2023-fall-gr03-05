import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/profile');
      if (response.ok) {
        const profiles = await response.json();
        const user = profiles.find(u => u.username === username && u.password === password);
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          router.push('/');
        } else {
          setError('Nom d’utilisateur ou mot de passe incorrect');
        }
      } else {
        console.error('Réponse du serveur : ', response.status, response.statusText);
        setError('Erreur lors de la connexion');
      }
    } catch (error) {
      console.error('Erreur lors de la connexion : ', error);
      setError('Erreur lors de la connexion');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto p-4">
        <h1 className="text-3xl mb-4">Connexion</h1>
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Nom d’utilisateur</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        {error && <p className="mt-4 text-red-500">{error}</p>}
        <button onClick={handleLogin} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Se connecter</button>
      </main>
      <Footer />
    </div>
  );
}
