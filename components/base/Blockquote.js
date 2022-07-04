//TODO: Make custom blockquotes
export default function Blockquote({ children }) {

    let styles = {
        'undefined': "border-l-primary-600 text-primary-800 bg-primary-150 dark:border-l-primary-150 dark:text-primary-150 dark:bg-primary-800",
        'danger': "border-l-red-900 text-red-900 bg-red-200 dark:border-l-red-200 dark:text-red-200 dark:bg-red-900",
        'success': "border-l-green-900 text-green-900 bg-green-200 dark:border-l-green-200 dark:text-green-200 dark:bg-green-900",
        'warning': "border-l-yellow-900 text-yellow-900 bg-yellow-100 dark:border-l-yellow-100 dark:text-yellow-100 dark:bg-yellow-900",
        'info': "border-l-blue-900 text-blue-900 bg-blue-200 dark:border-l-blue-200 dark:text-blue-200 dark:bg-blue-900"
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
		<blockquote className={`my-4 py-2 border-l-3 pl-3 ${styles[type]}`}>
            {/* {rawText} */}
            {children}
        </blockquote>
	)
}
