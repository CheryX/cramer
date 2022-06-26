
import { MDXRemote } from 'next-mdx-remote'
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

const Heading1 = ({ children }) => {
	const idText = children.replace(/ /g, "_").toLowerCase();
  
	return <h1 id={idText}>{children}</h1>;
  };
  
const Blockquote = ({ children }) => {
	return <blockquote className="blockquote border-start border-3 border-primary ps-2 ps-md-4 me-md-2 fs-6 py-md-2  ms-2 my-md-4 bg-primary bg-opacity-10">{children}</blockquote>
}

  
const components = {
	Winogrona, Accordion, Head, AccordionGroup, Graph,
	a: CustomLink,
	table: Table,
	img: CustomImage,
	h1: Heading1,
	blockquote: Blockquote
}

export default function Post({ source, frontMatter, posts, fileName}) {
	return (
		<>
			<PostLayout frontMatter={frontMatter} posts={posts} fileName={fileName}>
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
