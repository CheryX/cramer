
import { MDXRemote } from 'next-mdx-remote'
import renderMdx from '@/lib/renderMdx'

import fs from 'fs'
import path from 'path'

import PostLayout from '@/layouts/PostLayout'
import Blockquote from '@/components/base/Blockquote'
import Table, { Td, Th, Thead } from '@/components/base/Table'
import { h1, h2, h3 } from '@/components/base/Headers'

// List of custom components
const components = {
	blockquote: Blockquote,
	table: Table,
	th: Th, thead: Thead, td: Td,
	h1, h2, h3
};


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
