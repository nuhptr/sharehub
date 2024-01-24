import React from "react"

import "./PlaceItem.css"

import Card from "../../shared/components/Card"

export default function PlaceItem({ id, image, title, description, address, creatorId, cordinates }) {
   return (
      <li className="place-item">
         <Card className="place-item__content">
            <div className="place-item__image">
               <img src={image} alt={title} />
            </div>
            <div className="place-item__info">
               <h2>{title}</h2>
               <h3>{address}</h3>
               <p>{description}</p>
            </div>
            <div className="place-items__actions">
               <button>View On Map</button>
               <button>Edit</button>
               <button>Delete</button>
            </div>
         </Card>
      </li>
   )
}
