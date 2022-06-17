/* eslint-disable jsx-a11y/alt-text */

export default function CustomImage({ src }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} className="img-fluid" />
  )
}
