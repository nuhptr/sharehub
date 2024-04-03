import { styled } from "styled-components"

const Header = styled.header`
    width: 100%;
    height: 4.5rem;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    padding: 0 3rem;
    z-index: 5;

    @media (min-width: 768px) {
        justify-content: space-between;
    }
`

export default function MainHeader({ children }) {
    return <Header>{children}</Header>
}
