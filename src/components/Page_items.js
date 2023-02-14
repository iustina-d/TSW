import React from "react"
import "./Page_items.css"

function Page_items(props) {
  return (
    <div>
      <div className="page__items">
        <div className="page-item">
          <h2 className="page__title">{props.title}</h2>
          <img
            src={props.src}
            alt="
    the picture with the chosen miracle"
            className="page__img"
          />
          <p className="page__text" id="location">
            {props.location}
          </p>
        </div>
        <p className="page__text">{props.text}</p>
      </div>
    </div>
  )
}

export default Page_items
