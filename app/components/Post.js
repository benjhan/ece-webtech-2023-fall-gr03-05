import { useRouter } from 'next/router';
import { useDarkMode } from '../components/DarkModeContext';

const Post = ({ post }) => {
  const router = useRouter();
  // Dynamic style for post block based on dark mode
  const { categories, content, created_at, id, tags, title } = post;
  // Style for dark mode
  const { darkMode } = useDarkMode();
  // Style for post block
  const postBlockStyle = {backgroundColor: darkMode ? '#333' : 'white',color: darkMode ? 'white' : 'black',borderRadius: '10px',padding: '20px',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',textDecoration: 'none',cursor: 'pointer', };
  // Navigate to post page
  const navigateToPost = () => {router.push(`/articles/${id}`);};
  return (
    <div className="max-w-md mx-auto shadow-md p-6 rounded-md mb-4" style={postBlockStyle} onClick={navigateToPost}>
      <h2 className="text-2xl font-bold mb-2">
        {title}
      </h2>
      <p className="mb-4">
        Categories: {categories} | Tags: {tags} | Created At: {new Date(created_at).toLocaleString()}
      </p>
      <p>{content}</p>
    </div>
  );
};
export default Post;