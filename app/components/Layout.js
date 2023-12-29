import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Head from 'next/head';
import { useDarkMode } from './DarkModeContext';

export default function Layout({ children }) {
  // Use the dark mode state
  const { darkMode } = useDarkMode(); 
  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-light-gray text-black'}`}>
      <Head>
        <title>WebSpotReview</title>
      </Head>
      <Header />
      <main style={{ flex: 1 }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
