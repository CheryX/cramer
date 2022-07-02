export default function Search({onChange, onKey, value}) {
	return (
		<div className="inline-block rounded-full bg-slate-700 text-slate-200 px-2">
			<i className="bi bi-search mx-1"></i>
			<input
				aria-label="Szukaj notatek..." type="text"
				placeholder="Szukaj notatek..."
				onChange={onChange}
				onKeyUp={onKey}
				defaultValue={value}
				className="bg-transparent border-transparent outline-transparent py-1 focus:text-slate-300 duration-200"
			/> 
		</div>
	)
}
