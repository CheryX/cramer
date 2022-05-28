import { PostList } from "../components"
import { getAllPosts } from "../lib/posts"

const Posts = ({ posts }) => {
  return (
    <div className="mt-3"> 
      <h2>Posty</h2>
      <PostList posts={posts} />
    </div>
  )
}

export const getStaticProps = async () => {
  return { props: { posts : getAllPosts() } }
}

export default Posts
