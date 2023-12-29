import Link from 'next/link';
import Layout from '../../components/Layout.js';
import { useState, useEffect } from 'react';
import { supabase } from '@/components/SupabaseClient.js';
import Post from '@/components/Post.js';
import { useDarkMode } from '../../components/DarkModeContext.js';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [hoveredButton, setHoveredButton] = useState('');
  const { darkMode } = useDarkMode();
  useEffect(() => {
    (async () => {
      try {
        let { data, error } = await supabase
          .from('posts')
          .select();

        if (error) {
          console.error('Error fetching data:', error);
          return;
        }

        const sortedData = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setPosts(sortedData);
      } catch (error) {
        console.error('An unexpected error occurred:', error.message);
      }
    })();
  }, []);

  const buttonStyle = (buttonName) => ({
    backgroundColor: '#0070f3',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    marginBottom: '20px',
    border: 'none',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    transform: hoveredButton === buttonName ? 'scale(1.1)' : 'scale(1)',
    position: 'absolute',
    right: '25%',
    margin: '10px',
  });

   return (
    <Layout>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', width: '100%' }}>
        <h1 className="max-w-md mx-auto shadow-md p-6 rounded-md mb-4 text-2xl font-bold mb-2 text-center" style={{ backgroundColor: darkMode ? '#333' : 'white', color: darkMode ? 'white' : 'black' }}>
          Articles Page
        </h1>
        <Link href="/createpost" passHref>
          <button 
            style={buttonStyle('post')}
            onMouseEnter={() => setHoveredButton('post')}
            onMouseLeave={() => setHoveredButton('')}
          >
            Post
          </button>
        </Link>
      </div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </Layout>
  );
}