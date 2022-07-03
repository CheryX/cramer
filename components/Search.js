export default function Search({onChange, onKey, value, className}) {
	return (
		<div className={"rounded-full bg-primary-200 dark:bg-primary-800 text-primary-800 dark:text-primary-200 px-2 inline-block"}>
			<i className="fa-solid fa-magnifying-glass mx-1"></i>
			<input
				aria-label="Szukaj notatek..." type="text"
				placeholder="Szukaj notatek..."
				onChange={onChange}
				onKeyUp={onKey}
				defaultValue={value}
				className="bg-transparent border-transparent font-medium placeholder:text-primary-600 dark:text-primary-200 outline-transparent py-1 text-primary-600 dark:focus:text-primary-200 focus:text-slate-700 duration-200 focus:outline-none"
			/> 
		</div>
	)
}
