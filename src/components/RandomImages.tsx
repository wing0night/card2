import Image from 'next/image'
import { useMemo } from 'react'


const imageUrls = [
  'https://raw.githubusercontent.com/wing0night/card2/refs/heads/main/public/images/cake.png',
  'https://raw.githubusercontent.com/wing0night/card2/refs/heads/main/public/images/cake.png',
  'https://raw.githubusercontent.com/wing0night/card2/refs/heads/main/public/images/cake.png',
  'https://raw.githubusercontent.com/wing0night/card2/refs/heads/main/public/images/gift.png',
  'https://raw.githubusercontent.com/wing0night/card2/refs/heads/main/public/images/gift.png',
  'https://raw.githubusercontent.com/wing0night/card2/refs/heads/main/public/images/cake.png',
]

const RandomImages = () => {
  const randomImages = useMemo(() => {
    return Array.from({ length: 6 }, () => ({
      src: imageUrls[Math.floor(Math.random() * imageUrls.length)],
      position: {
        top: `${Math.random() * 80}%`,
        left: `${Math.random() * 80}%`,
      },
      rotation: `rotate(${Math.random() * 360}deg)`,
    }))
  }, [])

  return (
    <>
      {randomImages.map((image, index) => (
        <div
          key={index}
          className="absolute z-10"
          style={{
            top: image.position.top,
            left: image.position.left,
            transform: image.rotation,
          }}
        >
          <Image
            src={image.src}
            alt="Birthday decoration"
            width={80}
            height={80}
            className="rounded-full shadow-lg"
          />
        </div>
      ))}
    </>
  )
}

export default RandomImages

