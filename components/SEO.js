import Head from "next/head";

/* idk if thats important */
export function ArticleSEO({author, date, section}) {
	return ( 
		<Head>
			<meta content="article" property="og:type" data-rh="true" />
			<meta property="article:published_time" content={date} />
			<meta property="article:author" content={author} />
			<meta property="article:section" content={section} />
		</Head>
	);
}

export default function SEO({title, keywords, description, ogUrl}) {
	return ( 
		<Head>
			<meta name="googlebot" content="notranslate" />
			<meta name="color-scheme" content="dark" />
			<meta name="theme-color" content="#3F80FF" />

			<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
			<meta name="keywords" content={keywords}></meta>
			<meta name="description" content={description}></meta>
			
			<meta property="og:title" content={title} />
			<meta property="og:type" content="website" />
			<meta property="og:description" content={description} />
			<meta property="og:url" content={ogUrl} />

			<meta property="og:image" itemProp="image" content="/static/favicon.png" />
			<meta property="og:image:width" content="250" />
			<meta property="og:image:height" content="250" />

			<meta charSet="utf-8"></meta>
			<link rel="icon" href="/static/favicon.png"></link>
			<title>{title}</title>
		</Head>
	);
}

SEO.defaultProps = {
	title: "Projekt Cramer",
	keywords: "cramer, notatki, szkola, nauka",
	description: "Projekt Cramer to miejsce z darmowymi notatkami które możesz wykorzystać do nauki np. przed sprawdzianem",
}