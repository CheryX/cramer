const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ postData, children, }) {
	  
	return (
		<>
			
			{postData.date&& (
				<time dateTime={postData.date}>
					{new Date(postData.date).toLocaleDateString('pl-PL', postDateTemplate)}
				</time>
			)}
			
			{postData.tags.map((tag, index) => tag)}

			<h1>{postData.title}</h1>
			<p>{postData.summary}</p>

			<article>{children}</article>

		</>
	)
}