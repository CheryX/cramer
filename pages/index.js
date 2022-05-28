import { PostList } from '../components'
import { getAllPosts } from '../lib/posts'

const Home = ({ posts }) => {
  return (

    <div className="mt-5">
      <h1>Tu pewnie bedzie cos fajnego a potem z 3 posty nowe</h1>
      
      <PostList posts={posts} />
    </div>
  )
}

export const getStaticProps = async () => {
  return { props: { posts : getAllPosts() } }
}

export default Home
