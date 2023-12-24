import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useUser } from '../components/UserContext'; 
import Layout from '@/components/Layout';

export default function LoginNative() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const { handleLogin } = useUser(); 

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(formData.username, formData.password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value 
    });
  };

  return (
    <Layout>
      <main className="flex-1 container mx-auto p-4">
        <h1 className="text-3xl mb-4 text-xl font-bold">Connexion</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-light-gray-700">Nom d’utilisateur</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md text-black" // Added text-black here
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password" className="block text-sm font-medium text-light-gray-700">Mot de passe</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md text-black" // Added text-black here
              required
            />
          </div>
          <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Se connecter</button>
        </form>
      </main>
    </Layout>
  );
}
