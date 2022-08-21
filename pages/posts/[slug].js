import Layout from '@/components/Layout'
import SEO, { ArticleSEO } from '@/components/SEO'
import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import { postFilePaths, POSTS_PATH } from '../../lib/notesData'
import data from '@/data/data'

const components = [];

Object.defineProperty(String.prototype, 'capitalize', {
	value: function() {
	  return this.charAt(0).toUpperCase() + this.slice(1);
	},
	enumerable: false
});

export default function PostPage({ source, frontMatter, slug }) {

	let authors = frontMatter.authors
	authors = authors.map(e => data.authors[e].name).join(', ')

	return (
		<Layout>
			<SEO title={frontMatter.title} description={frontMatter.excerpt} ogUrl={`https://c.mmusielik.xyz/posts/${slug}`} />
			<ArticleSEO author={authors} date={frontMatter.date} section={frontMatter.tags[0].capitalize()} />
			<MDXRemote {...source} components={components} />
		</Layout>
	)
}

export const getStaticProps = async ({ params }) => {
	const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
	const source = fs.readFileSync(postFilePath)

	const { content, data } = matter(source)

	const mdxSource = await serialize(content, {

		mdxOptions: {
			remarkPlugins: [],
			rehypePlugins: [],
		},
		scope: data,
	})

	return {
		props: {
			source: mdxSource,
			frontMatter: data,
			slug: params.slug
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