/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import {useTheme} from 'next-themes'

export default function Header() {
	const {theme, setTheme} = useTheme()
	return ( 
		<nav className='w-full fixed bottom-0 lg:top-0 h-16 lg:min-h-screen lg:w-96 lg:py-10 z-20 nav-bg flex flex-col justify-between'>

			<Link href={'/'}>
				<a>
					<div className="hidden lg:flex items-center justify-center py-5 text-white">

						<img src="/favicon.png" alt="Cramer Logo" width={70} />
						<span className="text-5xl font-black ml-2">CRAMER</span>

					</div>
				</a>
			</Link>

			<ul id="nav" className='flex lg:flex-col justify-around items-center lg:justify-center text-white px-8 lg:w-full'>

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

			<ul className="hidden lg:flex row items-center justify-center text-white" id="nav_socials">

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