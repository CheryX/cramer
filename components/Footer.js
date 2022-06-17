import Link from "next/link"

export default function Footer() {
	return (

		<div className="container">
		<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
			<p className="col-md-4 mb-0 text-muted">Nie kradnij za duzo kodu 2022</p>

			<Link href="/"> 
				<a className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
					Projekt Cramer
				</a>
			</Link>

			<ul className="nav col-md-4 justify-content-end">
				<li className="nav-item"><Link href="/posts"><a className="nav-link text-muted">Posty</a></Link></li>
				<li className="nav-item"><Link href="/"><a className="nav-link text-muted">Home</a></Link></li>
				<li className="nav-item"><Link href="/about"><a className="nav-link text-muted">O projekcie</a></Link></li>
				<li className="nav-item"><Link href="/contributing"><a className="nav-link text-muted">Contributing</a></Link></li>
			</ul>
		</footer>
		</div>

		
	)
}