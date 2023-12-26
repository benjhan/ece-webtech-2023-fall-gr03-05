import '@/styles/globals.css';
import { UserProvider } from "../components/UserContext";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";
import { DarkModeProvider } from '../components/DarkModeContext'; // Import DarkModeProvider
function MyApp({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createPagesBrowserClient());

  return (
    <DarkModeProvider> {/* Wrap your app with DarkModeProvider */}
      <UserProvider>
        <SessionContextProvider
          supabaseClient={supabaseClient}
          initialSession={pageProps.initialSession}
        >
          <Component {...pageProps} />
        </SessionContextProvider>
      </UserProvider>
    </DarkModeProvider>
  );
}
export default MyApp;