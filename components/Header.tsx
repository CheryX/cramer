/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import {useTheme} from 'next-themes'

export default function Header() {
	const {theme, setTheme} = useTheme()
	return ( 
		<nav className='w-full fixed bottom-0 lg:top-0 h-16 lg:min-h-screen lg:w-96 lg:py-10 z-20 nav-bg flex flex-col justify-between'>

			<div className="hidden lg:flex items-center justify-center text-white">

				<img src="favicon.png" alt="Cramer Logo" width={80} />
				<span className="text-5xl font-black ml-2">CRAMER</span>

			</div>

			<ul id="nav" className='flex lg:flex-col justify-around items-start lg:justify-center text-white px-6'>

				<li>
					<Link href="/"><a className="nav-item">
						<span className="material-symbols-rounded">home</span>
						<span className="nav-tooltip">Home</span>
					</a></Link>
				</li>

				<li>
					<Link href="/posts/"><a className="nav-item">
						<span className="material-symbols-rounded">search</span>
						<span className="nav-tooltip">Szukaj</span>
					</a></Link>
				</li>

				<li>
					<Link href="/posts/example"><a className="nav-item">
						<span className="material-symbols-rounded">star</span>
						<span className="nav-tooltip">Ulubione</span>
					</a></Link>
				</li>

				<li>
					<button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="nav-item">
						<span className="material-symbols-rounded">person</span>
						<span className="nav-tooltip">Profil</span>
					</button>
				</li>

			</ul>

			<ul className="hidden lg:flex row items-center justify-evenly text-white">

				<li>
					<Link href="">
						<a>
							<span className="material-symbols-rounded">logo_dev</span>
						</a>
					</Link>
				</li>
				<li>
					<Link href="">
						<a target={"_blank"}>
							<span className="material-symbols-rounded">logo_dev</span>
						</a>
					</Link>
				</li>
				<li>
					<Link href="">
						<a target={"_blank"}>
							<span className="material-symbols-rounded">logo_dev</span>
						</a>
					</Link>
				</li>
				<li>
					<Link href="/feed.xml">
						<a target={"_blank"}>
							<span className="material-symbols-rounded">rss_feed</span>
						</a>
					</Link>
				</li>

			</ul>


		</nav>
	);
}