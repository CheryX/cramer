const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, children, fileName }) {
	  
	return (
		<>
			
			{frontMatter.date&& (
				<time dateTime={frontMatter.date}>
					{new Date(frontMatter.date).toLocaleDateString('pl-PL', postDateTemplate)}
				</time>
			)}
			
			{frontMatter.tags.map((tag, index) => tag)}

			<h1>{frontMatter.title}</h1>
			<p>{frontMatter.summary}</p>

			<article>{children}</article>

		</>
	)
}