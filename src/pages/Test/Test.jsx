import React, { useState } from 'react'
import { MDBFile } from 'mdb-react-ui-kit'

const hostUrl = 'https://syntax-striker.onrender.com'

function ImageUpload() {
  const [imageUrl, setImageUrl] = useState(null)

  const handleImageUpload = async (event) => {
    const file = event.target.files[0]
    if (file) {
      const formData = new FormData()
      formData.append('file', file)


      try {
        const url = `${hostUrl}/menu/update-item-image`
        const response = await $.ajax({
          url: url,
          method: 'POST',
          processData: false, // Prevent jQuery from automatically transforming the data into a query string
          contentType: false, // Prevent jQuery from setting the content type
          data: formData
        })

        console.log('Success:', response)
        setImageUrl(response.url) // Assuming the server response contains the URL of the uploaded image
        alert('Image upload successful!')
      } catch (error) {
        console.error('Error:', error)
        alert('Image upload failed!')
      }
    }
  }

  return (
    <div>
      <MDBFile label='Image' id='customFile' onChange={handleImageUpload} />
      {imageUrl && <img src={imageUrl} alt='Uploaded' />}
    </div>
  )
}

export default ImageUpload
