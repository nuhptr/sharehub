import { NavLink } from "react-router-dom"
import { styled } from "styled-components"

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        flex-direction: row;
    }

    & li {
        margin: 1rem;

        @media (min-width: 768px) {
            margin: 0 0.5rem;
        }
    }

    & a {
        border: 1px solid transparent;
        color: #292929;
        text-decoration: none;
        letter-spacing: -0.2px;
        padding: 0.5rem;

        @media (min-width: 768px) {
            color: white;
            text-decoration: none;
        }

        &:hover,
        &:active,
        &.active {
            background: #f8df00;
            color: black;
            border-radius: 8px;
        }
    }

    & button {
        cursor: pointer;
        border: 1px solid #292929;
        color: #292929;
        background: transparent;
        padding: 0.5rem;
        font: inherit;

        @media (min-width: 768px) {
            border: 1px solid white;
            color: white;
            background: transparent;
        }

        &:hover,
        &:active {
            background: #292929;
            color: white;

            @media (min-width: 768px) {
                background: #f8df00;
                color: #292929;
            }
        }

        &:focus {
            outline: none;
        }
    }
`

export default function NavLinks() {
    return (
        <List>
            <li>
                <NavLink to={"/"} exact>
                    All Users
                </NavLink>
            </li>
            <li>
                <NavLink to={"/u1/places"}>My Places</NavLink>
            </li>
            <li>
                <NavLink to={"/places/new"}>Add Places</NavLink>
            </li>
            <li>
                <NavLink to={"/auth"}>Authenticate</NavLink>
            </li>
        </List>
    )
}
