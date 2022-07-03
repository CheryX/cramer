
export default function Table({ children }) {

	return (
		<table className="border-collapse w-full border border-primary-400 dark:border-primary-500 bg-white dark:bg-primary-800 my-5">
            {children}
        </table>
	)
}

export function Thead({ children }) {
	return (
		<thead className="bg-primary-100 dark:bg-primary-900">
			{children}
		</thead>
	)
}

export function Th({ children }) {
	return (
		<th className="w-1/2 border border-primary-200 dark:border-primary-600 font-semibold p-4 text-primary-900 dark:text-primary-200 text-left">
			{children}
		</th>
	)
}

export function Td({ children }) {
	return (
		<td className="border border-primary-200 dark:border-primary-600 p-4 text-primary-800 dark:text-primary-500">
			{children}
		</td>
	)
}