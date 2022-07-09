import { useState } from 'react';

export default function Accordion({title, children}) {

	const [expanded, setExpanded] = useState(false);

	return (
		<div className='dark:border-primary-500 border rounded-md my-5'>
			<div onClick={() => setExpanded(!expanded)} className='py-3 px-6 cursor-pointer flex justify-between items-center hover:bg-slate-200 dark:hover:bg-slate-800 duration-500'>
				<h5 className='inline-block'>
					{title}
				</h5>

				<i className={`fa-solid fa-angle-up ${!expanded && "rotate-180"} duration-500 inline-block`}></i>
			</div>

			<div className={`dark:border-t-primary-500 px-5 lg:px-16 overflow-hidden duration-75 max-h-0 ${expanded && 'max-h-full py-5 border-t'} box-border`}>
				{children}
			</div>
		</div>
	);
}