import { styled, css } from "styled-components"

import Card from "../../components/atomic/card"
import PlaceItem from "./place-item"

const sharedStyles = css`
    width: 90%;
    max-width: 40rem;
    list-style: none;
    margin: 1rem auto;
    padding: 0;
`

const Div = styled.div`
    ${sharedStyles}
`

const Ul = styled.ul`
    ${sharedStyles}
`

export default function PlaceList({ items }) {
    if (items.length === 0) {
        return (
            <Div className="center">
                <Card>
                    <h2>No Places Found</h2>
                    <button>Share Place</button>
                </Card>
            </Div>
        )
    }

    return (
        <Ul>
            {items.map((place) => (
                <PlaceItem
                    key={place.id}
                    id={place.id}
                    image={place.imageUrl}
                    title={place.title}
                    description={place.description}
                    address={place.address}
                    creatorId={place.creator}
                    cordinates={place.location}
                />
            ))}
        </Ul>
    )
}
