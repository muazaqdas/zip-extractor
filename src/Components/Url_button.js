import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as DiIcons from 'react-icons/di'
import  '../assets/style/myStyles.css'
import { Button } from 'bootstrap'

const UrlButton = (props) => {

  const alertBox = () => {
    alert('not yet implement the function')
  }
  return (
    <>
      <div className="url_button">
        <Button startIcon={<DiIcons.DiGoogleDrive />} onClick={alertBox}>
          <Button className={props.styles}>
            from Google Drive
          </Button>
        </Button>
        <Button startIcon={<AiIcons.AiOutlineDropbox />} onClick={alertBox}>
          <Button className={props.styles}>
            from Dropbox
          </Button>
        </Button>
        <Button startIcon={<AiIcons.AiOutlineLink />} onClick={alertBox}>
          <Button>url</Button>
        </Button>
      </div>
      {/* <ul ref={props.title} className='empty'></ul> */}
    </>
  )
}
export default UrlButton
