import ReactDOM from "react-dom"
import { styled } from "styled-components"

const Div = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index: 10;
`

export default function Backdrop({ onClick }) {
    return ReactDOM.createPortal(
        <Div onClick={onClick}></Div>,
        document.getElementById("backdrop-hook")
    )
}
