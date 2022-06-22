import Theme from "@/css/theme"

export default function Button ({ disabled, children, onClick, href, not, icon }) {

    
    const button = {
        backgroundColor: '#3F80FF',
        color: '#fdfffc',
        border: 'none',
        borderRadius: '0.3em',
        padding: '0.2em 1.3em',
        fontSize: '1em',
        cursor: 'pointer'
    } 
    const bi = {
        paddingRight: '0.2em'
    }
    if (disabled) button.backgroundColor = '#cecfcd'
    if (not)      button.backgroundColor = '#00000000'
    
    let href_ = ''
    if (href) href_ = href

    //if icon

    return (
        <button
            onClick={onClick}
            href={href}
            style={button}
        >
            {icon !== undefined &&
                <i className={`bi bi-${icon}`} style={bi}></i> 
            }
            {children}
        </button>
    )
}