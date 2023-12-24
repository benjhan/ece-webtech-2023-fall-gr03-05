import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import Head from 'next/head.js'

export default function Layout({children}){
  return (
    <div className="flex flex-col min-h-screen bg-light-gray text-black">
      <Head>
        <title>WebSpotReview</title>
      </Head>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}
