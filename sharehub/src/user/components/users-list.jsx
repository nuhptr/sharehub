import "./users-list.css"

import UserItem from "./user-item"

export default function UsersList({ items }) {
   if (items.length === 0) {
      return (
         <div className="center">
            <h2>No users found!</h2>
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
