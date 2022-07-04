export default function Footer() {

	return (
		<footer className="dark:text-white p-3 print:hidden bg-custom">
			<div className="flex items-center justify-between max-w-screen-xl mx-auto">
				Nie kradnij za dużo kodu {new Date().getFullYear()}
			</div>
		</footer>
	)
}
