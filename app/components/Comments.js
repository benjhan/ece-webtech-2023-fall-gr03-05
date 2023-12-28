import { useDarkMode } from '../components/DarkModeContext'; // Import the DarkMode context
const Comment = ({ comment }) => {
    // Dynamic style for post block based on dark mode
    const { darkMode } = useDarkMode(); // Use the dark mode state from context
    const postBlockStyle = {
        backgroundColor: darkMode ? '#333' : 'white', // Dark background for dark mode
        color: darkMode ? 'white' : 'black', // Text color for dark mode
    };
    
    const { email, content } = comment;
    return (
        <div className="max-w-md mx-auto shadow-md p-6 rounded-md mb-4" style={postBlockStyle}>
            <p>Email: {email}</p>
            <p>Comment: <strong> {content}</strong></p>
        </div>
    );
};
export default Comment;