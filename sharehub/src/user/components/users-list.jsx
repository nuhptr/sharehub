import "./users-list.css"

import UserItem from "./user-item"
import Card from "../../shared/components/card"

export default function UsersList({ items }) {
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
            <UserItem key={user.id} {...user} />
         ))}
      </ul>
   )
}
