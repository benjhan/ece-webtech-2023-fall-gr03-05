import { useRouter } from 'next/router'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import Layout from '../components/Layout.js'

export default function login() {
  const router = useRouter()
  const supabase = useSupabaseClient()
  const user = useUser()
  if (user) {
     router.push('/profile');
 }
  return (
    <Layout>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={['github']}
      />
    </Layout>
  )
}