import { useState } from 'react'

function Gallery({ house }) {
  let { images } = house
  const [selectedImage, setSelectedImage] = useState(images[0])
  let firstImage = selectedImage
  return (
    <div className="grid grid-cols-2 gap-5 p-2">
      <img src={firstImage} alt="House 1 image 1" className="rounded h-full" />
      <div className="grid grid-cols-3 gap-2">
        {images.map((image, id) => (
          <img
            src={image}
            key={id}
            alt={image[id]}
            className="rounded h-full"
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
    </div>
  )
}

export default Gallery
