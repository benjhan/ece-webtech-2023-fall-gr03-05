import { useRouter } from 'next/router';
import { useContext, useState, useEffect } from 'react';
import UserContext from '../components/UserContext';
import Layout from '../components/Layout.js';
import { supabase } from '@/components/SupabaseClient';
import { useDarkMode } from '../components/DarkModeContext';

// Profile page
export default function Profile() {
  const router = useRouter();
  const { user, logout } = useContext(UserContext);
  // State to track if edit mode is on
  const [isEditing, setIsEditing] = useState(false); 
  // Style for form inputs
  const inputStyle = {backgroundColor: darkMode ? '#555' : 'white',color: darkMode ? 'white' : 'black',border: darkMode ? '1px solid #777' : '1px solid #ccc',};
  // State to track which button is hovered
  const [hoveredButton, setHoveredButton] = useState('');
  const [hoveredButton2, setHoveredButton2] = useState('');
  // Use the dark mode state from context
  const { darkMode } = useDarkMode();
  const [profileData, setProfileData] = useState({username: '',first_name: '',last_name: '',description: '',});
  // Style for form buttons
  const buttonStyle = (buttonName) => ({backgroundColor: '#0096f3',color: 'white',padding: '10px',borderRadius: '5px',marginBottom: '10px',border: 'none',cursor: 'pointer',width: '100%', transition: 'transform 0.3s ease',transform: hoveredButton === buttonName ? 'scale(1.05)' : 'scale(1)',});
  const buttonStyle2 = (buttonName) => ({backgroundColor: '#0070f3',color: 'white',padding: '10px',borderRadius: '5px',marginBottom: '10px',border: 'none',cursor: 'pointer',width: '100%', transition: 'transform 0.3s ease',transform: hoveredButton2 === buttonName ? 'scale(1.05)' : 'scale(1)',});
  // If user fetch data from supabase
  useEffect(() => {
    if (user) {
      const fetchOrCreateProfile = async () => {
        try {
          // Attempt to fetch the user's profile
          const { data, error, status } = await supabase
            .from('profiles')
            .select('username, first_name, last_name, description')
            .eq('id', user.id)
            .single();
          if (error && status === 406) {
            // If profile does not exist, create a new one
            const { error: createError } = await supabase
              .from('profiles')
              .insert([
                { 
                  id: user.id, 
                  username: null, 
                  first_name: null, 
                  last_name: null, 
                  description: null 
                }
              ]);
            if (createError) {
              console.error('Error creating profile:', createError.message);
            } else {
              // Set profile data to initial values since it's a new profile
              setProfileData({ 
                username: '', 
                first_name: '', 
                last_name: '', 
                description: '' 
              });
            }
          } else if (data) {
            // Set the fetched profile data
            setProfileData(data);
          }
        } catch (err) {
          console.error('Unexpected error:', err);
        }
      };
      fetchOrCreateProfile();
    }
  }, [user, supabase]);
  // Handle input changes
  const handleInputChange = (e) => {const { name, value } = e.target;setProfileData((prevState) => ({...prevState,[name]: value,}));};
  // Save profile data
  const saveProfile = async () => {
    const { data, error } = await supabase
      .from('profiles')
      .update({
        username: profileData.username,
        first_name: profileData.first_name,
        last_name: profileData.last_name,
        description: profileData.description,
      })
      .eq('id', user.id);
    if (error) {
      console.error('Error updating profile:', error.message);
    } else {
      setIsEditing(false); // Turn off editing mode after saving
      console.log('Profile updated successfully:', data);
    }
  };
  // Logout function to end the session
  const onClickLogout = async () => {
    await logout();
    router.push('/login');
  };
  return (
    <Layout title="Profile" description="User profile page">
      <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <div style={{backgroundColor: '#9e9e9e', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
          <h1 style={{ alignSelf: 'flex-start' }}>Profile</h1>
          <div style={{ alignSelf: 'flex-start', width: '100%', padding: '10px' }}>
            Email: {user?.email}
          </div>
          {isEditing ? (
            <>
              <input style={{ ...inputStyle, width: '100%', padding: '10px' }} value={profileData.username} onChange={handleInputChange} name="username" required/>
              <input style={{ ...inputStyle, width: '100%', padding: '10px' }} value={profileData.first_name} onChange={handleInputChange} name="first_name" required/>
              <input style={{ ...inputStyle, width: '100%', padding: '10px' }} value={profileData.last_name} onChange={handleInputChange} name="last_name" required/>
              <textarea style={{ ...inputStyle, width: '100%', padding: '10px', height: '100px' }} value={profileData.description} onChange={handleInputChange} name="description" required/>
              <button style={buttonStyle('post')} onClick={saveProfile} onMouseEnter={() => setHoveredButton('post')} onMouseLeave={() => setHoveredButton('')}>Save</button>
            </>
          ) : (
            <>
              <div style={{ alignSelf: 'flex-start', width: '100%', padding: '10px' }}>
                Username: {profileData.username}
              </div>
              <div style={{ alignSelf: 'flex-start', width: '100%', padding: '10px' }}>
                First Name: {profileData.first_name}
              </div>
              <div style={{ alignSelf: 'flex-start', width: '100%', padding: '10px' }}>
                Last Name: {profileData.last_name}
              </div>
              <div style={{ alignSelf: 'flex-start', width: '100%', padding: '10px' }}>
                Description: {profileData.description || 'Not provided'}
              </div>
              <button style={buttonStyle('post')}  onClick={() => setIsEditing(true)} onMouseEnter={() => setHoveredButton('post')} onMouseLeave={() => setHoveredButton('')}>Edit</button>
            </>
          )} 
          <button style={buttonStyle2('post')}  onClick={onClickLogout} onMouseEnter={() => setHoveredButton2('post')} onMouseLeave={() => setHoveredButton2('')}>Sign Out</button>
        </div>
      </main>
    </Layout>
  );
}