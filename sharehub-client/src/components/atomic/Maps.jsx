import { useRef, useEffect } from "react"
import { styled } from "styled-components"

const Div = styled.div`
    width: 100%;
    height: 100%;
`

export default function Maps({ className, style, center, zoom }) {
    const mapRef = useRef()

    useEffect(() => {
        //* add map to the DOM
        const map = new window.google.maps.Map(mapRef.current, { center: center, zoom: zoom })

        new window.google.maps.Marker({ position: center, map: map })
    }, [center, zoom])

    return <Div id="map" ref={mapRef} className={className} style={style}></Div>
}
