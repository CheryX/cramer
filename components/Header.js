import Link from 'next/link'
import Logo from '@/public/favicons/Favicon.svg'

export default function Header({ type }) {

	let selectedClass = "rounded-0 border-primary border-3 border-bottom fw-bold"

	return (

		<>
            <nav className="navbar p-3 navbar-expand-lg d-flex d-print-none">
                <div className="container">

                    <Link href="/">
                        <a className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                            <Logo />
                            <span className="fs-4 text-uppercase fw-bold ms-1">Cramer</span>
                        </a>
                    </Link>
            
					<button className="navbar-toggler d-flex d-lg-none order-3 p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-expanded="false" aria-label="Toggle navigation">
						<i className="bi bi-three-dots text-dark"></i>
					</button>

					<div className="offcanvas offcanvas-end" tabIndex="-1" id="bdNavbar" aria-labelledby="bdNavbarLabel">

						<div className="offcanvas-header">
							<h5 className="offcanvas-title" id="bdNavbarLabel">Cramer</h5>
							<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
						</div>

						<div className="offcanvas-body d-flex justify-content-lg-end">
							<ul className="navbar-nav nav">
								<li key={0} className="nav-item"><Link href="/"><a className={`nav-link ${type==='home'&&selectedClass} `}>Home</a></Link></li>
								<li key={1} className="nav-item"><Link href="/posts"><a className={`nav-link ${type==='posts'&&selectedClass} `}>Posty</a></Link></li>
								<li key={2} className="nav-item"><Link href="/about"><a className={`nav-link ${type==='about'&&selectedClass} `}>O nas</a></Link></li>
								<li key={3} className="nav-item"><Link href="/contributing"><a className={`nav-link ${type==='contributing'&&selectedClass} `}>Dodaj notatkę</a></Link></li>
							</ul>
						</div>

					</div>
                </div>
            </nav>
		</>
		
	)
}