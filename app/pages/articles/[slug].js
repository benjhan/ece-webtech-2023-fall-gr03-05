import Layout from '../../components/Layout.js'
import { useRouter } from 'next/router.js'
import Post from '@/components/Post.js'
import { useEffect, useState } from 'react';
import { supabase } from '@/components/SupabaseClient.js';
import Comments from '@/components/Comments.js';
import CommentForm from '@/components/CommentForm.js';
import { useUser } from '@supabase/auth-helpers-react';
import { useDarkMode } from '../../components/DarkModeContext';

export default function Page() {
  // Check if user is logged in
  const user = useUser();
  const router = useRouter();
  const { slug: id } = router.query
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([])
  const [hoveredButton, setHoveredButton] = useState('');
  const { darkMode } = useDarkMode();
  const [formData, setFormData] = useState({title: '',content: '',tags: '',categories: ''});
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
  const deletePost = async ({id}) => {
    const new_id = parseInt(id, 10);
    try {
      await supabase.from("posts").delete().eq("id", new_id);
      const { data, error: PostsError } = await supabase
        .from("posts")
        .delete()
        .eq("id", new_id);

      if (PostsError) {
        console.error('Error deleting Posts:', PostsError);
        return;
      }
      console.log('Post deleted successfully:', data);
    }catch(error){
      console.error('Unexpected error:', error.message);
    }
    router.push(`/articles`);
  }
  const buttonStyle = (buttonName) => ({backgroundColor: '#0070f3',color: 'white',padding: '10px 20px',borderRadius: '5px',marginBottom: '20px',border: 'none',cursor: 'pointer',transition: 'transform 0.3s ease',transform: hoveredButton === buttonName ? 'scale(1.1)' : 'scale(1)',position: 'absolute',right: '55%',margin: '10px',});
  const inputStyle = {backgroundColor: darkMode ? '#555' : 'white',color: darkMode ? 'white' : 'black',border: darkMode ? '1px solid #777' : '1px solid #ccc',padding: '10px',borderRadius: '4px',};
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
  // Function to update state based on form input
  const updateFormData = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
};
// Function to handle form submission
const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Insert data into Supabase
    const { data, error } = await supabase
        .from('posts')
        .update([{ ...formData } ]);
    if (error) {
        console.error("Error inserting data", error);
        // Here you can handle the error, such as displaying a notification to the user
    } else {
        // Navigate to the 'contact-us' page or whatever page you want after successful form submission
        router.push('/articles'); // Adjust this to your desired route
    }
};
  return (
    <Layout>
      <section>
      <div class="grid grid-cols-2">
        <div>
        <ul>
          <button style={buttonStyle('post')}onMouseEnter={() => setHoveredButton('post')}onMouseLeave={() => setHoveredButton('')}onClick={async() => await deletePost({id})}>Delete</button>
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
      </div>
      <div style={{padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: 'auto', maxWidth: '500px' }}>
        <h1 style={{ fontWeight: 'bold', fontSize: '2rem' }}>Edit Post</h1>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <p>
            <label htmlFor="title" className="block text">Title</label>
            <input type="text" id="title" name="title" onChange={updateFormData} required style={inputStyle} />
          </p>
          <p>
            <label htmlFor="tags" className="block text">Tags</label>
            <input type="text" id="tags" name="tags" onChange={updateFormData} required style={inputStyle} />
          </p>
          <p>
            <label htmlFor="categories" className="block text">Categories</label>
            <input id="categories" name="categories" onChange={updateFormData}required style={inputStyle} ></input>
          </p>
          <p>
            <label htmlFor="content" className="block text">Contents</label>
            <textarea type="message" id="content" name="content" onChange={updateFormData} required style={inputStyle} />
          </p>
          <button style={buttonStyle('post')} onMouseEnter={() => setHoveredButton('post')} onMouseLeave={() => setHoveredButton('')}>Post now</button>
        </form>
      </div>
      </div>
      </section>
    </Layout>
  )
}