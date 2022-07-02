import Header from '@/components/Header';
import { useState } from 'react'

export default function Index() {
	const [searchValue, setSearchValue] = useState('')

	function onKey(e) {
		if (e.key == "Enter") {
			window.location.replace(`/posts?q=${searchValue}`);
		}
	}

	return (
		<>
			<Header page='index' searchOptions={{
				onChange: (e) => setSearchValue(e.target.value),
				onKey: (e) => onKey(e)
			}}/>

			<h1 className="text-6xl text-center font-black mt-60">404 not found</h1>
			<p className='text-3xl text-center font-bold'>Nie znaleziono strony :{'('}</p>

		</>
	)
}