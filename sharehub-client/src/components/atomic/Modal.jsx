import ReactDOM from "react-dom"
import { CSSTransition } from "react-transition-group"
import { styled } from "styled-components"

import Backdrop from "./backdrop"

const RootDivModal = styled.div`
    z-index: 100;
    position: fixed;
    top: 16vh;
    left: 10%;
    width: 80%;
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 1rem;

    @media (min-width: 768px) {
        left: calc(50% - 20rem);
        width: 40rem;
    }

    &.modal-enter {
        transform: translateY(-10rem);
        opacity: 0;
    }

    &.modal-enter-active {
        transform: translateY(0);
        opacity: 1;
        transition: all 200ms;
    }

    &.modal-exit {
        transform: translateY(0);
        opacity: 1;
    }

    &.modal-exit-active {
        transform: translateY(-10rem);
        opacity: 0;
        transition: all 200ms;
    }
`

const HeaderModal = styled.header`
    width: 100%;
    padding: 1rem 0.5rem;
    background: #2a006e;
    border-radius: 1rem 1rem 0 0;
    color: white;

    & h2 {
        margin: 0.5rem;
    }
`

const DivModalContent = styled.div`
    padding: 1rem 0.5rem;
`

const FooterModal = styled.footer`
    padding: 1rem 0.5rem;
`

function ModalOverlay({
    className,
    style,
    headerClass,
    header,
    onSubmit,
    contentClass,
    children,
    footerClass,
    footer,
}) {
    return ReactDOM.createPortal(
        // Content
        <RootDivModal className={className} style={style}>
            <HeaderModal className={headerClass}>
                <h2>{header}</h2>
            </HeaderModal>
            <form onSubmit={onSubmit || ((event) => event.preventDefault())}>
                <DivModalContent className={contentClass}>{children}</DivModalContent>
                <FooterModal className={footerClass}>{footer}</FooterModal>
            </form>
        </RootDivModal>,
        document.getElementById("modal-hook")
    )
}

export default function Modal({
    show,
    onCancel,
    header,
    footer,
    children,
    onSubmit,
    contentClass,
    footerClass,
}) {
    return (
        <>
            {show && <Backdrop onClick={onCancel} />}
            <CSSTransition in={show} timeout={200} classNames="modal" mountOnEnter unmountOnExit>
                <ModalOverlay
                    header={header}
                    footer={footer}
                    onSubmit={onSubmit}
                    onCancel={onCancel}
                    contentClass={contentClass}
                    footerClass={footerClass}>
                    {children}
                </ModalOverlay>
            </CSSTransition>
        </>
    )
}
