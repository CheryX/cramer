
import { MDXRemote } from 'next-mdx-remote'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import CustomLink from '@/components/CustomLink'
import { postFilePaths } from '@/lib/mdxUtils'
import PostLayout from '@/layouts/PostLayout'
import { renderMdx } from '@/lib/renderMdx'
import Winogrona from '@/components/Winogrona'
import { Accordion, AccordionGroup } from '@/components/base/Accordion'
import Graph from '@/components/Graph'
import Table from '@/components/CustomTable'
import CustomImage from '@/components/CustomImage'

const components = {
	a: CustomLink,
	Winogrona, Accordion, Head, AccordionGroup, Graph,
	table: Table,
	img: CustomImage
}

export default function Post({ source, frontMatter, posts, fileName }) {
	return (
		<>
			<PostLayout frontMatter={frontMatter}  posts={posts} fileName={fileName}>
				<MDXRemote {...source} components={components}  posts={posts} fileName={fileName} />
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
