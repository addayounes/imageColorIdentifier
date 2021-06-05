import React from 'react'
import styled from 'styled-components'

const ErrorMessage = styled.div`
    position: absolute;
    background: white;
    color: var(--main-clr);
    padding: .4rem 1rem;
    bottom: .5rem;
    left: .5rem;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(-100%);
    animation: slide .1s ease-out forwards;
    @keyframes slide {
        to {
            transform: translateX(0)
        }
    }
    .icon {
        font-size: 1.125rem;
        margin-right: .5rem
    }
    
    
`

const DisplayWindow = ({text, Icon}) => {
    return (
        <>
            <ErrorMessage>
                <Icon className="icon" /> 
                {text}
            </ErrorMessage>
        </>
    )
}

export default DisplayWindow
