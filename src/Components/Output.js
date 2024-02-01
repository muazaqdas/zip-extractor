import { Button} from 'bootstrap'
import React from 'react'
import { entries, download } from './Content'
import { model } from './Zip'
import * as BiIcons from 'react-icons/bi'
import  '../assets/style/myStyles.css'

const Output = (props) => {

  const downloadFile = async (event) => {
    const target = event.target

    if (
      target.dataset.entryIndex !== undefined &&
      !target.download &&
      !target.getAttribute('href')
    ) {
      event.preventDefault()

      try {
        await download(
          entries[Number(target.dataset.entryIndex)],
          target.parentElement,
          target
        )
      } catch (e) {
        alert(e)
      }
    }
  }

  const downloadAll = async () => {
    for (let i = 0; i < entries.length; i++) {
      let entry = entries[i]
      let anchor = document.createElement('a')
      model.getURL(entry).then((blobURL) => {
        anchor.setAttribute('href', blobURL)
        anchor.setAttribute('download', entry.filename)
        if (entry.directory === true) {
          anchor.removeAttribute('href')
          anchor.removeAttribute('download')
        }
        anchor.click()
      })
    }
  }

  return (
    <div
      onClick={downloadFile}
      style={{ width: '100%', alignItem: 'flex-start', paddingLeft: '28px' }}
    >
        <h5 style={{marginBottom: '10px',textTransform: 'bolder',fontWeight: '700',}}>Archieve successfully extracted</h5>
      <div>
        <h6 style={{ marginBottom: '18px', fontWeight: '500' }}>Click on the file to download</h6>
        <Button className="btn btn-primary" startIcon={<BiIcons.BiDownload />} onClick={downloadAll}>download all</Button>
      </div>
      <ul ref={props.refFile} className=" ulStyle"></ul>
      <Button href='/' style={{ background: 'grey', color: '#ffffff' }} startIcon={<BiIcons.BiArrowBack />}>
        <p style={{textTransform: 'none', textDecoration: 'none', color: '#ffffff',}}>Extract another archieve</p>
      </Button>
    </div>
  )
}

export default Output
