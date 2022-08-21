import SEO from "@/components/SEO";
import { getAllPostsData } from "@/lib/notesData";
import generateRSS from "@/lib/rss";

export default function Index({ posts }) {
	return (
		<main>
			<SEO ogUrl={`https://c.mmusielik.xyz/`} />

			<section className="landing">
				
				<div className="landing-inner">
				
				</div>

			</section>

			<section className="features">

				<h1>Why us?</h1>

				<p>If you know please message us.</p>

			</section>

		</main>
	)
}

export async function getStaticProps() {
	await generateRSS();

	const posts = getAllPostsData();

	return {
		props: {
			posts
		}
	}
}