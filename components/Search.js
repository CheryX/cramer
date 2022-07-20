export default function Search({onChange, onKey, value, className}) {
	return (
		<div className={"rounded-full bg-primary-500 bg-opacity-25 dark:bg-primary-800 text-primary-800 dark:text-primary-200 px-2 inline-block"}>
			<i className="fa-solid fa-magnifying-glass ml-1 mr-3"></i>
			<input
				aria-label="Szukaj notatek..." type="text"
				placeholder="Szukaj notatek..."
				onChange={onChange}
				onKeyUp={onKey}
				defaultValue={value}
				className="bg-transparent border-transparent font-medium  outline-transparent py-1 duration-200 focus:outline-none
				placeholder:text-primary-600 dark:placeholder:text-primary-300 
				dark:text-primary-200 text-primary-600 
				dark:focus:text-primary-200 focus:text-slate-700"
			/> 
		</div>
	)
}
