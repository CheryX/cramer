import React, { useState } from 'react';

export function Accordion({title, children }) {
	const [isActive, setIsActive] = useState(true);

	let collapse = isActive ? 'collapse' : 'collapse show';
	let collapseIcon = isActive ? 'collapsed' : '';

	return (
		<div className="accordion-item">
			<h2 className="accordion-header">
				<button className={`accordion-button ${collapseIcon}`} type="button" data-bs-toggle="collapse" aria-expanded="true" onClick={() => setIsActive(!isActive)}>
				{title}
				</button>
			</h2>
			<div className={`accordion-collapse ${collapse}`}>
				<div className="accordion-body">
					{children}
				</div>
			</div>

		</div>
	);
}

export function AccordionGroup({children}) {
	return (
		<div className="accordion">
			{children}
		</div>
	);
}