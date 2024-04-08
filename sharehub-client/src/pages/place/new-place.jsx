import { useCallback, useReducer } from "react"
import { styled } from "styled-components"

import { Input, Button } from "../../components/atomic"
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../utils/validators"

const FormStyled = styled.form`
    list-style: none;
    margin: 0 auto;
    padding: 1rem;
    width: 90%;
    max-width: 40rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 6px;
    background: white;
`

function formReducer(state, action) {
    switch (action.type) {
        case "INPUT_CHANGE":
            let formIsValid = true
            for (const inputId in state.inputs) {
                if (!state.inputs[inputId]) {
                    continue
                }
                if (inputId === action.inputId) {
                    formIsValid = formIsValid && action.isValid
                } else {
                    formIsValid = formIsValid && state.inputs[inputId].isValid
                }
            }

            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: { value: action.value, isValid: action.isValid },
                },
                isValid: formIsValid,
            }
        default:
            return state
    }
}

export default function NewPlace() {
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: {
            title: { value: "", isValid: false },
            description: { value: "", isValid: false },
        },
        isValid: false,
    })

    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({
            type: "INPUT_CHANGE",
            value: value,
            isValid: isValid,
            inputId: id,
        })
    }, [])

    function placeSubmitHandler(event) {
        event.preventDefault()
        console.log(formState.inputs)
    }

    return (
        <FormStyled onSubmit={placeSubmitHandler}>
            <Input
                id="title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid title."
                onInput={inputHandler}
            />
            <Input
                id="description"
                element="textarea"
                label="Description"
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid description (at least 5 characters)."
                onInput={inputHandler}
            />
            <Button type="submit" isDisabled={!formState.isValid}></Button>
        </FormStyled>
    )
}
