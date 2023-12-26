import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Head from 'next/head';
import { useDarkMode } from './DarkModeContext'; // Import the DarkMode context

export default function Layout({ children }) {
  const { darkMode } = useDarkMode(); // Use the dark mode state

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
