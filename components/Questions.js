import { useState } from "react"

export function TrueFalse({ children: explanation, title, correct }) {
	const [selected, setSelected] = useState(null);
	const [anwsered, setAnwsered] = useState(false);

	const submit = () => {
		(selected === correct) ? setAnwsered(1) : setAnwsered(-1);
	};

	let answers = ['Prawda', 'Fałsz']

	return (
		<div className="my-10 p-5 lg:p-10 lg:px-20 border-primary-600 dark:border-primary-300 border">
			<h5 className="text-2xl font-bold">{title}</h5>

			<div className="my-2">
				{answers.map((choice, index) => (
					<label key={index} className="block my-1 text-lg">
						<input type="radio" value={choice} checked={index === selected} onChange={() => setSelected(index)} disabled={anwsered==1}/> {choice}
					</label>
				))}
			</div>
			
			<button type="submit" onClick={submit} className="text-lg bg-primary-200 dark:bg-primary-700 inline-block py-2 px-5 hover:bg-primary-400 dark:hover:bg-primary-600 duration-150 mr-4">Sprawdź odpowiedź</button>	

			{anwsered==1 && (
				<>
					<span className="text-lg text-green-500">Dobrze!</span>
					<div className="bg-primary-200 dark:bg-primary-800 px-10 py-5 my-5">
						<h5 className="text-2xl font-bold">Wyjaśnienie</h5>
						{explanation}
					</div>
				</>
			)}

			{anwsered==-1 && (
				<span className="text-lg">Nie do końca...</span>
			)}
		</div>
	)
}

export function MultipleOptions({ children: explanation, title, answers, correct }) {
	const [selected, setSelected] = useState(null);
	const [anwsered, setAnwsered] = useState(false);

	const submit = () => {
		(selected === correct) ? setAnwsered(1) : setAnwsered(-1);
	};

	return (
		<div className="my-10 p-5 lg:p-10 lg:px-20 border-primary-600 dark:border-primary-300 border">
			<h5 className="text-2xl font-bold">{title}</h5>

			<div className="my-2">
				{answers.map((choice, index) => (
					<label key={index} className="block my-1 text-lg">
						<input type="radio" value={choice} checked={index === selected} onChange={() => setSelected(index)} disabled={anwsered==1}/> {choice}
					</label>
				))}
			</div>
			
			<button type="submit" onClick={submit} className="text-lg bg-primary-200 dark:bg-primary-700 inline-block py-2 px-5 hover:bg-primary-400 dark:hover:bg-primary-600 duration-150 mr-4">Sprawdź odpowiedź</button>	

			{anwsered==1 && (
				<>
					<span className="text-lg text-green-500">Dobrze!</span>
					<div className="bg-primary-200 dark:bg-primary-800 px-10 py-5 my-5">
						<h5 className="text-2xl font-bold">Wyjaśnienie</h5>
						{explanation}
					</div>
				</>
			)}

			{anwsered==-1 && (
				<span className="text-lg">Nie do końca...</span>
			)}
		</div>
	)
}