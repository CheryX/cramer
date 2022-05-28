import { MDXRemote } from 'next-mdx-remote'
import { getPost, getPostPaths } from '../../lib/posts'

import { Nav, Winogrona } from '../../components'
import "highlight.js/styles/atom-one-dark.css";
const components = { Nav, Winogrona }

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
