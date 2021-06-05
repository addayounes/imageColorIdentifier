import styled from 'styled-components'

export const Wrapper = styled.div`
    background: var(--main-clr);
    background-image: url(${props => props.imageLink});
    background-repeat: no-repeat;
    background-size: cover;
    flex-basis: 70%;
    width: 100%;
    min-height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    border: 2px solid var(--main-clr);
    border-right: none;
    position: relative;
    overflow: hidden;
`

export const InputField = styled.input`
    padding: .5rem 1rem;
    border: none;
    border-radius: 2px;
    opacity: .8;
    width: min(350px, 75%);
    &:focus,
    &:hover {outline: none}

`