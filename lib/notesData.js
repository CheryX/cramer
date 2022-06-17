import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { postFilePaths, POSTS_PATH } from '@/lib/mdxUtils'

export function getAllPosts() {
	let posts = postFilePaths.map((filePath) => {
		const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
		const { content, data } = matter(source)

		if (!data.tags) data.tags = [];
		data.slug = filePath;

		if (!data.hidden) {			
			return { content, data, filePath }
		}
	})

	posts = posts.filter(function( element ) {return element !== undefined});

	return posts
}

export function getAllPostsData() {
	let posts = postFilePaths.map((filePath) => {
		const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
		const { data } = matter(source)
		
		if (!data.tags) data.tags = [];

		if (!data.hidden) {
			return { data, filePath }
		}
		
	})

	posts = posts.filter(function( element ) {return element !== undefined});

	return posts
}

export function getAllTags() {
    const posts = getAllPostsData();
    let tags = [];

    posts.forEach(post => {
		
		if (post) {
			post.data.tags.forEach(tag => {
				(!tags.includes(tag)) && tags.push(tag);
			});
		}

    });

    return tags;
}