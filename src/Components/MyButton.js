import { Button } from 'bootstrap'
import React from 'react'


const MyButton = (props) => {
  return (
    <>
    <Button
        class="btn btn-primary" 
        style={{ width: '250px', paddingTop: '15px', paddingBottom: '20px' }}
        ref={props.fileInputButtons}
        onClick={props.onHandleButtonOnClick}>
        <div style={{ textTransform: 'lowercase' }}>
          <h5 style={{ margin: '6px auto', fontWeight: 'bold', textTransform:"none" }}>
            Choose file
          </h5>
          from your computer
        </div>
      </Button>
      <input
        type='file'
        ref={props.fileInput}
        onChange={props.onHandleOnChange}
        hidden
      />
    </>
  )
}

export default MyButton;
