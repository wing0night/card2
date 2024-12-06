import Image from 'next/image'

interface SpinningDiscProps {
  isPlaying: boolean
}

// src/components/SpinningDisc.tsx
const SpinningDisc: React.FC<SpinningDiscProps> = ({ isPlaying }) => {
  return (
    <div className={`relative w-64 h-64 rounded-full overflow-hidden ${isPlaying ? 'animate-spin' : ''}`}> {/* Added 'animate-spin' for rotation */}
      <Image
        src="https://img.xiumi.us/xmi/ua/38BxR/i/beb15c8edfbf11879ef866a65a0e7dbb-sz_1494797.png?x-oss-process=style/xmwebp"
        alt="Vinyl record"
        layout="fill"
        objectFit="cover"
        className={`${isPlaying ? 'rotate' : ''}`} // Added rotation class based on isPlaying
      />
    </div>
  )
}

export default SpinningDisc

