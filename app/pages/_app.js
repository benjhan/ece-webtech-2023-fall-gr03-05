import '@/styles/globals.css';
import { UserProvider } from "../components/UserContext";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { supabase } from '../components/SupabaseClient'; 
import { DarkModeProvider } from '../components/DarkModeContext';

function MyApp({ Component, pageProps }) {
  return (
    <DarkModeProvider> {/* Wrap your app with DarkModeProvider */}
      <UserProvider>
        <SessionContextProvider
          supabaseClient={supabase} // Use the centralized supabase instance here
          initialSession={pageProps.initialSession}
        >
          <Component {...pageProps} />
        </SessionContextProvider>
      </UserProvider>
    </DarkModeProvider>
  );
}
export default MyApp;