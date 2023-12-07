import { NavLink } from "react-router-dom"

import "./navlinks.css"

export default function Navlinks() {
   return (
      <ul className="nav-links">
         <li>
            <NavLink to="/">All Users</NavLink>
         </li>
         <li>
            <NavLink to="/u1/places">My Place</NavLink>
         </li>
         <li>
            <NavLink to="/places/new">Add Place</NavLink>
         </li>
         <li>
            <NavLink to="/auth">Authenticate</NavLink>
         </li>
      </ul>
   )
}
