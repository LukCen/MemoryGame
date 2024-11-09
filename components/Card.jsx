import { useState } from "react"

export default function Card({ content, onClick, id }) {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
    if (onClick) {
      onClick()
    }
  }
  return (
    <div className="card" onClick={handleClick} data-active={isActive} id={`card-${id}`}>{content}</div>
  )
}


