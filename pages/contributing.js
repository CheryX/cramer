
import { MDXRemote } from 'next-mdx-remote'
import Head from 'next/head'
import CustomLink from '@/components/CustomLink'
import CustomPostLayout from '@/layouts/CustomPostLayout'
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
			<CustomPostLayout frontMatter={frontMatter} toc={toc} posts={posts} fileName={fileName}>
				<MDXRemote {...source} components={components} />
			</CustomPostLayout>
		</>
	)
}

export const getStaticProps = async () => {
	return renderMdx('contributing');
}