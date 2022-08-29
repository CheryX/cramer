import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

import Layout from '../../components/Layout'

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { PostData, postFilePaths, POSTS_PATH } from '../../data/postData'
import { GetStaticProps } from 'next'
import SEO from '../../components/SEO'

// Markdown plugins ts-ignore for this module
import rehypeHighlight from "rehype-highlight"
import rehypeKatex from 'rehype-katex'
import rehypePrismPlus from 'rehype-prism-plus'
import remarkGfm from 'remark-gfm'
import remarkFootnotes from 'remark-footnotes'
import remarkMath from 'remark-math'
import Link from 'next/link'
import Accordion from '../../components/Accordion'
import Graph from '../../components/Graph'
import BBI from '../../components/BBI'

const components = {
	Accordion, Graph, BBI
};

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

			<main className="mx-5 lg:w-3/4 lg:mx-auto my-10 lg:my-20">

				<section className=''>
					<h1 className="font-extrabold text-4xl my-3">{frontMatter.title}</h1>

					<div className="flex items-center text-xl">
						<i className='fa fa-calendar mr-2 text-2xl'></i> {frontMatter.date}
					</div>

					{/* {frontMatter.excerpt && <p className="text-sm text-gray-500">{frontMatter.excerpt}</p>} */}

					<article className="prose my-5">
						<MDXRemote {...source} components={components} />
					</article>

					<hr className='my-5 border-slate-500' />

					<div className='flex items-center justify-between'>
						<div className='flex items-center mb-10 print:hidden text-slate-500'>
							<i className="fa-solid fa-tag text-lg mr-1"></i> {frontMatter.tags.map((p, index) => (
								<span key={index} className='text-md ml-1'><Link href={`/posts?q=${p}`}><a>{p}</a></Link></span>
							))}

						</div>

						<div className='flex items-center mb-10 print:hidden text-slate-500'>
							<i className="fa-brands fa-github text-lg mr-1"></i>
							<Link href={`https://github.com/CheryX/cramer/blob/master/posts/${slug + ".mdx"}`}>
								<a className='text-md ml-1'>Edytuj na GitHubie</a>
							</Link> 
						</div>
					</div>

				</section>

			</main>


		</Layout>
	)
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	
	const postFilePath = path.join(POSTS_PATH, `${params?.slug}.mdx`)
	const source = fs.readFileSync(postFilePath)

	const { content, data } = matter(source)

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