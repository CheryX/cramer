
import { MDXRemote } from 'next-mdx-remote'
import renderMdx from '@/lib/renderMdx'

import fs from 'fs'
import path from 'path'

import PostLayout from '@/layouts/PostLayout'

// List of custom components
const components = {};


const POSTS_PATH = path.join(process.cwd(), 'posts')

export default function Post({ source, postData, posts, fileName}) {
	return (
		<PostLayout postData={postData} posts={posts} fileName={fileName}>
			<MDXRemote {...source} components={components} />
		</PostLayout>
	)
}

export const getStaticProps = async ({ params }) => {
	return renderMdx(params.slug);
}

export const getStaticPaths = async () => {

	const postFilePaths = fs
		.readdirSync(POSTS_PATH)
		.filter((path) => /\.mdx?$/.test(path))


	const paths = postFilePaths
		.map((path) => path.replace(/\.mdx?$/, ''))
		.map((slug) => ({ params: { slug } }))

	return {
		paths,
		fallback: false,
	}
}
