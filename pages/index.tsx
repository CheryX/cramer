/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import SEO from '../components/SEO';
import { getAllPostsData } from '../data/postData';
import generateRSS from '../data/rss';

const Home: NextPage = () => {
  return (
    <main>
      <SEO ogUrl={`https://c.mmusielik.xyz/`} />

      <section id="landing">
        <div className="layer-blur">

            <div>

              <div className="flex items-center">
                <img src='./favicon.png' alt='Logo' className='brand-logo'/>
                <span className='title'>CRAMER</span>
              </div>

              <p className='text-white text-2xl italic mt-4'>Czyli jak przeżyć w szkole.</p>
            </div>

            <div className='hidden lg:block'>
              <img src='./static/person.svg' alt='A person studying' className='w-[25rem]' />
            </div>

        </div>
      </section>

      <section id='top-posts'>
        <h1>Wyróżnione notatki</h1>
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

export default Home
