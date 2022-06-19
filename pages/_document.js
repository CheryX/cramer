import Document, { Html, Head, Main, NextScript } from 'next/document'
import Footer from '@/components/Footer'

class MyDocument extends Document {
	render() {
		return (
		<Html lang="en">
			<Head>
				<meta charSet="utf-8" />
			</Head>

			<body>
				<Main />
				<Footer />
				<NextScript />
			</body>
		</Html>
		)
	}
}

export default MyDocument