import Document, { Html, Head, Main, NextScript } from 'next/document'
import Footer from '@/components/Footer'

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<script src="https://kit.fontawesome.com/3959075aa6.js" crossOrigin="anonymous"></script>
				</Head>

				<body className='text-primary-900 dark:bg-primary-900 dark:text-primary-100 bg-primary-100'>
					<Main />
					<Footer />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument