import Head from "next/head";

type Props = {
    title: string,
    description: string,
    ogUrl: string,
}

export default function SEO({title, description, ogUrl}: Props) {
	return ( 
		<Head>
			<meta name="googlebot" content="notranslate" />
			<meta name="color-scheme" content="dark" />
			<meta name="theme-color" content="#3F80FF" />

			<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
			<meta name="keywords" content="cramer, notatki, szkola, nauka"></meta>
			<meta name="description" content={description}></meta>
			
			<meta property="og:title" content={title} />
			<meta property="og:type" content="website" />
			<meta property="og:description" content={description} />
			<meta property="og:url" content={ogUrl} />

			<meta property="og:image" itemProp="image" content="favicon.ico" />
			<meta property="og:image:width" content="250" />
			<meta property="og:image:height" content="250" />

			<meta charSet="utf-8"></meta>
			<link rel="icon" href="favicon.ico"></link>
			<title>{title}</title>
		</Head>
	);
}

SEO.defaultProps = {
	title: "Projekt Cramer",
	description: "Projekt Cramer to miejsce z darmowymi notatkami które możesz wykorzystać do nauki np. przed sprawdzianem",
}
