/* eslint-disable @next/next/no-img-element */
export default function BBI({ src, width="full" }: any) {

    return (
        <div className={`bg-black p-5 my-5 rounded-lg max-w-xl mx-auto`}>
            <img src={src} alt="Guess"/>
        </div>
    )
}