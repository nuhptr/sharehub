import React, { useRef, useEffect } from "react"

import "./Maps.css"

export default function Maps({ className, style, center, zoom }) {
   const mapRef = useRef()

   useEffect(() => {
      //* add map to the DOM
      const map = new window.google.maps.Map(mapRef.current, {
         center: center,
         zoom: zoom,
      })

      new window.google.maps.Marker({ position: center, map: map })
   }, [center, zoom])

   return <div ref={mapRef} className={`map ${className}`} style={style} id="map"></div>
}
