import { Link } from "react-router-dom"

import "./main-navigation.css"
import MainHeader from "./main-header"
import Navlinks from "./navlinks"

export default function MainNavigation() {
   return (
      <MainHeader>
         <button className="main-navigation__menu-btn">
            <span />
            <span />
            <span />
         </button>
         <h1 className="main-navigation__title">
            <Link to="/">YourPlaces</Link>
         </h1>
         <nav className="main-navigation__header-nav">
            <Navlinks />
         </nav>
      </MainHeader>
   )
}
