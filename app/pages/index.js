import Link from 'next/link'
import Layout from '../components/Layout.js'

export default function Page() {
  return (
    <Layout>
      <h1>
        Welcome to WebSpotBlog !
      </h1>
      <ul>
        <li>
          <Link href="/articles">
            Click here to view our articles
          </Link>
        </li>
        <li>
          <Link href="/about">
            Click here to see about us
          </Link>
        </li>
        <li>
          <Link href="/contacts">
            Click here to contact us
          </Link>
        </li>
      </ul>
    </Layout>
  )
}
