import Layout from '../../components/Layout.js'
import { useRouter } from 'next/router.js'
import Post from '@/components/Post.js'
import { useEffect, useState } from 'react';
import { supabase } from '@/components/SupabaseClient.js';
import Comments from '@/components/Comments.js';
import CommentForm from '@/components/CommentForm.js';
import { useUser } from '@supabase/auth-helpers-react';

export default function Page() {
  // Check if user is logged in
  const user = useUser();
  const router = useRouter();
  const { slug: id } = router.query
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([])
  console.log(id)
  useEffect(() => {
    if (!id) return; // Needs to wait because it fetches at build time

    (async () => {
      try {
        let { data, error } = await supabase
          .from('posts')
          .select()
          .filter('id', 'eq', id) // Filter by the id
        if (error) {
          console.error('Error fetching data:', error);
          return;
        }
        setPosts(data);
        // Fetch comments
        let { data: commentsData, error: commentsError } = await supabase
          .from('comments')
          .select()
          .filter('id', 'eq', id)

        if (commentsError) {
          console.error('Error fetching comments:', commentsError);
          return;
        }
        setComments(commentsData);
      } catch (error) {
        console.error('An unexpected error occurred:', error.message);
      }
    })();
  }, [id]);
  const handleNewComment = async (comment) => {
    let { data, error } = await supabase
      .from('comments')
      .insert([
        { id: id, content: comment.commentText, email: comment.email },
      ]);

    if (error) {
      console.error('Error inserting comment:', error);
      return;
    }
  };
  return (
    <Layout>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
      {user ? (
        <div>
          <CommentForm onSubmit={handleNewComment} />
        </div>
      ) : (
        <div className="max-w-md mx-auto shadow-md rounded-md mb-4 flex items-center justify-center h-full">
        <h1 href="">Login to comment!</h1>
       </div>
      )}
      <ul>
        {comments.map((comment, index) => (
          <Comments key={index} comment={comment} />
        ))}
      </ul>
    </Layout>
  )
}

