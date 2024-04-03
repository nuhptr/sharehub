import { styled } from "styled-components"

const Div = styled.div`
    margin: 0;
    box-shadow: 0 2px 100px rgba(0, 0, 0, 0.12);
    border-radius: 10px;
    overflow: hidden;
`

export default function Card({ className, style, children }) {
    return (
        <Div className={className} style={style}>
            {children}
        </Div>
    )
}
