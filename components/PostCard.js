import PostLayout from "@/layouts/PostLayout"
import Link from "next/link"

export default function PostCard({post}) {
	const card = {
		background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
		center / cover no-repeat url(${post.thumbnail})`
	}
	
	let title = post.title.substring(0,40)
	if (post.title.length > 40) title += "..."


	return (
		<Link href={`/posts/${post.slug.replaceAll('.mdx', '')}`}>
			<a>
				<div style={card} className="m-5 p-5 rounded-md">
					<p className="text-right text-slate-300"> <i className="fa-regular mr-1 fa-calendar"></i> {post.date} </p>
					
					<div className="h-20 flex items-end">
						<h2 className="text-3xl font-bold align-bottom text-primary-100" aria-label={post.title}>{title}</h2>
					</div>

					<div className="flex items-center mt-1">
						<i className="fa-solid mr-1 fa-tags text-lg"></i>

						{post.tags && ( <span className="font-medium text-primary-100">{post.tags.slice(0, 2).join(', ')}</span> )}
					</div>
				</div>
			</a>
		</Link>
	)
}
