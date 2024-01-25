import React, { useRef } from "react"

import "./Maps.css"

export default function Maps({ className, style, center, zoom }) {
   const mapRef = useRef()

   const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom,
   })

   new window.google.maps.Marker({ position: center, map: map })

   return <div ref={mapRef} className={`map ${className}`} style={style}></div>
}
