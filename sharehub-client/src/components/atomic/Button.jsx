import React from "react"
import { Link } from "react-router-dom"

import "./Button.css"

export default function Button({ exact, to, href, size, inverse, danger, children, onClick, isDisabled }) {
   if (href) {
      return (
         <a
            href={href}
            className={`
            button button--${size || "default"} ${inverse && "button--inverse"} ${danger && "button--danger"}`}
            onClick={onClick}
            disabled={isDisabled}>
            {children}
         </a>
      )
   }

   if (to) {
      return (
         <Link
            to={to}
            exact={exact}
            className={`
            button button--${size || "default"} ${inverse && "button--inverse"} ${danger && "button--danger"}`}
            onClick={onClick}
            disabled={isDisabled}>
            {children}
         </Link>
      )
   }

   return (
      <button
         className={`
         button button--${size || "default"} ${inverse && "button--inverse"} ${danger && "button--danger"}`}
         onClick={onClick}
         disabled={isDisabled}>
         {children}
      </button>
   )
}
