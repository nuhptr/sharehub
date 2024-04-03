import { styled } from "styled-components"

import UserItem from "./user-item"
import Card from "../../components/atomic/card"

const Ul = styled.ul`
    width: 90%;
    max-width: 50rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style: none;
    margin: 0 auto;
    padding: 0;
`

export default function UserList({ items }) {
    if (items.length === 0) {
        return (
            <div className="center">
                <Card>
                    <h2>No users found!</h2>
                </Card>
            </div>
        )
    }

    return (
        <Ul>
            {items.map((user) => (
                <UserItem
                    key={user.id}
                    id={user.id}
                    image={user.image}
                    name={user.name}
                    placeCount={user.places}
                />
            ))}
        </Ul>
    )
}
