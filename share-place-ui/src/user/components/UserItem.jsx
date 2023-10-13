import { Link } from 'react-router-dom'

import './user-item.css'

import Avatar from '../../shared/components/Avatars'
import Card from '../../shared/components/Cards'

export default function UserItem({ id, image, name, placeCount }) {
   return (
      <li className='user-item'>
         <Card className='user-item__content'>
            <Link to={`/${id}/places`}>
               <div className='user-item__image'>
                  <Avatar image={image} alt={name} />
               </div>
               <div className='user-item__info'>
                  <h2>{name}</h2>
                  <h3>
                     {placeCount} {placeCount === 1 ? 'Place' : 'Places'}
                  </h3>
               </div>
            </Link>
         </Card>
      </li>
   )
}
