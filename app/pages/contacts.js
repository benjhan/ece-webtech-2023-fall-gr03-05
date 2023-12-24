import { useState } from 'react';
import { createClient } from '@supabase/supabase-js'
import { useRouter } from 'next/router'; // Import useRouter
import Head from 'next/head'
import Layout from '../components/Layout.js'

// Initialize Supabase client using environment variables
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export default function Page() {
    const router = useRouter(); // Initialize useRouter
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
      <main>
        <h1>Contact Us</h1>
        <section>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Send us a message</legend>
              <p>
                <label htmlFor="firstname" className="block text"> First name:</label>
                <input type="text" id="firstname" name="firstname" onChange={updateFormData} className="mt-1 p-2 w-1000 " required/>
              </p>
              <p>
                <label htmlFor="lastname" className="block text"> Last name:</label>
                <input type="text" id="lastmane" name="lastname" onChange={updateFormData} className="mt-1 p-2 w-1000 " required/>
              </p>
              <p>
                <label htmlFor="email" className="block text"> E-mail:</label>
                <input type="text" id="email" name="email" onChange={updateFormData} className="mt-1 p-2 w-1000 " required/>
              </p>
              <p>
                <label htmlFor="message" className="block text"> Message:</label>
                <textarea  id="message" name="message" onChange={updateFormData} className="mt-1 p-2 w-1000 " required></textarea>
              </p>
              <li>
                    <button type="submit" className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md">Send</button>
              </li>
            </fieldset>
          </form>
        </section>
      </main>
    </Layout>
  );
}