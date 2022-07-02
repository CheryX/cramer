import 'katex/dist/katex.css'
import '@/styles/globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Head from 'next/head'

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