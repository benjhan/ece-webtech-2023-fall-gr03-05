import { useState } from 'react';
import { useDarkMode } from '@/components/DarkModeContext';

const CommentForm = ({ onSubmit }) => {
 const { darkMode } = useDarkMode();
 const [email, setEmail] = useState('');
 const [commentText, setCommentText] = useState('');

 const postBlockStyle = {
   backgroundColor: darkMode ? '#333' : 'white', // Dark background for dark mode
   color: darkMode ? 'white' : 'black', // Text color for dark mode
 };

 const handleSubmit = (event) => {
   event.preventDefault();
   onSubmit({ email, commentText });
   setEmail('');
   setCommentText('');
 };

 return (
   <div className="max-w-md mx-auto shadow-md p-6 rounded-md mb-4" style={postBlockStyle}>
     <form onSubmit={handleSubmit}>
       <div>
         <label htmlFor="email">Email:</label>
         <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={postBlockStyle} />
       </div>
       <div>
         <label htmlFor="commentText">Comment:</label>
         <textarea id="commentText" value={commentText} onChange={(e) => setCommentText(e.target.value)} required style={postBlockStyle} />
       </div>
       <div>
         <button type="submit">Submit</button>
       </div>
     </form>
   </div>
 );
};

export default CommentForm;
