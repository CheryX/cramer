import Head from 'next/head'
import '@/styles/main.css'

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