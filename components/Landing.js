import Header from '@/components/Header';
import { useState } from 'react'

export default function Landing() {
    const [searchValue, setSearchValue] = useState('')

	function onKey(e) {
		if (e.key == "Enter") {
			window.location.replace(`/posts?q=${searchValue}`);
		}
	}

	return (
        <div id='landing' className='bg-custom'>
            <Header page='index' searchOptions={{
                onChange: (e) => setSearchValue(e.target.value),
                onKey: (e) => onKey(e)
            }}/>

            <div className='md:py-24 py-12'>
                <h1 className="text-4xl lg:text-6xl font-extrabold max-w-screen-md md:text-center mx-5 md:mx-auto">Miejsce z&nbsp;darmowymi notatkami do szkoły</h1>
                <p className='lg:text-xl md:text-center max-w-screen-md mx-5 md:mx-auto my-5 lg:my-10'>Platforma z&nbsp;notatkami zbudowana przez uczniów dla&nbsp;uczniów. Powtórz materiał przed ważnym sprawdzianem, utrwal umiejętności wykonując zadania.</p>
            </div>

        </div>
	)
}
