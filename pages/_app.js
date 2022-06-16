import 'katex/dist/katex.css'
import '@/css/theme.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@/css/prism.css'
import Head from 'next/head'
import { useEffect } from "react";

// note to future contributors: its not too late to turn back

export default function App({ Component, pageProps }) {
	useEffect(() => {
		import("bootstrap/dist/js/bootstrap");
	  }, []);

	return (
		<>
			<Head>
				<meta content="width=device-width, initial-scale=1" name="viewport" />
			</Head>

			<Component {...pageProps} />
		</>
	)
}