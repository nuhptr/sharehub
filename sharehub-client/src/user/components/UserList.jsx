import React from "react"

import "./UserList.css"

import UserItem from "./UserItem"
import Card from "../../components/atomic/Card"

export default function UserList({ items }) {
   if (items.length === 0) {
      return (
         <div className="center">
            <Card>
               <h2>No users found!</h2>
            </Card>
         </div>
      )
   }

   return (
      <ul className="users-list">
         {items.map((user) => (
            <UserItem key={user.id} id={user.id} image={user.image} name={user.name} placeCount={user.places} />
         ))}
      </ul>
   )
}
