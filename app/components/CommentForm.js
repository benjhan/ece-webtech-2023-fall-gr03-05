import { useState } from 'react';
import { useDarkMode } from '@/components/DarkModeContext';

const CommentForm = ({ onSubmit }) => {
  // Get dark mode state
  const { darkMode } = useDarkMode();
  // State for email and comment text
  const [email, setEmail] = useState('');
  const [commentText, setCommentText] = useState('');
  // State for hovered button
  const [hoveredButton, setHoveredButton] = useState('');
  // Style for form
  const formStyle = {backgroundColor: darkMode ? '#333' : 'white',color: darkMode ? 'white' : 'black',padding: '20px',borderRadius: '10px',};
  // Style for input
  const inputStyle = {backgroundColor: darkMode ? '#555' : 'white',color: darkMode ? 'white' : 'black',width: '100%',padding: '10px',margin: '10px 0',borderRadius: '5px',border: darkMode ? '1px solid #777' : '1px solid #ccc',margin: '10px 0',};
  // Style for button
  const buttonStyle = (buttonName) => ({backgroundColor: '#0070f3',color: 'white',padding: '10px',borderRadius: '5px',marginBottom: '10px',border: 'none',cursor: 'pointer',width: '100%', transition: 'transform 0.3s ease',transform: hoveredButton === buttonName ? 'scale(1.05)' : 'scale(1)',});
  const handleSubmit = (event) => {event.preventDefault(); onSubmit({ email, commentText }); setEmail(''); setCommentText('');};
return (
    <div className="max-w-md mx-auto shadow-md p-6 rounded-md mb-4" style={formStyle}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={inputStyle} />
        </div>
        <div>
          <label htmlFor="commentText" style={{ display: 'block', marginBottom: '5px' }}>Comment:</label>
          <textarea id="commentText" value={commentText} onChange={(e) => setCommentText(e.target.value)} required style={{ ...inputStyle, height: '100px' }} />
        </div>
        <div>
          <button type ="submit" style={buttonStyle('post')} onMouseEnter={() => setHoveredButton('post')} onMouseLeave={() => setHoveredButton('')}>Post Comment</button>
        </div>
      </form>
    </div>
  );
};
export default CommentForm;