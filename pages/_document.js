import Document, { Html, Head, Main, NextScript } from 'next/document'
import Header from '@/components/Header'
class MyDocument extends Document {
	render() {
		return (
		<Html lang="en">
			<Head>
				<meta charSet="utf-8" />
			</Head>

			<body>
				<Header />
				<Main />
				<NextScript />
			</body>
		</Html>
		)
	}
}

export default MyDocument