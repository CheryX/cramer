import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), 'posts')

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path))

export interface Post {
	content: string,
	data: { [key: string]: any; },
	filePath: string
}

export interface PostData {
	title: string,
	excerpt: string,
	tags: string[],
	authors: string[]
}

export function getAllPostsData() {

	let posts: Post[] = [];

	for (let i in postFilePaths) {

		const postPath = path.join(POSTS_PATH, postFilePaths[i]);
		
		
		const source = fs.readFileSync(postPath);
		const { content, data } = matter(source);
		
		posts[i] = {
			content,
			data,
			filePath: postFilePaths[i],
		}
		
	}

	return posts;

}