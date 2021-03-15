import Link from 'next/link'
import {useRouter} from 'next/router'
import Meta from '../../../components/Meta'
import { server } from '../../../config'
const articles = ({article}) => {
    // const router = useRouter()
    // const {id} = router.query
    return <div>\
        <Meta title={article.title} description={article.excerpt} />
        <h1> { article.title } </h1>
        <h1> { article.body } </h1>
        <br />
        <Link href='/'> Go Back </Link>
    </div>
}

// export const getServerSideProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     const article = await res.json()
//     return {
//         props: {
//             article
//         }
//     }
// }


export const getStaticProps = async (context) => {
    const res = await fetch(
      `${server}/api/articles/${context.params.id}`
    )
  
    const article = await res.json()
  
    return {
      props: {
        article,
      },
    }
  }
  
  export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles`)
  
    const articles = await res.json()
  
    const ids = articles.map((article) => article.id)
    const paths = ids.map((id) => ({ params: { id: id.toString() } }))
  
    return {
      paths,
      fallback: false,
    }
  }
  export default articles


// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   )

//   const article = await res.json()

//   return {
//     props: {
//       article,
//     },
//   }
// }

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

//   const articles = await res.json()

//   const ids = articles.map((article) => article.id)
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }))

//   return {
//     paths,
//     fallback: false,
//   }
// }
// export default articles