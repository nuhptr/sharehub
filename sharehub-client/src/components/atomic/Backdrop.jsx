import React from "react"
import ReactDOM from "react-dom"

import "./Backdrop.css"

export default function Backdrop({ onClick }) {
   const content = <div className="backdrop" onClick={onClick}></div>
   
   return ReactDOM.createPortal(content, document.getElementById("backdrop-hook"))
}
