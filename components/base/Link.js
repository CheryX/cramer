
export default function Link({href, children}) {

	return (
		<a href={href} className="text-teal-500">
            {children}
        </a>
	)
}
