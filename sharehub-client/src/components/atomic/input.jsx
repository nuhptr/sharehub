import { useReducer, useEffect } from "react"
import { styled, css } from "styled-components"

import { validate } from "../../utils/validators"

const DivFormControl = styled.div`
    margin: 1rem 0;

    & label {
        font-weight: bold;
        margin-bottom: 0.5rem;
    }

    & label,
    input,
    textarea {
        display: block;
    }

    & input,
    textarea {
        width: 100%;
        font: inherit;
        border: 1px solid #ccc;
        background: #f8f8f8;
        padding: 0.15rem 0.25rem;

        &:focus {
            outline: none;
            background: #ebebeb;
            border-color: #510077;
        }
    }

    ${({ $isInvalid }) =>
        $isInvalid &&
        css`
            label,
            p {
                color: red;
            }

            input,
            textarea {
                border-color: red;
                background: #ffd1d1;
            }
        `}
`

function inputReducer(state, action) {
    switch (action.type) {
        case "CHANGE":
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators),
            }
        case "TOUCH":
            return {
                ...state,
                isTouched: true,
            }
        default:
            return state
    }
}

export default function Input({
    id,
    label,
    type,
    placeholder,
    element,
    rows,
    errorText,
    validators,
    onInput,
}) {
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: "",
        isValid: false,
        isTouched: false,
    })

    const { value, isValid } = inputState

    useEffect(() => {
        onInput(id, value, isValid)
    }, [id, onInput, value, isValid])

    function changeHandler(event) {
        dispatch({ type: "CHANGE", val: event.target.value, validators: validators })
    }

    function touchHandler() {
        dispatch({ type: "TOUCH" })
    }

    const customElement =
        element === "input" ? (
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                onChange={changeHandler}
                onBlur={touchHandler}
                value={inputState.value}
            />
        ) : (
            <textarea
                id={id}
                rows={rows || 3}
                onChange={changeHandler}
                onBlur={touchHandler}
                value={inputState.value}
            />
        )

    return (
        <DivFormControl $isInvalid={!inputState.isValid && inputState.isTouched}>
            <label htmlFor={id}>{label}</label>
            {customElement}
            {!inputState.isValid && inputState.isTouched && <p>{errorText}</p>}
        </DivFormControl>
    )
}
