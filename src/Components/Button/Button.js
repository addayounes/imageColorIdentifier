import React from 'react'
import styled from 'styled-components'

const ActionButton = styled.div`
    width: 100%;
    max-height: 14%;
    padding: 1.125rem 0;
    border: 2px solid var(--main-clr);
    border-radius: 4px;
    flex-basis: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .15s ease-out;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 500;
    color: var(--main-clr);
    &:hover {
        background: var(--main-clr);
        color: white;
        transition: .15s ease-out
    }

`

const Button = ({handleGetColor, Success, doItAgain}) => {
    return (
        <ActionButton onClick={Success ? handleGetColor : doItAgain}>
            {
            Success ? "get colors" : "do it again"
            }
        </ActionButton>
    )
}

export default Button
