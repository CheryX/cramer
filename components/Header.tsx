/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import {useTheme} from 'next-themes'
export default function Header() {
	const {theme, setTheme} = useTheme()

	return ( 
		<nav className='w-full fixed bottom-0 lg:top-0 h-16 lg:min-h-screen lg:w-80 lg:py-10 z-20 bg-dark flex flex-col justify-between'>


			<div className="hidden lg:flex justify-center items-center">
				<Link href={'/'}>
					<a className="flex">
						<div className="flex items-center justify-center py-5 text-white">

							<img src="/logo_white.png" alt="Cramer Logo" width={60} className="" />
							<span className="text-4xl font-black ml-2">CRAMER</span>

						</div>
					</a>
				</Link>
			</div>

			<ul id="nav" className='flex lg:flex-col justify-around items-center lg:justify-center text-white lg:w-full'>


				<li>
					<Link href="/"><a className="nav-item">
						<i className="fa-solid fa-house"></i>
						<span className="nav-tooltip">Home</span>
					</a></Link>
				</li>

				<li className="hidden lg:block">
					<Link href="/about"><a className="nav-item">
					<i className="fa-solid fa-user"></i>
						<span className="nav-tooltip">O nas</span>
					</a></Link>
				</li>

				<li>
					<Link href="/posts/"><a className="nav-item">
						<i className="fa-solid fa-magnifying-glass"></i>
						<span className="nav-tooltip">Szukaj</span>
					</a></Link>
				</li>

				<li>
					<Link href="/posts/example"><a className="nav-item">
						<i className="fa-solid fa-star"></i>
						<span className="nav-tooltip">Ulubione</span>
					</a></Link>
				</li>

				<button className="nav-item lg:hidden" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
						<i className="fa-solid fa-circle-half-stroke"></i>
				</button>

			</ul>

			<ul className="hidden lg:flex row items-center justify-center text-white" id="nav_socials">

				<li>
					<button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
						<i className="fa-solid fa-circle-half-stroke"></i>
					</button>
				</li>
				<li>
					<Link href="">
						<a target={"_blank"}>
							<i className="fa-solid fa-circle-info"></i>
						</a>
					</Link>
				</li> 
				<li>
					<Link href="https://github.com/CheryX/cramer">
						<a target={"_blank"}>
							<i className="fa-brands fa-github"></i>
						</a>
					</Link>
				</li>
				<li>
					<Link href="/feed.xml">
						<a target={"_blank"}>
							<i className="fa-solid fa-rss"></i>
						</a>
					</Link>
				</li>

			</ul>


		</nav>
	);
}