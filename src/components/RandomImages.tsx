import Image from 'next/image'
import { useMemo } from 'react'


const imageUrls = [
  'https://img.xiumi.us/xmi/ua/38BxR/i/02a49d1d6b4567879c92ec3e400167b0-sz_6782.png?x-oss-process=style/xmwebp',
  'https://img.xiumi.us/xmi/ua/38BxR/i/02a49d1d6b4567879c92ec3e400167b0-sz_6782.png?x-oss-process=style/xmwebp',
  'https://img.xiumi.us/xmi/ua/38BxR/i/02a49d1d6b4567879c92ec3e400167b0-sz_6782.png?x-oss-process=style/xmwebp',
  'https://img.xiumi.us/xmi/ua/38BxR/i/d075cb47b60c7e26b1fdf3cd2aaae7c9-sz_881844.png?x-oss-process=style/xmwebp',
  'https://img.xiumi.us/xmi/ua/38BxR/i/d075cb47b60c7e26b1fdf3cd2aaae7c9-sz_881844.png?x-oss-process=style/xmwebp',
  'https://img.xiumi.us/xmi/ua/38BxR/i/d075cb47b60c7e26b1fdf3cd2aaae7c9-sz_881844.png?x-oss-process=style/xmwebp',
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

