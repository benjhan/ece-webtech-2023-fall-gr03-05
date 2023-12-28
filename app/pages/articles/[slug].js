import Layout from '../../components/Layout.js'
import { useRouter } from 'next/router.js'
import { Post } from '@/components/Post.js'

export default function Page({article}) {
  const router = useRouter();
  const id = router.query
  console.log(id)

  
  return (
    <Layout>
      <h1>{article}</h1>
      <p style={{fontStyle: 'italic'}}>This page fetch data at build time, excellent for SEO.</p>
      <p>
        {article}
      </p>
    </Layout>
  )
}

