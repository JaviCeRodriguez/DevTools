import React from 'react'

const Card = ({ title, description, isStyle }) => {
  const cardClass = `card w-25 m-4 p-2 ${isStyle ? "bg-warning" : ""}`;

  return(
    <div className={cardClass}>
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{description}</p>
    </div>
  )
}

export default Card;