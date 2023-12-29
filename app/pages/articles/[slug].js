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
  const [hoveredButton2, setHoveredButton2] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);
  const { darkMode } = useDarkMode();
  const [authorId, setAuthorId] = useState(null);
  const [formData, setFormData] = useState({title: '',content: '',tags: '',categories: ''});
  useEffect(() => {
    if (!id) return; // Attendre l'obtention de l'ID
    // Fonction auto-invoquée pour les appels asynchrones
    (async () => {
      try {
        // Récupérer les détails du post
        let { data: postData, error: postError } = await supabase
          .from('posts')
          .select()
          .eq('id', id);
        if (postError) {
          console.error('Error fetching post data:', postError);
          return;
        }
        // Définir les données du post
        if (postData && postData.length > 0) {
          setPosts(postData);
          // Pré-remplir le formulaire avec les données du post
          setFormData({
            title: postData[0].title,
            content: postData[0].content,
            tags: postData[0].tags,
            categories: postData[0].categories
          });
        }
        // Récupérer les commentaires
        let { data: commentsData, error: commentsError } = await supabase
          .from('comments')
          .select()
          .eq('post_id', id); // Assurez-vous que la colonne de liaison est correcte (ex: post_id)
        if (commentsError) {
          console.error('Error fetching comments:', commentsError);
          return;
        }
        setComments(commentsData);
      } catch (error) {
        console.error('An unexpected error occurred:', error.message);
      }
      if (postData && postData.length > 0) {
        setAuthorId(postData[0].created_by); // Replace 'created_by' with your actual field name
      }
    })();
  }, [id]);
  const isAuthor = user && authorId && user.id === authorId;
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
  const buttonStyle = (buttonName) => ({backgroundColor: '#0070f3',color: 'white',padding: '10px 20px',borderRadius: '10px',marginBottom: '20px',border: 'none',cursor: 'pointer',transition: 'transform 0.3s ease',transform: hoveredButton === buttonName ? 'scale(1.1)' : 'scale(1)',position: 'absolute',right: '25vw',margin: '10px',});
  const buttonStyle2 = (buttonName) => ({backgroundColor: '#0070f3',color: 'white',padding: '10px 20px',borderRadius: '10px',marginBottom: '20px',border: 'none',cursor: 'pointer',transition: 'transform 0.3s ease',transform: hoveredButton2 === buttonName ? 'scale(1.1)' : 'scale(1)',position: 'absolute',right: '55%',margin: '10px',});
  const buttonStyle3 = (buttonName) => ({backgroundColor: '#0070f3',color: 'white',padding: '10px 20px',borderRadius: '10px',marginBottom: '20px',border: 'none',cursor: 'pointer',transition: 'transform 0.3s ease',transform: hoveredButton === buttonName ? 'scale(1.1)' : 'scale(1)',position: 'fixed', right: '10px', zIndex: 1000,});
  const inputStyle = {backgroundColor: darkMode ? '#555' : 'white',color: darkMode ? 'white' : 'black',border: darkMode ? '1px solid #777' : '1px solid #ccc',padding: '10px',borderRadius: '4px',};
  const toggleEditMode = () => {setIsEditMode(!isEditMode);};
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
  e.preventDefault(); // Empêcher le rechargement de la page
  // Mise à jour du post dans Supabase
  const { data, error } = await supabase
    .from('posts')
    .update({ ...formData }) // Utilisation de l'état formData pour la mise à jour
    .eq('id', id); // Assurez-vous que l'ID est correct
  if (error) {
    console.error("Error updating post", error);
    // Ici, vous pouvez ajouter des actions pour gérer l'erreur
  } else {
    router.push('/articles'); // Redirection après la mise à jour réussie
  }
};
return (
  <Layout>
    <section>
      <div className={`grid ${isEditMode ? 'grid-cols-2' : 'grid-cols-1'}`}>
        <div>
          <ul>
          <button style={buttonStyle3('delete')} onMouseEnter={() => setHoveredButton('delete')} onMouseLeave={() => setHoveredButton('')} onClick={async() => await deletePost({id})}>Delete</button>
            {!isEditMode && (<>
                <button style={buttonStyle('edit')} onMouseEnter={() => setHoveredButton('edit')} onMouseLeave={() => setHoveredButton('')} onClick={toggleEditMode}>Edit</button>
                {posts.map((post) => (
                  <li key={post.id}>
                    <Post post={post} />
                  </li>
                ))}
              </>
            )}
            {isEditMode && (<>
                <button style={buttonStyle2('closeEdit')} onMouseEnter={() => setHoveredButton2('closeEdit')} onMouseLeave={() => setHoveredButton2('')} onClick={toggleEditMode}>Close Edit</button>
                {posts.map((post) => (
                  <li key={post.id}>
                    <Post post={post} />
                  </li>
                ))}
              </>
            )}
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
          </ul>
        </div>
        {isEditMode && (
          <div style={{ padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '500px' }}>
            <h1 className="max-w-md mx-auto shadow-md p-6 rounded-md mb-4 text-2xl font-bold mb-2 text-center" style={{ backgroundColor: darkMode ? '#333' : 'white', color: darkMode ? 'white' : 'black' }}>Edit Post</h1>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p>
                <label htmlFor="title" className="block text">Title</label>
                <input type="text" id="title" name="title" onChange={updateFormData} value={formData.title} required style={inputStyle} />
              </p>
              <p>
                <label htmlFor="tags" className="block text">Tags</label>
                <input type="text" id="tags" name="tags" onChange={updateFormData} value={formData.tags} required style={inputStyle} />
              </p>
              <p>
                <label htmlFor="categories" className="block text">Categories</label>
                <input id="categories" name="categories" onChange={updateFormData} value={formData.categories} required style={inputStyle} />
              </p>
              <p>
                <label htmlFor="content" className="block text">Content</label>
                <textarea id="content" name="content" onChange={updateFormData} value={formData.content} required style={inputStyle} />
              </p>
              <button style={buttonStyle2('post')} onMouseEnter={() => setHoveredButton2('post')} onMouseLeave={() => setHoveredButton2('')}>Post now</button>
            </form>
          </div>
        )}
      </div>
    </section>
  </Layout>
);
}