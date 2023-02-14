import React from "react"
import CardItem from "./CardItem"
import "./Cards.css"

function Cards() {
  return (
    <div className="cards">
      <h1 id="title">The 7 wonders of the modern world</h1>
      <div className="cards__container">
        <CardItem
          src="images/img_1.jpg"
          text="Chichén Itzá"
          path="/Chichen_Itza"
        />
        <CardItem
          src="images/img_2.jpg"
          text="Christ the Redeemer"
          path="/Christ_The_Redeemer"
        />
        <CardItem src="images/img_3.jpg" text="Colosseum" path="/Colosseum" />

        <CardItem
          src="images/img_4.jpg"
          text="The great wall"
          path="/Great_Wall"
        />
        <CardItem
          src="images/img_5.jpg"
          text="Machu Picchu"
          path="/Machu_Picchu"
        />

        <CardItem src="images/img_6.jpg" text="Petra" path="/Petra" />
        <li className="distinct">
          <CardItem src="images/img_7.jpg" text="Taj Mahal" path="/Taj_Mahal" />
        </li>
      </div>
    </div>
  )
}

export default Cards
