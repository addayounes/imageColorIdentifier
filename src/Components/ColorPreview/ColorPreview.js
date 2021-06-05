import React from 'react'
import { ColorsContainer, Color } from './Elements'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import CircularProgress from '@material-ui/core/CircularProgress';



const ColorPreview = ({Colors, setCopy, Loading}) => {

    const handleCopy = (Text) => {
        const elem = document.createElement('textarea')
        elem.value = Text
        document.body.appendChild(elem);
        elem.select();
        elem.setSelectionRange(0, 99999)
        document.execCommand("copy");
        document.body.removeChild(elem);
        setCopy(true)
        setTimeout(
            function() {
                setCopy(false)
            }
        , 1500)
    }

    return (
        <>
            <ColorsContainer displayed={Loading}>
                <CircularProgress className="progress" />
                <TransitionGroup>
                {
                    Colors.map((color, index) => {
                        return(
                            <CSSTransition classNames="color" key={index} timeout={300}>
                                <Color
                                  onClick={() => handleCopy(color.raw_hex)}
                                  bgColor={color.raw_hex}
                                  >
                                    <p className="hex">{color.raw_hex}</p>
                                    <p>{color.w3c.name}</p>
                                </Color>
                            </CSSTransition>
                        )
                    })
                }
                </TransitionGroup>
            </ColorsContainer>
        </>
    )
}

export default ColorPreview
