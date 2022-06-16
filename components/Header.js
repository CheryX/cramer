import Link from 'next/link'

export default function Header() {
	return (
		<div className="container">
			<header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
				<a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
					<img width="52" src='/favicons/Blue.svg' />
				</a>

				<ul className="nav nav-pills justify-content-center">
					<li class="nav-item"><Link href="/posts"><a className="nav-link active">Posty</a></Link></li>
					<li class="nav-item"><Link href="/"><a className="nav-link">Home</a></Link></li>
					<li class="nav-item"><Link href="/about"><a className="nav-link">O projekcie</a></Link></li>
					<li class="nav-item"><Link href="/contributing"><a className="nav-link">Contributing</a></Link></li>
					<li class="nav-item"><Link href="/testing"><a className="nav-link">Testing</a></Link></li>
				</ul>
			</header>
		</div>
	)
}
