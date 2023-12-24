import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout.js';

export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/articles");
  const articles = await response.json();
  return {
    props: {
      articles,
    },
    revalidate: 60,
  };
}


export default function Page({ articles }) {
  return (
    <Layout>
      <h1>Web technologies articles</h1>
      <p className="italic hover:not-italic">
        This page is statically generated, great for SEO.
      </p>
      <ul>
        {articles.map((article) => (
          <li key={article.slug}>
            <h2>
              <Link href={`/articles/${article.slug}`}>{article.title}</Link>
            </h2>
            <p>{article.message}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
