import { useDarkMode } from '../components/DarkModeContext';

const Comment = ({ comment }) => {
    // Dynamic style for post block based on dark mode
    const { darkMode } = useDarkMode();
    // Style for post block
    const postBlockStyle = {backgroundColor: darkMode ? '#333' : 'white', color: darkMode ? 'white' : 'black'};
    const { email, content } = comment;
    return (
        <div className="max-w-md mx-auto shadow-md p-6 rounded-md mb-4" style={postBlockStyle}>
            <p>Email: {email}</p>
            <p>Comment: <strong> {content}</strong></p>
        </div>
    );
};
export default Comment;