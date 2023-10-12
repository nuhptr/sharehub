import UserItem from './user-item'
import './user-list.css'

export default function UserList({ items }) {
   if (items.length === 0) {
      return (
         <div className='center'>
            <h2>No users found.</h2>
         </div>
      )
   }

   return (
      <ul className='users-list'>
         {items.map((user) => (
            <UserItem key={user.id} {...user} />
         ))}
      </ul>
   )
}
