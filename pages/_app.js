import 'katex/dist/katex.css'
//import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@/css/prism.css'
import Head from 'next/head'

// note to future contributors: its not too late to turn back

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta content="width=device-width, initial-scale=1" name="viewport" />
			</Head>

			<Component {...pageProps} />
		</>
	)
}