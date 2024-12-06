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
            src="https://img.xiumi.us/xmi/ua/38BxR/i/a0c759089d5b2c1c6d1ddf3df9d7e523-sz_55905.png?x-oss-process=style/xmwebp"
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

