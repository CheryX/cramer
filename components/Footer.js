export default function Footer() {

	return (
		<footer className="dark:text-white p-3 print:hidden bg-primary-50 dark:bg-primary-800 mt-auto">
			<div className="text-center">
				Nie kradnij za dużo kodu {new Date().getFullYear()}
			</div>
		</footer>
	)
}
