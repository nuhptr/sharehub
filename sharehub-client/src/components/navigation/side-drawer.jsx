import ReactDOM from "react-dom"
import { CSSTransition } from "react-transition-group"
import { styled } from "styled-components"

const Aside = styled.aside`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    height: 100vh;
    width: 70%;
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
`

export default function SideDrawer({ children, show, onClick }) {
    return ReactDOM.createPortal(
        // Content
        <CSSTransition
            in={show}
            timeout={200}
            classNames={"slide-in-left"}
            mountOnEnter
            unmountOnExit>
            <Aside onClick={onClick}>{children}</Aside>
        </CSSTransition>,
        document.getElementById("drawer-hook")
    )
}
