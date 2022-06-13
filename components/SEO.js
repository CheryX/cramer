import Head from 'next/head' 

export default function PageSEO({ type='normal', title, description, image, url }) {
	title = `${title} - Project Cramer`; 

	let color;
	switch (type) {
		case 'normal':
			color = 'Blue';
			break;
		case 'warning':
			color = 'Red';
			break;
	}

	return (
		<Head>

			{/* Default */}
			<title>{title}</title>
			<meta name="title" content={title} />
			<meta name="description" content={description} />
			<meta content="width=device-width, initial-scale=1" name="viewport" />

			{/* Open Graph / Facebook */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content={url} />
			<meta property="og:title" content={title}/>
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />

			{/* Twitter */}
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content={url} />
			<meta property="twitter:title" content={title} />
			<meta property="twitter:description" content={description} />
			<meta property="twitter:image" content={image} />

			{/* Favicon */}
			<link rel="icon" href={`/favicons/${color}.svg`} />

		</Head>
	)
}
	