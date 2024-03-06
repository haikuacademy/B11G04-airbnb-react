function Gallery({ house }) {
  let { images } = house

  console.log(images)

  let firstImage = images.shift()
  console.log(firstImage)

  console.log(images)

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
          />
        ))}
      </div>
    </div>
  )
}
export default Gallery
