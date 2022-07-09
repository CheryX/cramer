import postsData from '../posts/data'

/**
 * This function gets you an array of all registered posts in posts/data.js 
 * @returns Arrary of posts
 */
export function getAllPostsData() {

	let posts = [];
	for (let post of Object.keys(postsData)) {
		posts.push(postsData[post]);
	}

	return posts;
}

/**
 * This function gets you an array of all the tags in all registered posts 
 * @returns Arrary of all tags in all posts
 */
export function getAllTags() {

	let tags = [];
	for (let post of Object.keys(postsData)) {
		for (let tag of postsData[post].tags) {
			tags.push(tag);
		}
	}

    return tags;
}
