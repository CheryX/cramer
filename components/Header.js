import Link from 'next/link'
import Logo from '@/public/favicons/White.svg'

export default function Header() {
	return (

		<nav className="shadow navbar p-3 navbar-dark bg-primary navbar-expand-lg fixed-top">
			<div className="container">

				<a className="navbar-brand" href="#"><Logo /></a>

				<button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="offcanvas bg-primary offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
					
					<div className="offcanvas-header px-4 pb-0">
						<h5 className="offcanvas-title text-white">Projekt Cramer</h5>
						<button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-target="#bdNavbar"></button>
					</div>

					<div className="offcanvas-body">
						<hr className="d-lg-none text-white-50" />
						<ul className="navbar-nav flex-grow-1 pe-3">
							<li className="nav-item"><Link href="/posts"><a className="nav-link active fw-bold">Posty</a></Link></li>
							<li className="nav-item"><Link href="/"><a className="nav-link">Home</a></Link></li>
							<li className="nav-item"><Link href="/about"><a className="nav-link">O projekcie</a></Link></li>
							<li className="nav-item"><Link href="/contributing"><a className="nav-link">Contributing</a></Link></li>
							<li className="nav-item"><Link href="/testing"><a className="nav-link">Testing</a></Link></li>
						</ul>
						<hr className="d-lg-none text-white-50" />
						<ul className="navbar-nav flex-row flex-wrap ms-md-auto">
							<li className="nav-item col-6 col-lg-auto">
								<a className="nav-link py-2 px-0 px-lg-2" target="_blank" rel="noopener noreferrer" href="https://github.com/CheryX/cramer" >
									<i className="fs-5 bi bi-github"></i> <small className="d-lg-none ms-2">Github</small>
								</a>
							</li>
							<li className="nav-item col-6 col-lg-auto">
								<a className="nav-link py-2 px-0 px-lg-2" target="_blank" rel="noopener noreferrer" href="https://discord.gg/gHBzHTr6J">
									<i className="fs-5 bi bi-discord"></i> <small className="d-lg-none ms-2">Discord</small>
								</a>
							</li>
							<li className="nav-item col-6 col-lg-auto">
								<a className="nav-link py-2 px-0 px-lg-2" target="_blank" rel="noopener noreferrer" href="/">
									<i className="bi bi-reddit fs-5"></i> <small className="d-lg-none ms-2">Reddit</small>
								</a>
							</li>
						</ul>
					</div>

				</div>
			</div>
		</nav>
		
	)
}