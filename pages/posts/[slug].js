import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import path from 'path'
import CustomLink from '@/components/CustomLink'
import { postFilePaths, POSTS_PATH } from '@/lib/mdxUtils'
import rehypeHighlight from "rehype-highlight"
import rehypeKatex from 'rehype-katex'
import rehypePrismPlus from 'rehype-prism-plus'
import remarkGfm from 'remark-gfm'
import remarkFootnotes from 'remark-footnotes'
import remarkMath from 'remark-math'
import PostLayout from '@/layouts/PostLayout'

const components = {
	a: CustomLink,
	Winogrona: dynamic(() => import('../../components/Winogrona')),
	Head,
}

export default function Post({ source, frontMatter, posts }) {
	return (
		<>
			<PostLayout frontMatter={frontMatter}>
				<MDXRemote {...source} components={components}  posts={posts} />
			</PostLayout>
		</>
	)
}

export const getStaticProps = async ({ params }) => {
	const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
	const source = fs.readFileSync(postFilePath)

	const { content, data } = matter(source)

	const mdxSource = await serialize(content, {
		mdxOptions: {
			remarkPlugins: [ remarkMath, remarkGfm, remarkFootnotes ],
			rehypePlugins: [ rehypeHighlight, rehypeKatex, rehypePrismPlus ],
		},
		scope: data,
	})

	const posts = postFilePaths.map((filePath) => {
		const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
		const { content, data } = matter(source)

		return {
			content,
			data,
			filePath,
		}
	})

	return {
		props: {
			source: mdxSource,
			frontMatter: data,
			posts
		},
	}
}

export const getStaticPaths = async () => {
	const paths = postFilePaths
		.map((path) => path.replace(/\.mdx?$/, ''))
		.map((slug) => ({ params: { slug } }))

	return {
		paths,
		fallback: false,
	}
}
