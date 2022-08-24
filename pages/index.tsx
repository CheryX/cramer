/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import PostCard from '../components/PostCard';
import SEO from '../components/SEO';
import { getAllPostsData, Post } from '../data/postData';
import generateRSS from '../data/rss';

type Props = {
  posts: Post[]
}

const Home = ({ posts }: Props) => {
  return (
    <main className='landing-page'>
      <SEO ogUrl={`https://c.mmusielik.xyz/`} />

      <Header />

      <main className='pb-16'>
        
        <section id="landing" className='min-h-fit text-center landing-bg text-white'>
          
          <div className='px-5 py-10 lg:pb-28 lg:pt-40'>

            <h1 className='text-2xl font-black lg:text-5xl'>Tworzymy notatki których i tak nikt nie używa</h1>
            <p className='lg:text-2xl lg:mt-2'>Jeśli to cię zainspirowało to możesz notatki czytać</p>

          </div>

        </section>

        <h1 className='lg:text-center mx-5 text-2xl font-black lg:text-5xl mt-10'>Najnowsze posty</h1>

        <section id="posts" className='py-8 lg:py-16 flex overflow-x-scroll lg:overflow-hidden lg:justify-evenly'>
          
          {posts.slice(0, 5).map((p, index) => (
              <span key={index}>
                <PostCard title={p.data.title} excerpt={p.data.excerpt} />
              </span>
            ))
          }

        </section>

        <section id='about'>
          about us
        </section>

        <section id="quick_access"></section>
      </main>

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
