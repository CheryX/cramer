export function Ordered({ children }) {
	return (
		<ol className="list-decimal ml-8 my-5">
            {children}
        </ol>
	)
}

export function Unordered({ children }) {
	return (
		<ul className="list-disc ml-8 my-5">
            {children}
        </ul>
	)
}
