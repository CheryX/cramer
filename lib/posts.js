import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeHighlight from "rehype-highlight"
import remarkMath from 'remark-math'
import remarkStringify from 'remark-stringify/lib'
import remarkRehype from 'remark-rehype'
import rehypeKatex from 'rehype-katex'

function getAllPosts() {
	const files = fs.readdirSync(path.join('posts'))
	const posts = files.map(filename => {

		const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
		const { data: frontMatter } = matter(markdownWithMeta)

		return {
			frontMatter,
			slug: filename.split('.')[0]
		}

	})

	return posts
}

async function getPost(slug) {
	const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.mdx'), 'utf-8')

	const { data: frontMatter, content } = matter(markdownWithMeta)
	const mdxSource = await serialize(content, {
		mdxOptions: { 
			rehypePlugins: [rehypeHighlight],
			remarkPlugins: [remarkMath, remarkRehype, remarkStringify, rehypeKatex]
		},
	})

	return {
		props: {
			frontMatter,
			slug,
			mdxSource
		}
	}
}

function getPostPaths() {
	const files = fs.readdirSync(path.join('posts'))
	const paths = files.map(filename => ({
		params: {
			slug: filename.split('.')[0]
		}
	}))
	return paths
}

export { getAllPosts, getPost, getPostPaths }