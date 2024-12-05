'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'


const CursorImageEffect = () => {
  const [images, setImages] = useState<{ id: number; x: number; y: number }[]>([])

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const newImage = {
        id: Date.now(),
        x: event.clientX,
        y: event.clientY
      }
      setImages(prevImages => [...prevImages, newImage])

      // Remove the image after 1 second
      setTimeout(() => {
        setImages(prevImages => prevImages.filter(img => img.id !== newImage.id))
      }, 200)
    }

    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <>
      {images.map(image => (
        <div
          key={image.id}
          style={{
            position: 'fixed',
            left: image.x,
            top: image.y,
            transform: 'translate(-50%, -50%)',
            zIndex: 9999,
            pointerEvents: 'none'
          }}
        >
          <Image
            src="/images/537.png"
            alt="Cute Rabbit"
            width={50}
            height={50}
            className="select-none"
          />
        </div>
      ))}
    </>
  )
}

export default CursorImageEffect

