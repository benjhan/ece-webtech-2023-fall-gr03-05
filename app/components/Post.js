import { useDarkMode } from '../components/DarkModeContext'; // Import the DarkMode context
import Link from 'next/link';

const Post = ({ post }) => {
  const { categories, content, created_at, id, tags, title } = post;
  const { darkMode } = useDarkMode(); // Use the dark mode state from context
  // Dynamic style for post block based on dark mode
  const postBlockStyle = {
    backgroundColor: darkMode ? '#333' : 'white', // Dark background for dark mode
    color: darkMode ? 'white' : 'black', // Text color for dark mode
  };
  return (
    <div className="max-w-md mx-auto shadow-md p-6 rounded-md mb-4" style={postBlockStyle}>
      <h2 className="text-2xl font-bold mb-2" style={{ color: darkMode ? '#ffffff' : '#000000' }}><Link href={`/articles/${id}`}>{title}</Link></h2>
      <p className="mb-4" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
        Categories: {categories} | Tags: {tags} | Created At: {new Date(created_at).toLocaleString()}
      </p>
      <p style={{ color: darkMode ? '#ffffff' : '#000000' }}>{content}</p>
    </div>
  );
};
export default Post;