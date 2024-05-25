// import React, { useState } from 'react'
// import { MDBFile } from 'mdb-react-ui-kit'

// const hostUrl = 'https://syntax-striker.onrender.com'

// function ImageUpload() {
//   const [imageUrl, setImageUrl] = useState(null)

//   const handleImageUpload = async (event) => {
//     const file = event.target.files[0]
//     if (file) {
//       const formData = new FormData()
//       formData.append('file', file)


//       try {
//         const url = `${hostUrl}/menu/update-item-image`
//         const response = await $.ajax({
//           url: url,
//           method: 'POST',
//           processData: false, // Prevent jQuery from automatically transforming the data into a query string
//           contentType: false, // Prevent jQuery from setting the content type
//           data: formData
//         })

//         console.log('Success:', response)
//         setImageUrl(response.url) // Assuming the server response contains the URL of the uploaded image
//         alert('Image upload successful!')
//       } catch (error) {
//         console.error('Error:', error)
//         alert('Image upload failed!')
//       }
//     }
//   }

//   return (
//     <div>
//       <MDBFile label='Image' id='customFile' onChange={handleImageUpload} />
//       {imageUrl && <img src={imageUrl} alt='Uploaded' />}
//     </div>
//   )
// }

// export default ImageUpload

import React, { useState } from 'react'
export default function Test() {

    const users = [
        {
            id: 1,
            name: 'Alice',
        },
        {
            id: 2,
            name: 'Bob',
        },
        {
            id: 3,
            name: 'Charlie',
        },
    ]

    const comments =[
        {
            id: 1,
            userId: 2,
            content: "Can you elaborate on that?",
        },
        {
            id: 2,
            userId: 1,
            content: "I'm not sure I understand.",
        },
        {
            id: 3,
            userId: 3,
            content: "Can you explain that further?",
        },
        
    ]

    function getComment() {
        console.log("getComment");
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(comments)
            }, 3000)
        })
    }

    function getUser(userIds) {
        console.log("getUser");
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const result = users.filter((user) => {
                    return userIds.includes(user.id)
                })
                resolve(result)
            }, 1000)
        })
    
    }

    getComment().then((comments) => {
        const userId = comments.map((comment) => {
            return comment.userId;
        })
        console.log(userId);
        return getUser(userId).then((users) => {
            console.log(users)
            return users;
        })
    })

    

    return <div>Test</div>
}