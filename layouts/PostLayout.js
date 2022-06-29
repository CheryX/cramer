import { renderToString } from "react-dom/server";
const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, children, fileName }) {

	const contentString = renderToString(children);

	const getHeadings = (source) => {
		let regex = /<h1 id="[^"]*">(.*?)<\/h1>/g;

		if (source.match(regex)) {
		  return source.match(regex).map((heading) => {
			let headingText = heading.replace("<h1>", "").replace("</h1>", "");
			headingText = headingText.replace(/<(.|\n)*?>/g, '');

			const link = "#" + headingText.replace(/ /g, "_").toLowerCase();
	
			return {
			  text: headingText,
			  link,
			};
		  });
		}
	
		return [];
	};

	const headings = getHeadings(contentString);

	  
	return (
		<>
			
			{frontMatter.date&& (
				<time dateTime={frontMatter.date}>
					{new Date(frontMatter.date).toLocaleDateString('pl-PL', postDateTemplate)}
				</time>
			)}
			
			{frontMatter.tags.map((tag, index) => (
				<span className="me-1" key={index}>
				{tag}
				</span>
			))}

			<ul>
				{headings.map((heading) => (
					<li key={heading.text}>
					<a href={heading.link}>{heading.text}</a>
					</li>
				))}
			</ul>

			<h1>{frontMatter.title}</h1>
			<p>{frontMatter.summary}</p>

			<article>{children}</article>

		</>
	)
}