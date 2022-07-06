import { useState } from 'react';

export default function Accordion({title, children}) {

	const [expanded, setExpanded] = useState(false);

	return (
		<div className='dark:border-primary-500 border rounded-md my-5'>
			<div onClick={() => setExpanded(!expanded)} className='p-5 border-b-primary-500 border-b cursor-pointer'>
				<h5>
					{title}
				</h5>
			</div>

			{expanded && children && (<div>{children}</div>) }
		</div>
	);
}