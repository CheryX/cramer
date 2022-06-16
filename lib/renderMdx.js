import rehypeHighlight from "rehype-highlight"
import rehypeKatex from 'rehype-katex'
import rehypePrismPlus from 'rehype-prism-plus'
import remarkGfm from 'remark-gfm'
import remarkFootnotes from 'remark-footnotes'
import remarkMath from 'remark-math'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { POSTS_PATH } from '@/lib/mdxUtils'
import { getAllPosts } from '@/lib/notesData'
import path from 'path'
import fs from 'fs'

export async function renderMdx(slug) {

    const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`)
	const source = fs.readFileSync(postFilePath)

	const { content, data } = matter(source)

	const mdxSource = await serialize(content, {
		mdxOptions: {
			remarkPlugins: [ remarkMath, remarkGfm, remarkFootnotes ],
			rehypePlugins: [ rehypeHighlight, rehypeKatex, rehypePrismPlus ],
		},
		scope: data,
	})

	const posts = getAllPosts();

	return {
		props: {
			source: mdxSource,
			frontMatter: data,
			posts
		},
	}
}