import { useRouter } from 'next/router';
import Header from '../../compenents/header'
import Footer from '../../compenents/footer'
const ArticlePage = () => {
  const router = useRouter();
  const { articleId } = router.query;
  const dummyArticleData = {
    id: articleId,
    title: 'Articles',
    content: 'This is an article content.',
  };
  return (
    <div>
        {}
        <Header />
        <h1>{dummyArticleData.title} : {dummyArticleData.id} </h1>
        <p>ID of l'article : {dummyArticleData.id}</p>
        <p>{dummyArticleData.content}</p>

        <Footer />
    </div>
  );
};
export default ArticlePage;
