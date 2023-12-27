import { useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter
import Layout from '../components/Layout.js'
import {supabase} from '../components/SupabaseClient.js'

// Initialize Supabase client using environment variables

export default function Page() {
  // Initialize useRouter
  const router = useRouter(); 
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: ''
  });
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
      .from('contacts')
      .insert([
        { ...formData }
      ]);
      if (error) {
        console.error("Error inserting data", error);
        // Here you can handle the error, such as displaying a notification to the user
      } else {
        // Navigate to the 'contact-us' page or whatever page you want after successful form submission
        router.push('/'); // Adjust this to your desired route
      }
  };
  return (
    <Layout>
        <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <div style={{ backgroundColor: '#9e9e9e', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: 'auto', maxWidth: '500px' }}>
                <h1>Contact Us</h1>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <p>
                        <label htmlFor="firstname" className="block text">First name:</label>
                        <input type="text" id="firstname" name="firstname" onChange={updateFormData} required />
                    </p>
                    <p>
                        <label htmlFor="lastname" className="block text">Last name:</label>
                        <input type="text" id="lastname" name="lastname" onChange={updateFormData} required />
                    </p>
                    <p>
                        <label htmlFor="email" className="block text">E-mail:</label>
                        <input type="email" id="email" name="email" onChange={updateFormData} required />
                    </p>
                    <p>
                        <label htmlFor="message" className="block text">Message:</label>
                        <textarea id="message" name="message" onChange={updateFormData} required style={{ width: '100%', height: '100px' }}></textarea>
                    </p>
                    <button type="submit" className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md">Send</button>
                </form>
            </div>
        </main>
    </Layout>
);}