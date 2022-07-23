import Link from "next/link"
import { subjects } from 'posts/data';

export default function Subjects() {
	return (
        <div id='subjects' className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-8 lg:max-w-screen-xl mx-auto my-10 md:my-20 gap-4'>
            {subjects.map((data, index) => {
                return (
                    <Link href={`/posts?q=${data.name.toLowerCase()}`}>
                        <a>
                            <div key={index} className='flex flex-col'>
                                <i className={`fa-solid ${data.icon} text-center fa-4x mb-5`}></i>
                                <p className='text-center text-2xl font-bold'>{data.name}</p>
                            </div>
                        </a>
                    </Link>
                )
            })}
        </div>
	)
}
