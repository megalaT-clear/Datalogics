import { Button, TextField } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <div>
      <div>Elevate Your Enterprise Today.<br />
        Contact Us Now To Learn More<br />
        About How Our Apple Device Lifecycle Management Service can Transform Your<br />
        Bussiness<br />
        Togther,Let's Shape A Brighter, More Secure Future For Your Enterprise.
      </div>
      <div className='aboutFooter'>
        <img src='./img/woman.jpeg' />
        <div className='inputs'>
          <TextField  className='input'></TextField>
          <TextField  className='input'></TextField>
          <TextField className='inputEmail'></TextField>
          <TextField className='inputMbl'></TextField>
          <TextField  className='input'></TextField>
          <TextField   className='input'></TextField>
          <Button className='input'
          variant='contained'   >Submit</Button>
        </div>
      </div>
    </div>
  )
}

export default About