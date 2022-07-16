export default function BBImage({ src }) {
    return (
        <div className="bg-black p-5 my-5 rounded-lg">
            <img src={src}/>
        </div>
    )
}