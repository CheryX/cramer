import Link from "next/link"
import Search from "./Search"

export default function Header({page, searchOptions}) {
	return (
        <header className="bg-slate-800 text-white p-3">
            <div className="flex items-center justify-between container mx-auto">
                <img src="/CramerHeader.png"/>

                <div>
                    <Link href={'/'}><a className={`mx-2 h-100 ${page=="index" && "py-3 border-b-2 border-b-white"}`}>Home</a></Link>
                    <Link href={'/posts'}><a className={`mx-2 h-100 ${page=="notes" && "py-3 border-b-2 border-b-white"}`}>Notatki</a></Link>
                    <Link href={'/contributing'}><a className={`mx-2 mr-5 h-100 ${page=="added" && "py-3 border-b-2 border-b-white"}`}>Dodaj notatkę</a></Link>

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
