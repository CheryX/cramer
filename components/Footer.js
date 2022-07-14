export default function Footer() {

	return (
		<footer className="dark:text-white p-3 print:hidden bg-primary-50 dark:bg-primary-800">
			<div className="flex items-center justify-between max-w-screen-xl mx-auto">
				Nie kradnij za dużo kodu {new Date().getFullYear()}
			</div>
		</footer>
	)
}
