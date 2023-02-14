import React from "react"
import { Link } from "react-router-dom"

function CardItem(props) {
  return (
    <div>
      <div className="cards__item">
        <h2 className="cards__item__text">{props.text}</h2>
        <img src={props.src} alt="Travel Image" className="cards__item__img" />
        <Link to={props.path}>
          <button className="btn">More</button>
        </Link>
      </div>
    </div>
  )
}

export default CardItem
