import Layout from '../../components/Layout.js';
import { useState, useEffect } from 'react';
import { supabase } from '@/components/SupabaseClient.js';
import Post from '@/components/Post.js';
import { useDarkMode } from '../../components/DarkModeContext.js'; // Import the DarkMode context


export default function Posts() {
  const [posts, setPosts] = useState([]);
  const { darkMode } = useDarkMode(); // Use the dark mode state from context
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
  return (
    <Layout>
      <h1 className="max-w-md mx-auto shadow-md p-6 rounded-md mb-4 text-2xl font-bold mb-2 text-center" style={{ backgroundColor: darkMode ? '#333' : 'white', color: darkMode ? 'white' : 'black' }}>
        Posts Page</h1>
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