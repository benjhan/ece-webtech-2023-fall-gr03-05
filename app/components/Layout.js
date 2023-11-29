import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import Counter from '@/pages/use-state.js'

export default function Layout({children}){
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        {children}
        <Counter>
          
        </Counter>
      </main>
      <Footer />
    </div>
  )
}
