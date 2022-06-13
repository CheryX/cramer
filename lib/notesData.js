import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { postFilePaths, POSTS_PATH } from '@/lib/mdxUtils'

export function getAllPosts() {
	const posts = postFilePaths.map((filePath) => {
		const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
		const { content, data } = matter(source)

		return {
			content,
			data,
			filePath,
		}
	})

	return posts
}

export function getAllPostsData() {
	const posts = postFilePaths.map((filePath) => {
		const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
		const { data } = matter(source)
		return { data, filePath }
	})

	return posts
}

export function getAllTags() {
    const posts = getAllPostsData();
    let tags = [];

    posts.forEach(post => {
        post.data.tags.forEach(tag => {
            (!tags.includes(tag)) && tags.push(tag);
        });
    });

    return tags;
}