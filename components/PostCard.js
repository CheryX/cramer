export default function PostCard({title, date, description, thumbnail}) {

    const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    const card = {
        width: "400px",
        height: "220px",
        background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(${thumbnail})`
    }

    return (
        <div style={card} className="card mb-3 text-white p-3">
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{new Date(date).toLocaleDateString('pl-PL', postDateTemplate)}</p>
        </div>
    )
}