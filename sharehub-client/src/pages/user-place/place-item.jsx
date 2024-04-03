import { useState } from "react"
import { styled } from "styled-components"

import Card from "../../components/atomic/card"
import Button from "../../components/atomic/button"
import Modal from "../../components/atomic/modal"
import Maps from "../../components/atomic/maps"

const DivMap = styled.div`
    height: 20rem;
    width: 100%;
`

const List = styled.li`
    margin: 2rem 0;
`

const DivImage = styled.div`
    width: 100%;
    height: 12.5rem;
    margin-right: 1.5rem;

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (min-width: 768px) {
        height: 20rem;
    }
`

const DivInfo = styled.div`
    padding: 1rem;
    text-align: center;

    & h2,
    & h3,
    & p {
        margin: 0 0 0.5rem 0;
        letter-spacing: -0.3px;
    }
`

const DivActions = styled.div`
    padding: 1rem;
    text-align: center;
    border-top: 1px solid #ccc;

    & button,
    & a {
        font-size: 0.9rem;
        letter-spacing: -0.2px;
        margin: 0.7rem;
        padding: 1rem;

        &:hover,
        &:active {
            cursor: pointer;
        }
    }
`

export default function PlaceItem({
    id,
    image,
    title,
    description,
    address,
    creatorId,
    cordinates,
}) {
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
                    <Button inverse onClick={closeMapHandler}>
                        Close
                    </Button>
                }>
                <DivMap>
                    <Maps center={cordinates} zoom={16} />
                </DivMap>
            </Modal>

            <List>
                <Card className="place-item__content">
                    <DivImage>
                        <img src={image} alt={title} />
                    </DivImage>
                    <DivInfo>
                        <h2>{title}</h2>
                        <h3>{address}</h3>
                        <p>{description}</p>
                    </DivInfo>
                    <DivActions>
                        <Button inverse onClick={openMapHandler}>
                            View On Map
                        </Button>
                        <Button to={`/places/${id}`}>Edit</Button>
                        <Button danger>Delete</Button>
                    </DivActions>
                </Card>
            </List>
        </>
    )
}
