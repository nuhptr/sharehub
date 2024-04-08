import { useState } from "react"
import { Link } from "react-router-dom"
import { styled } from "styled-components"

import MainHeader from "./main-header"
import NavLinks from "./nav-links"
import SideDrawer from "./side-drawer"
import { Backdrop } from "../atomic"

const Button = styled.button`
    width: 3rem;
    height: 3rem;
    background: transparent;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-right: 2rem;
    cursor: pointer;

    & span {
        display: block;
        width: 2rem;
        height: 2px;
        background: white;
    }

    @media (min-width: 768px) {
        display: none;
    }
`

const Heading1 = styled.h1`
    color: white;

    & a {
        text-decoration: none;
        color: white;
        font-size: 32px;
        letter-spacing: -1.2px;
    }
`

const NavHeader = styled.nav`
    display: none;

    @media (min-width: 768px) {
        display: block;
    }
`

const NavDrawer = styled.nav`
    height: 100%;
`

export default function MainNavigation() {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false)

    const openDrawerHandler = () => setDrawerIsOpen(true)

    const closeDrawerHandler = () => setDrawerIsOpen(false)

    return (
        <>
            {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
            <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
                <NavDrawer>
                    <NavLinks />
                </NavDrawer>
            </SideDrawer>

            <MainHeader>
                <Button onClick={openDrawerHandler}>
                    {/* Navigation Hamburger */}
                    <span />
                    <span />
                    <span />
                </Button>
                <Heading1>
                    <Link to="/">Sharehub</Link>
                </Heading1>
                <NavHeader>
                    <NavLinks />
                </NavHeader>
            </MainHeader>
        </>
    )
}
