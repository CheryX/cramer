
import { MDXRemote } from 'next-mdx-remote'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import CustomLink from '@/components/CustomLink'
import { postFilePaths } from '@/lib/mdxUtils'
import PostLayout from '@/layouts/PostLayout'
import { renderMdx } from '@/lib/renderMdx'
import Winogrona from '@/components/Winogrona'
import Accordion from '@/components/Accordion'

const components = {
	a: CustomLink,
	Winogrona, Accordion, Head,
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
	return renderMdx(params.slug);
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
