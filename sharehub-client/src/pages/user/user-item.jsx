import { Link } from "react-router-dom"
import { styled } from "styled-components"

import { Avatar, Card } from "../../components/atomic"

const ListUserItem = styled.li`
    margin: 1rem;
    width: calc(45% - 2rem);
    min-width: 17.5rem;

    & a {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        text-decoration: none;
        letter-spacing: -0.4px;
        padding: 1.5rem 1.5rem;
        color: white;
        background-color: #292929;

        &:hover,
        &:active {
            background: #ffd900;
        }
    }

    &:hover h2,
    &:active h2,
    &:hover p,
    &:active p {
        color: #292929;
    }
`

const DivUserImage = styled.div`
    width: 4rem;
    height: 4rem;
    margin-right: 1rem;
`

const DivUserInfo = styled.div`
    & h2 {
        font-size: 1.5rem;
        margin: 0 0 0.3rem 0;
        font-weight: normal;
        color: #ffd900;
    }

    & p {
        margin: 0;
        font-size: 1.2rem;
    }
`

export default function UserItem({ id, image, name, placeCount }) {
    // console.log(id, image, name, placeCount)

    return (
        <ListUserItem>
            <Card className="user-item__content">
                <Link to={`/${id}/places`} preventScrollReset={true}>
                    <DivUserImage>
                        <Avatar image={image} alt={name} />
                    </DivUserImage>
                    <DivUserInfo>
                        <h2>{name}</h2>
                        <p>
                            {placeCount} {placeCount === 1 ? "Place" : "Places"}
                        </p>
                    </DivUserInfo>
                </Link>
            </Card>
        </ListUserItem>
    )
}
