/* eslint-disable @next/next/no-img-element */
import PostCard from "@/components/PostCard"
import PageSEO from "@/components/SEO"
import Tag from "@/components/Tag"
import Header from "@/components/Header"

export default function LandingLayout({ posts, tags }) {

	let featuredPosts = posts.filter(post => post.data.featured);

	return (
		<>
			<PageSEO title="Home" description="Projekt Cramer to miejsce z darmowymi notatkami które możesz wykorzystać do nauki np. przed sprawdzianem" />

			{/* Landing */}
			<div className="container-fluid p-0 bg-landing pb-2 mb-lg-7 mb-5">
				<Header type="home" />
				<div className="container px-xxl-8 py-lg-7 pt-3 pb-5 text-md-center d-flex flex-column align-items-md-center justify-content-md-center ">
					<h1 className="display-3 fw-bold lh-1 mb-5 mx-lg-7 my-md-5">Miejsce z darmowymi notatkami do szkoły</h1>
					<p className="fs-5 lh-1 my-md-3 mx-lg-6 my-4 d-sm-block d-none">Platforma z notatkami zbudowana przez uczniów dla uczniów. Powtórz materiał przed ważnym sprawdzianem, utrwal umiejętności wykonując zadania.</p>
					<div className="my-md-4">
						<button key={1} type="button" className="btn btn-primary btn-lg py-2 px-4 me-1">Szukaj notatek</button>
						<button key={2} type="button" className="btn btn-outline-secondary btn-lg py-2 px-4 me-1">Dodaj notatkę</button>
					</div>
				</div>
			</div>

			{/* Quote */}
			<div className="container px-lg-7 my-md-4 my-lg-7 d-flex flex-direction align-items-center justify-content-center">
				{/* Picture */}
				<div className="d-md-block ms-7 d-none">
					<img
						src={`/images/camus.jpg`}
						width={150}
						height={150}
						alt="Camus"
						className="rounded-circle"
					/>
				</div>
				{/* Text */}
				<div className="me-md-7">
					<p className="fs-3 fw-bold ms-md-5 pb-0 mb-0">
						Szkoła przygotowuje dzieci do życia w świecie, który nie istnieje. 
					</p>
					<p className="fs-4 fst-italic ms-md-5">
					Albert Camus
					</p>
				</div>
			</div>

			{/* Featured Posts */}
			<div className="container justify-content-center mt-lg-7 mt-6">
				<h2 className="fw-bold fs-1 text-md-center mb-md-6">Wyróżnione Posty</h2>

				<div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4">
					{featuredPosts.map((data) => PostCard({data}) )}
				</div>

			</div>

			<div className="container justify-content-center mt-md-7 my-6 mb-md-8">
				<h2 className="fw-bold fs-1 text-md-center mb-md-6">Najpopularniejsze tagi</h2>

				<p className="text-md-center">
					{tags.map((t, index) => {
						return <span key={index} className="me-3"><Tag text={t} color="black"/> </span>
					})}
				</p>
			</div>

		</>
	)
}