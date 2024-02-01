
import React, { useState, useRef } from 'react'
import {model}  from './Zip'
import MyButton from './MyButton'
import Output from './Output'
import '../assets/style/myStyles.css'

export let entries

export async function download(entry, li, a) {
  model.getURL(entry).then(
    (value) => {
      const clickEvent = new MouseEvent('click')
      a.href = value
      a.download = entry.filename
      if (entry.directory === true) {
        a.removeAttribute('href')
        a.removeAttribute('download')
      }
      a.dispatchEvent(clickEvent)
    },
    (error) => {
      console.log(error)
    }
  )
}

const Content = () => {
    
  const [hide, setHide] = useState(true)
  const fileInput = useRef(null)
  const fileInputButton = useRef(false)
  let fileList = useRef(false)
  let selectedFile

  /*
   * Dispatches an Event at the specified EventTarget, (synchronously) invoking the affected EventListeners
   * in the appropriate order
   */

  /*
   * The Blob object represents a blob, which is a file-like object of immutable, raw data; they can be read as
   * text or binary data, or converted into a ReadableStream so its methods can be used for processing the data.
   */

  const handleButtonOnclick = () => {
    fileInput.current.dispatchEvent(new MouseEvent('click'))
  }

  const selectFile = async () => {
    try {
      selectedFile = fileInput.current.files[0]
      await loadFile()
    } catch (error) {
      alert(error)
    }
  }

  const loadFile = async () => {
    entries = await model.getEntries(selectedFile)
    setHide(false)
    refreshList()
  }

  function refreshList() {
    const newFileList = fileList.current.cloneNode()

    // showing the filename of the zip
    const span = document.createElement('li')
    span.style.fontSize = '14px'
    span.style.fontWeight = '500'
    span.innerText = selectedFile.name
    newFileList.appendChild(span)

    entries.forEach((entry, entryIndex) => {
      const li = document.createElement('li')
      const anchor = document.createElement('a')
      anchor.style.color = '#000000'
      anchor.style.textDecoration = 'none'

      anchor.dataset.entryIndex = entryIndex
      anchor.textContent = anchor.title = entry.filename

      if (!entry.directory) {
        anchor.href = ''
      }
      if (entry.directory) {
        li.style.fontSize = '14px'
        li.style.fontWeight = '500'
      }
      li.appendChild(anchor)
      newFileList.appendChild(li)
    })

    fileList.current.replaceWith(newFileList)
    fileList = newFileList
  }

  return (
    <>
      <div className='content'>
        {hide === true ? (
          <MyButton
            fileInputButtons={fileInputButton}
            onHandleButtonOnClick={handleButtonOnclick}
            onHandleOnChange={selectFile}
            fileInput={fileInput}
          />
        ) : (
          <Output refFile={fileList}/>
        )}
      </div>
    </>
  )
}

export default Content
