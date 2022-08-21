import Link from "next/link";

export default function Header() {
    return (
        <nav className="flex p-4 border-b">

            <Link href={'/'}><a className="mx-5"> Home </a></Link>
            <Link href={'/posts'}><a className="mx-5"> Search </a></Link>

        </nav>
    )
}