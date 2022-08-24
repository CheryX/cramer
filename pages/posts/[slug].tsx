import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

import Layout from '../../components/Layout'

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { PostData, postFilePaths, POSTS_PATH } from '../../data/postData'
import { GetStaticProps } from 'next'
import SEO from '../../components/SEO'
import Header from '../../components/Header'

const components: any = [];

function capitalize(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

type Props = {
	source: MDXRemoteSerializeResult,
	frontMatter: PostData,
	slug: string
}

export default function PostPage({ source, frontMatter, slug }: Props) {

	return (
		<Layout>
			
			<SEO title={frontMatter.title} description={frontMatter.excerpt} ogUrl={`https://c.mmusielik.xyz/posts/${slug}`} />

			<MDXRemote {...source} components={components} />

		</Layout>
	)
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	
	const postFilePath = path.join(POSTS_PATH, `${params?.slug}.mdx`)
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
			slug: params?.slug
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