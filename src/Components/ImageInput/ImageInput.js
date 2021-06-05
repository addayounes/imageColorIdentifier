import React from 'react'
import DisplayWindow from '../DisplayWindow/DisplayWindow'
import { Wrapper, InputField } from './Elements'
import { AiFillWarning, AiOutlineCheck } from "react-icons/ai"

const ImageInput = ({imageLink, setImageLink, Success, Error, Copy}) => {
  
    return (
        <Wrapper imageLink={imageLink} Success={Success}>
            {
                Success &&
                    <InputField
                      onChange={e => setImageLink(e.target.value)}
                      value={imageLink}
                      placeholder="Enter Image URL"
                      type="text"
                    />
             }
             {
                Error && 
                    <DisplayWindow
                      text="Please enter a valid image URL"
                      Icon={AiFillWarning}
                    />
             }
            {
                Copy &&
                      <DisplayWindow
                        text="Copied to Clipboard"
                        Icon={AiOutlineCheck}
                      />
            }
        </Wrapper>
    )
}

export default ImageInput
