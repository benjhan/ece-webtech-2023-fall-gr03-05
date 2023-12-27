import { createContext, useState, useEffect } from 'react';
import { supabase } from '../components/SupabaseClient';

const UserContext = createContext();
// This context provider is passed to any component requiring the context
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // Listen for changes to auth state (login, logout, etc.)
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        const currentUser = session?.user || null;
        setUser(currentUser);
        if (currentUser) {
          // Fetch additional user data only when user is logged in
          try {
            const { data, error } = await supabase
              .from('profiles')
              .select('*')
              .eq('id', currentUser.id)
              .single();
            if (error) throw error;
            // Combine the additional data with the currentUser data
            setUser({ ...currentUser, ...data });
          } catch (error) {
            console.error('Error fetching additional user data:', error);
          }
        }
      }
    );
  }, []);
  // Logout function to end the session
  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error during sign out:', error);
    }
  };
  // The user object and logout function will be available to any child components
  return (
    <UserContext.Provider value={{ user, logout }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;