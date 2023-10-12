import './user-list.css'

import UserItem from './user-item'
import Card from '../../shared/components/card'

export default function UserList({ items }) {
   if (items.length === 0) {
      return (
         <Card className='center'>
            <h2>No users found.</h2>
         </Card>
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
