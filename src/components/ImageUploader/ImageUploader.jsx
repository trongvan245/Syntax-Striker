import React, { useState } from 'react'
import $ from 'jquery'

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [uploadProgress, setUploadProgress] = useState(0)

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0])
  }

  const handleUpload = () => {
    if (!selectedFile) {
      alert('Please select a file first.')
      return
    }

    const formData = new FormData()
    formData.append('image', selectedFile)

    $.ajax({
      url: 'YOUR_SERVER_ENDPOINT',
      type: 'POST',
      data: formData,
      contentType: false,
      processData: false,
      xhr: function () {
        const xhr = new window.XMLHttpRequest()
        xhr.upload.addEventListener(
          'progress',
          function (event) {
            if (event.lengthComputable) {
              const percentCompleted = Math.round((event.loaded * 100) / event.total)
              setUploadProgress(percentCompleted)
            }
          },
          false
        )
        return xhr
      },
      success: function (response) {
        console.log('File uploaded successfully', response)
      },
      error: function (xhr, status, error) {
        console.error('Error uploading file', xhr.responseText)
      }
    })
  }

  return (
    <div>
      <input type='file' onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {uploadProgress > 0 && <div>Upload Progress: {uploadProgress}%</div>}
    </div>
  )
}

export default ImageUpload
