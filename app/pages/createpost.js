import { useState, useEffect } from 'react';
import { useUser } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router'; // Import useRouter
import Layout from '../components/Layout.js'
import { supabase } from '../components/SupabaseClient.js'
import { useDarkMode } from '../components/DarkModeContext'; // Import the DarkMode context

// Initialize Supabase client using environment variables

export default function Page() {
    // Initialize useRouter
    const router = useRouter();
    // Use the dark mode state from context
    const { darkMode } = useDarkMode();
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        tags: '',
        categories: ''
    });

    // Check if user is logged in
    const user = useUser();


    // Style for form inputs
    const inputStyle = {
        backgroundColor: darkMode ? '#555' : 'white',
        color: darkMode ? 'white' : 'black',
        border: darkMode ? '1px solid #777' : '1px solid #ccc',
        padding: '10px',
        borderRadius: '4px',
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
            .insert([
                { ...formData }
            ]);
        if (error) {
            console.error("Error inserting data", error);
            // Here you can handle the error, such as displaying a notification to the user
        } else {
            // Navigate to the 'contact-us' page or whatever page you want after successful form submission
            router.push('/articles'); // Adjust this to your desired route
        }
    };

    // const handleSave = async (e) => {
    //     e.preventDefault();
    //             const { data, error } = await supabase
    //         .from('posts')
    //         .insert([
    //             { ...formData }
    //         ]);
    //     if (error) {
    //         console.error("Error inserting data", error);
    //         // Here you can handle the error, such as displaying a notification to the user
    //     } else {
    //         // Navigate to the 'contact-us' page or whatever page you want after successful form submission
    //         router.push('/articles'); // Adjust this to your desired route
    //     }
    // }
    return (
        <Layout>
            <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                {user ? (
                    <div style={{ backgroundColor: '#9e9e9e', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: 'auto', maxWidth: '500px' }}>
                        <h1 className="rounded-md mb-4 text-2xl font-bold mb-2 text-center" style={{ backgroundColor: darkMode ? '#333' : 'white', color: darkMode ? 'white' : 'black' }}>Create a post!</h1>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <p>
                                <label htmlFor="title" className="block text">Title</label>
                                <input type="text" id="title" name="title" onChange={updateFormData} required style={inputStyle} />
                            </p>
                            <p>
                                <label htmlFor="content" className="block text">Contents</label>
                                <textarea type="message" id="content" name="content" onChange={updateFormData} required style={inputStyle} />
                            </p>
                            <p>
                                <label htmlFor="tags" className="block text">Tags</label>
                                <input type="text" id="tags" name="tags" onChange={updateFormData} required style={inputStyle} />
                            </p>
                            <p>
                                <label htmlFor="categories" className="block text">Categories</label>
                                <input id="categories" name="categories" onChange={updateFormData}></input>
                            </p>
                            <button type="submit" style={darkMode ? { backgroundColor: '#333', color: 'white' } : { backgroundColor: '#ccc', color: 'black' }} className="mt-4 px-4 py-2 rounded-md">Save for later... (not implemented)</button>
                            <button style={darkMode ? { backgroundColor: '#333', color: 'white' } : { backgroundColor: '#ccc', color: 'black' }} className="mt-4 px-4 py-2 rounded-md">Post now</button>
                        </form>
                    </div>
                ) : (
                        <div className="text-center">
                            <h1 className="text-3xl font-semibold mb-6">Please log in to post!</h1>
                            <a href="/login" style={darkMode ? { backgroundColor: '#333', color: 'white' } : { backgroundColor: '#ccc', color: 'black' }} className="mt-4 px-4 py-2 rounded-md">Login</a>
                        </div>
                )}
            </main>
        </Layout>
    );
}