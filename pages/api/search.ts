import { getAllPostsData } from "../../data/postData"
import type { NextApiRequest, NextApiResponse } from 'next'
let posts = getAllPostsData();

type Data = {
  q: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

	function parseSearch(post: any) {
		return `${post.title.toLowerCase()} ${post.excerpt.toLowerCase()} ${post.tags.join(' ')}`;
	}

	res.setHeader('Content-Type', 'application/json');
	if (typeof req.query.q == "undefined") {

		res.statusCode = 400;
		res.end('Missing argument: q');

	} else if (typeof req.query.q == "string") {

		const query: string = req.query.q;
		const results = posts.filter(post => parseSearch(post.data).includes(query)).map(e => e.data);
	
		res.statusCode = 200;
		res.end(JSON.stringify({ results }))
	}
}