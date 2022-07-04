//Ewentualnie zmienie

export function h1({ children }) {
	return (
		<h1 className="text-4xl font-medium" id={children.toLowerCase().replaceAll(' ', '-')}>
			{children}
		</h1>
	)
}

export function h2({ children }) {
	return (
		<h2 className="text-3xl font-semibold" id={children.toLowerCase().replaceAll(' ', '-')}>
			{children}
		</h2>
	)
}

export function h3({ children }) {
	return (
		<h3 className="text-2xl font-semibold" id={children.toLowerCase().replaceAll(' ', '-')}>
			{children}
		</h3>
	)
}