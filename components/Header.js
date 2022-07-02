import Link from "next/link"
import Search from "./Search"
import * as React from "react";

export default function Header({page, searchOptions}) {
	const selected = 'py-3 border-b-3 border-b-black dark:border-b-white font-bold'
	
	return (
		<header className="dark:text-white p-3">
			<div className="flex items-center justify-between max-w-screen-xl mx-auto">
				<Link href='/'>
					<a>
						<div className="flex items-center">
						<	img src='/Favicon.png' className="inline"/> <span className="text-3xl font-extrabold ml-2 hidden md:inline">CRAMER</span>
						</div>
					</a>
				</Link>

				<div>
					<Link href={'/'}><a className={`hidden md:inline px-3 mx-1 h-100 ${page=="index" && selected}`}>Home</a></Link>
					<Link href={'/posts'}><a className={`hidden md:inline px-3 mx-1 h-100 ${page=="notes" && selected}`}>Notatki</a></Link>
					<Link href={'/contributing'}><a className={`hidden md:inline px-3 mx-1 mr-5 h-100 ${page=="added" && selected}`}>Dodaj notatkę</a></Link>

					<Search
						onChange={searchOptions.onChange}
						onKey={searchOptions.onKey}
						value={searchOptions.value}
					/>
				</div>
			</div>
		</header>
	)
}
