import React, { useState } from "react"

import "./PlaceItem.css"

import Card from "../atomic/Card"
import Button from "../atomic/Button"
import Modal from "../atomic/Modal"
import Maps from "../atomic/Maps"

export default function PlaceItem({ id, image, title, description, address, creatorId, cordinates }) {
   const [showMap, setShowMap] = useState(false)

   const openMapHandler = () => setShowMap(true)

   const closeMapHandler = () => setShowMap(false)

   return (
      <>
         <Modal
            show={showMap}
            onCancel={closeMapHandler}
            header={address}
            contentClass="place-item__modal-content"
            footerClass="place-item__modal-actions"
            footer={
               <Button onClick={closeMapHandler} inverse>
                  Close
               </Button>
            }>
            <div className="map-container">
               <Maps center={cordinates} zoom={16} />
            </div>
         </Modal>

         <li className="place-item">
            <Card className="place-item__content">
               <div className="place-item__image">
                  <img src={image} alt={title} />
               </div>
               <div className="place-item__info">
                  <h2>{title}</h2>
                  <h3>{address}</h3>
                  <p>{description}</p>
               </div>
               <div className="place-items__actions">
                  <Button inverse onClick={openMapHandler}>
                     View On Map
                  </Button>
                  <Button to={`/places/${id}`}>Edit</Button>
                  <Button danger>Delete</Button>
               </div>
            </Card>
         </li>
      </>
   )
}
