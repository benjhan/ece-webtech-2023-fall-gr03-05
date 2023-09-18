
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'


export default function Layout({children}){
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}
