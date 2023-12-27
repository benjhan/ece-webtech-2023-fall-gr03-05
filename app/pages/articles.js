import Link from 'next/link';
import Layout from '../components/Layout.js';
import { useState, useEffect } from 'react';
import { supabase } from '@/components/SupabaseClient.js';
import Post from '@/components/Post.js';

export default function Posts() {
  const [posts, setPosts] = useState([]);

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

        setPosts(data);
        console.log(data);
      } catch (error) {
        console.error('An unexpected error occurred:', error.message);
      }
    })();
  }, []);

  return (
    <Layout>
      <h1 className="max-w-md mx-auto bg-white shadow-md p-6 rounded-md mb-4 text-2xl font-bold mb-2 text-center">
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