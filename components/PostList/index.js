function PostList ({ posts }) {

    console.log("post", posts)
    return (
        <ul>
            {posts.map(post => (
                <li key={post.fileName}>
                    <a href={''+post.fileName+''}>
                        <h1>{post.title}</h1>
                        <p>{post.description}</p>
                    </a>
                </li>   
            ))}
        </ul>
    )
}

export default PostList