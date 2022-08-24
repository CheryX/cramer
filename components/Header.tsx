/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import {useTheme} from 'next-themes'

export default function Header() {
	const {theme, setTheme} = useTheme()
	return ( 
		<nav className='w-full fixed bottom-0 lg:top-0 h-16 lg:h-14 z-20 '>
			<ul id="nav" className='flex row justify-around lg:justify-center bg-black text-white px-6'>

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
						<span className="material-symbols-rounded">settings</span>
						<span className="nav-tooltip">Ustawienia</span>
					</button>
				</li>

			</ul>
		</nav>
	);
}