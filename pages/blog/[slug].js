import { MDXRemote } from 'next-mdx-remote'
import { getPost, getPostPaths } from '../../lib/posts'

import { Nav, Winogrona } from '../../components'
import SyntaxHighlighter from 'react-syntax-highlighter'
const components = { Nav, Winogrona, SyntaxHighlighter }

const PostPage = ({ frontMatter: { title }, mdxSource }) => {
	return (
		<div className="mt-4">
			<h1>{title}</h1>
			<MDXRemote {...mdxSource} components={components}/>
		</div>
	)
}

const getStaticPaths = async () => {
	return {
		paths: getPostPaths(),
		fallback: false
	}
}

const getStaticProps = async ({ params: { slug } }) => {
 	return getPost(slug)
}

export { getStaticProps, getStaticPaths }
export default PostPage
