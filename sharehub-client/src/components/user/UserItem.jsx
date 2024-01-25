import React from "react"
import { Link } from "react-router-dom"

import "./UserItem.css"

import Avatar from "../atomic/Avatar"
import Card from "../atomic/Card"

export default function UserItem({ id, image, name, placeCount }) {
   // console.log(id, image, name, placeCount)

   return (
      <li className="user-item">
         <Card className="user-item__content">
            <Link to={`/${id}/places`} preventScrollReset={true}>
               <div className="user-item__image">
                  <Avatar image={image} alt={name} />
               </div>
               <div className="user-item__info">
                  <h2>{name}</h2>
                  <p>
                     {placeCount} {placeCount === 1 ? "Place" : "Places"}
                  </p>
               </div>
            </Link>
         </Card>
      </li>
   )
}
