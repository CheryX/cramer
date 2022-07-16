export default function BBImage({ src, width="full" }) {
    return (
        <div className={`bg-black p-5 my-5 rounded-lg w-${width} mx-auto`}>
            <img src={src}/>
        </div>
    )
}