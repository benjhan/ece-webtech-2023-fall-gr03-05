import REACT from 'react'
import Header from '../compenents/header'
import Footer from '../compenents/footer'
import Link from 'next/link';

const articles = () =>{
    const articlesData = [
        { id: 1, title: 'Article 1' },
        { id: 2, title: 'Article 2' },
        { id: 3, title: 'Article 3' },
        { id: 4, title: 'Article 4' },
      ];
    return (
        <div>
            {}
            <Header />
                <h1>Articles</h1>
                <ul>
                  {articlesData.map((article) => (
                    <li key={article.id}>
                        <Link href={`/articles/${article.id}`}>
                            {article.title}
                        </Link>
                    </li>
                    ))}
                </ul>
            <Footer />
        </div>
    )
}
export default articles