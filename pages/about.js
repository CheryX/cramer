
import { MDXRemote } from 'next-mdx-remote'
import Head from 'next/head'
import CustomLink from '@/components/CustomLink'
import PostLayout from '@/layouts/PostLayout'
import { renderMdx } from '@/lib/renderMdx'
import Winogrona from '@/components/Winogrona'

const components = {
	a: CustomLink,
	Winogrona: Winogrona,
	Head,
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

export const getStaticProps = async () => {
	return renderMdx('about');
}