import { useState } from "react"
import styled from "styled-components"
import ImageInput from './Components/ImageInput/ImageInput'
import RightContainer from "./Components/RightContainer/RightContainer"
import Clarifai from "clarifai"

const Container = styled.div`
  display: flex;
  padding: .4125rem;
  border: 2px solid var(--main-clr);
  border-radius: 4px;
  height: min(400px, 40%);
  @media only screen and (max-width: 768px) {
    flex-direction: column
  }
`

const app = new Clarifai.App({
  apiKey: process.env.REACT_APP_API_KEY
 })

function App() {
  const [imageLink, setImageLink] = useState('')
  const [Colors, setColors] = useState([])
  const [Success, setSuccess] = useState(true)
  const [Error, setError] = useState(false)
  const [Copy, setCopy] = useState(false)
  const [Loading, setLoading] = useState(false)

  const handleGetColor = () => {
    setLoading(true)
    app.models.predict(
      process.env.REACT_APP_COLOR_MODEL,
      imageLink)
      .then(response => {
        setColors(response.rawData.outputs[0].data.colors)
        setSuccess(false)
        setError(false)
        setLoading(false)
      })
      .catch(error => {
        setError(true)
        setSuccess(true)
        setLoading(false)
        setTimeout(
          function() {
              setError(false)
          }
      , 1500)
      })
  }
  const doItAgain = () => {
    setImageLink("")
    setColors([])
    setSuccess(true)
    setError(false)
  }
  
  return (
    <Container id="container">
      <ImageInput
        Copy={Copy}
        Error={Error}
        Success={Success}
        imageLink={imageLink}
        setImageLink={setImageLink}
      />
      <RightContainer 
        Loading={Loading}
        setCopy={setCopy}
        Success={Success} 
        handleGetColor={handleGetColor}
        doItAgain={doItAgain}
        Colors={Colors}
      />
    </Container>
  );
}


export default App;
