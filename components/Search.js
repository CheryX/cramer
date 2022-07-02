export default function Search({onChange, onKey, value, className}) {
	return (
		<div className={"rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-2 "+className}>
			<i className="bi bi-search mx-1"></i>
			<input
				aria-label="Szukaj notatek..." type="text"
				placeholder="Szukaj notatek..."
				onChange={onChange}
				onKeyUp={onKey}
				defaultValue={value}
				className="bg-transparent border-transparent outline-transparent py-1 text-slate-500 dark:focus:text-slate-300 focus:text-slate-700 duration-200 focus:outline-none"
			/> 
		</div>
	)
}
