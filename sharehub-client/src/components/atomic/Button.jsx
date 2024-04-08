import { Link } from "react-router-dom"
import { styled, css } from "styled-components"

const SharedStyles = css`
    font: inherit;
    padding: 0.5rem 1.5rem;
    background: #f8df00;
    border-radius: 0.8rem;
    color: black;
    cursor: pointer;
    margin-right: 1rem;
    text-decoration: none;
    display: inline-block;

    ${({ $fontSize }) => {
        switch ($fontSize) {
            case "small":
                return css`
                    font-size: 0.8rem;
                `
            case "big":
                return css`
                    font-size: 1.2rem;
                `
            default:
                return css`
                    font-size: 1rem;
                `
        }
    }}

    ${({ $type }) => {
        switch ($type) {
            case "inverse":
                return css`
                    background: transparent;
                    color: #ff0055;
                    border: 1px solid #ff0055;

                    &:hover,
                    &:active {
                        background: #ff0055;
                        color: white;
                        border: 1px solid black;
                    }
                `
            case "danger":
                return css`
                    background: #f34343;
                    color: white;
                    border: none;

                    &:hover,
                    &:active {
                        background: #830000;
                    }
                `
            default:
                return css``
        }
    }}

    &:focus {
        outline: none;
    }

    &:hover,
    &:active {
        background: black;
        color: white;
    }

    &:disabled,
    &:hover:disabled,
    &:active:disabled {
        background: #ccc;
        color: #979797;
        border-color: #ccc;
        cursor: not-allowed;
    }
`

const ButtonStyled = styled.button`
    ${SharedStyles}
`

const AnchorStyled = styled.a`
    ${SharedStyles}
`

const LinkStyled = styled(Link)`
    ${SharedStyles}
`

export default function Button({
    exact,
    to,
    href,
    size = "default",
    inverse,
    danger,
    children,
    onClick,
    isDisabled,
    type,
}) {
    if (href) {
        return (
            <AnchorStyled
                href={href}
                $fontSize={size}
                $type={(inverse && "inverse") || (danger && "danger") || "default"}
                onClick={onClick}
                disabled={isDisabled}>
                {children}
            </AnchorStyled>
        )
    }

    if (to) {
        return (
            <LinkStyled
                to={to}
                exact={exact}
                $fontSize={size}
                $type={(inverse && "inverse") || (danger && "danger") || "default"}
                onClick={onClick}
                disabled={isDisabled}>
                {children}
            </LinkStyled>
        )
    }

    return (
        <ButtonStyled
            $fontSize={size}
            $type={(inverse && "inverse") || (danger && "danger") || "default"}
            onClick={onClick}
            disabled={isDisabled}
            type={type}>
            {children}
        </ButtonStyled>
    )
}
