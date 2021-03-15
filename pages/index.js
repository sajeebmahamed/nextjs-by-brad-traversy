import Head from 'next/head'
import ArticleList from '../components/ArticleList';
import styles from '../styles/Layout.module.css'

export default function Home({articles}) {
  return (
    <div>
      <Head>
        <title>  WeDev News </title>
        <meta name="keywords" content="web dev programming" />
      </Head>
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}