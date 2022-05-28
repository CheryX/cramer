import Link from 'next/link'
import Image from 'next/image'
import PostCard from './PostCard'

const PostList = ({ posts }) => {
    return (
    <>   
        {posts.map((post, index) => (
            <PostCard post={post} index={index}/>
        ))}
      </>
    )
}

export default PostList