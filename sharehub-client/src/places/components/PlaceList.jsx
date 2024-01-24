import React from "react"

import "./PlaceList.css"

import Card from "../../components/atomic/Card"
import PlaceItem from "./PlaceItem"

export default function PlaceList({ items }) {
   if (items.length === 0) {
      return (
         <div className="place-list center">
            <Card>
               <h2>No Places Found</h2>
               <button>Share Place</button>
            </Card>
         </div>
      )
   }

   return (
      <ul className="place-list">
         {items.map((place) => (
            <PlaceItem
               key={place.id}
               id={place.id}
               image={place.imageUrl}
               title={place.title}
               description={place.description}
               address={place.address}
               creatorId={place.creator}
               cordinates={place.location}
            />
         ))}
      </ul>
   )
}
