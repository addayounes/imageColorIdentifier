import React from 'react'
import ColorPreview from '../ColorPreview/ColorPreview'
import Button from '../Button/Button'
import styled from 'styled-components'

const RContainer = styled.div`
    flex-basis: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 2px solid var(--main-clr);
    background: var(--secondary-clr);
    max-height: 400px;
    marigin-left: 20px;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    padding: .4125rem;
`

const RightContainer = ({handleGetColor, Success, doItAgain, Colors, setCopy, Loading}) => {
    return (
        <RContainer>
            <ColorPreview
              Loading={Loading}
              setCopy={setCopy}
              Colors={Colors}
            />
            <Button
                Success={Success}
                doItAgain={doItAgain}
                handleGetColor={handleGetColor}
            />
        </RContainer>
    )
}

export default RightContainer
