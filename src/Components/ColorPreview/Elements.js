import styled from "styled-components"

export const ColorsContainer = styled.div`
    flex-basis: 85%;
    min-height:85%;
    overflow-y: auto;
    position: relative;
    .progress {
        color: var(--main-clr);
        display: ${props => props.displayed ? "block" : "none"};
        position: absolute;
        left: 43.5%;
        top: 47.5%;
    }
`
export const Color = styled.div`
    display: flex;
    justify-content: space-between;
    border-radius: 4px;
    padding: 0 1rem;
    margin-bottom: .4125rem;
    background: ${props => props.bgColor};
    cursor: pointer;
    &:hover {filter: brightness(1.15)}
    .hex {text-transform: uppercase}
`