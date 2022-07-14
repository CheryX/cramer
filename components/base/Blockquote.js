//TODO: Make custom blockquotes
export default function Blockquote({ children }) {

    let styles = {
        'undefined': "border-l-primary-600 text-primary-800 bg-primary-200 dark:border-l-primary-100 dark:text-primary-200 dark:bg-primary-700",
    }

    // let rawText = children[1].props.children
    // let type = children[1].props.children.split(' ')
    // if (type[0].includes('type=')) {

    //     type = type[0].replace('type=', '');
    //     rawText = children[1].props.children.replace(`type=${type}`, '');
        
    // } else {
    //     type = 'undefined'
    // }
    let type="undefined";

	return (
		<blockquote className={`my-5 py-2 border-l-3 pl-3 ${styles[type]}`}>
            {/* {rawText} */}
            {children}
        </blockquote>
	)
}
