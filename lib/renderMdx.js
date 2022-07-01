
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import fs from 'fs'
import postsData from '../posts/data'

// Markdown plugins
import rehypeHighlight from "rehype-highlight"
import rehypeKatex from 'rehype-katex'
import rehypePrismPlus from 'rehype-prism-plus'
import remarkGfm from 'remark-gfm'
import remarkFootnotes from 'remark-footnotes'
import remarkMath from 'remark-math'

const POSTS_PATH = path.join(process.cwd(), 'posts')

/**
 * Render Markdown in HTML
 * @param {string} slug Name of the article without .mdx exstention
 * @returns Rendered Markdown post in HTML with it's data (e.g. title)
 */
export default async function renderMdx(slug) {

    const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`)
	
	const content =  fs.readFileSync(postFilePath, 'utf8')
	const data = postsData[slug]

	// Rendering
	const mdxSource = await serialize(content, {
		mdxOptions: {
			remarkPlugins: [ remarkMath, remarkGfm, remarkFootnotes],
			rehypePlugins: [ rehypeHighlight, rehypeKatex, rehypePrismPlus ],
		},
		scope: data,
	})

	return {
		props: {
			source: mdxSource,
			postData: data,
			fileName: slug
		}
	}
}