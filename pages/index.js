import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import LandingPage from '@/layouts/LandingPage'
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils'

export default function Index({ posts }) {
	return (
		<LandingPage posts={posts} />
	)
}

export function getStaticProps() {
	const posts = postFilePaths.map((filePath) => {
		const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
		const { content, data } = matter(source)

		return {
			content,
			data,
			filePath,
		}
	})

	return { props: { posts } }
}
