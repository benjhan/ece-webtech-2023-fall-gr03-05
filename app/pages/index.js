import Link from 'next/link';
import Layout from '../components/Layout.js';
import { useState } from 'react'; // Import useState

export default function Page() {
  const [hoveredButton, setHoveredButton] = useState('');

  const buttonStyle = (buttonName) => ({
    backgroundColor: '#0070f3',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    marginBottom: '20px',
    border: 'none',
    cursor: 'pointer',
    transition: 'transform 0.3s ease', // Animation transition
    transform: hoveredButton === buttonName ? 'scale(1.1)' : 'scale(1)', // Scale the button
  });

  return (
    <Layout>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        textAlign: 'center', 
        padding: '50px', 
        minHeight: '80vh'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '600', marginBottom: '20px' }}>
          Welcome to WebSpotBlog!
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
          Dive into the world of travel with our articles and stories.
        </p>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'space-around', 
          maxWidth: '600px', 
          width: '100%'
        }}>
          <Link href="/articles" passHref>
            <button 
              style={buttonStyle('articles')}
              onMouseEnter={() => setHoveredButton('articles')}
              onMouseLeave={() => setHoveredButton('')}
            >
              Explore Articles
            </button>
          </Link>
          <Link href="/about" passHref>
            <button 
              style={buttonStyle('about')}
              onMouseEnter={() => setHoveredButton('about')}
              onMouseLeave={() => setHoveredButton('')}
            >
              Learn About Us
            </button>
          </Link>
          <Link href="/contacts" passHref>
            <button 
              style={buttonStyle('contacts')}
              onMouseEnter={() => setHoveredButton('contacts')}
              onMouseLeave={() => setHoveredButton('')}
            >
              Get In Touch
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}