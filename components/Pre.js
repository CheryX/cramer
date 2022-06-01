import { useState, useRef } from 'react'

const Pre = (props) => {
  const textInput = useRef(null)
  const [hovered, setHovered] = useState(false)
  const [copied, setCopied] = useState(false)

  const onEnter = () => {
    setHovered(true)
  }
  const onExit = () => {
    setHovered(false)
    setCopied(false)
  }
  const onCopy = () => {
    setCopied(true)
    navigator.clipboard.writeText(textInput.current.textContent)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <div ref={textInput} onMouseEnter={onEnter} onMouseLeave={onExit} className="relative">
      {hovered && (
        <button
          aria-label="Copy code"
          type="button"
          className={`absolute right-2 top-2 h-8 w-8 rounded border-2 bg-gray-700 p-1 dark:bg-gray-800 ${
            copied
              ? 'border-green-400 focus:border-green-400 focus:outline-none'
              : 'border-gray-300'
          }`}
          onClick={onCopy}
        >
          <i class="bi bi-clipboard" style={{
            color: copied ? 'green' : 'gray'
          }}></i>
        </button>
      )}

      <pre>{props.children}</pre>
    </div>
  )
}

export default Pre
