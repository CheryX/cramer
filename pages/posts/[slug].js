
import { MDXRemote } from 'next-mdx-remote'
import { postFilePaths } from '@/lib/mdxUtils'
import PostLayout from '@/layouts/PostLayout'
import { renderMdx } from '@/lib/renderMdx'

const components = {};

export default function Post({ source, frontMatter, posts, fileName}) {
	return (
		<PostLayout frontMatter={frontMatter} posts={posts} fileName={fileName}>
			<MDXRemote {...source} components={components} />
		</PostLayout>
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
