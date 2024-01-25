import React from "react"
import ReactDOM from "react-dom"
import { CSSTransition } from "react-transition-group"

import "./Modal.css"

import Backdrop from "./Backdrop"

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
   const content = (
      <div className={`modal ${className}`} style={style}>
         <header className={`modal__header ${headerClass}`}>
            <h2>{header}</h2>
         </header>
         <form onSubmit={onSubmit ? onSubmit : (event) => event.preventDefault()}>
            <div className={`modal__content ${contentClass}`}>{children}</div>
            <footer className={`modal__footer ${footerClass}`}>{footer}</footer>
         </form>
      </div>
   )

   return ReactDOM.createPortal(content, document.getElementById("modal-hook"))
}

export default function Modal({ show, onCancel, header, footer, children, onSubmit, contentClass, footerClass }) {
   return (
      <>
         {show && <Backdrop onClick={onCancel} />}
         <CSSTransition in={show} timeout={200} classNames="modal" mountOnEnter unmountOnExit>
            <ModalOverlay
               header={header}
               footer={footer}
               onSubmit={onSubmit}
               onCancel={onCancel}
               footerClass={footerClass}
               contentClass={contentClass}>
               {children}
            </ModalOverlay>
         </CSSTransition>
      </>
   )
}
