
import { MDXRemote } from 'next-mdx-remote'
import Head from 'next/head'
import CustomLink from '@/components/CustomLink'
import { renderMdx } from '@/lib/renderMdx'
import Winogrona from '@/components/Winogrona'
import CustomPostLayout from '@/layouts/CustomPostLayout'

const components = {
	a: CustomLink,
	Winogrona: Winogrona,
	Head,
}

export default function Post({ source, frontMatter, posts }) {
	return (
		<>
			<CustomPostLayout frontMatter={frontMatter}>
				<MDXRemote {...source} components={components}  posts={posts} />
			</CustomPostLayout>
		</>
	)
}

export const getStaticProps = async () => {
	return renderMdx('about');
}