import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout.js'

export default function Page() {
  return (
    <Layout>
      <Head>
        <title>Group 5</title>
        <meta name="description" content="Student work at ECE Paris" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>
        Welcome to our Website<a href="https://www.adaltas.com"> Panda Express !</a>
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
