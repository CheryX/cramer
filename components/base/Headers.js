//Ewentualnie zmienie

export function h1({ children }) {
	return (
		<h1 className="text-4xl font-bold my-4" id={children.toLowerCase().replaceAll(' ', '-')}>
			{children}
		</h1>
	)
}

export function h2({ children }) {
	return (
		<h2 className="text-3xl font-semibold my-4" id={children.toLowerCase().replaceAll(' ', '-')}>
			{children}
		</h2>
	)
}

export function h3({ children }) {
	return (
		<h3 className="text-2xl font-semibold my-3" id={children.toLowerCase().replaceAll(' ', '-')}>
			{children}
		</h3>
	)
}