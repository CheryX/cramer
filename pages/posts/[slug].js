
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
import TOC from '@/components/TOC'

const Heading1 = ({ children }) => {
	const idText = children.replace(/ /g, "-").toLowerCase();
  
	return <h1 id={idText}>{children}</h1>;
  };

  
const components = {
	Winogrona, Accordion, Head, AccordionGroup, Graph, TOC,
	a: CustomLink,
	table: Table,
	img: CustomImage,
	h1: Heading1
}

export default function Post({ source, frontMatter, posts, fileName, toc }) {
	return (
		<>
			<PostLayout frontMatter={frontMatter} toc={toc} posts={posts} fileName={fileName}>
				<MDXRemote {...source} components={components} />
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
