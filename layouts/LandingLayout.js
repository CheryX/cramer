import PostCard from "@/components/PostCard"
import PageSEO from "@/components/SEO"
import Link from "next/link"
import Tag from "@/components/Tag"

export default function LandingLayout({ posts, tags }) {
	return (
		<>
			<div className="container justify-content-center mt-7">
				<PageSEO title="Home" description="thinking" />
				<h2>Posty</h2>
				<div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4">

				{posts.map((data) => PostCard({data}) )}

				</div>
				<hr />
				<div className='container-fluid p-4 mb-5'>
					<h2 className="text-center fw-bold my-5">Najpopulariejsze tagi</h2>
					<p className="text-center">
					{Object.keys(tags).length === 0 && 'Nie znaleziono tagów'}
					{tags.map((t) => {
						return (
						<>
							<Tag text={t} color="black" m/>
						</>
						)
					})}
					</p>
				</div>
			</div>

		</>
	)
}