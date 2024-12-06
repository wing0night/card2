import Image from 'next/image'

interface SpinningDiscProps {
  isPlaying: boolean
}

// src/components/SpinningDisc.tsx
const SpinningDisc: React.FC<SpinningDiscProps> = ({ isPlaying }) => {
  return (
    <div className={`relative w-64 h-64 rounded-full overflow-hidden ${isPlaying ? 'animate-spin' : ''}`}> {/* Added 'animate-spin' for rotation */}
      <Image
        src="https://raw.githubusercontent.com/wing0night/card2/refs/heads/main/public/images/circle.png"
        alt="Vinyl record"
        layout="fill"
        objectFit="cover"
        className={`${isPlaying ? 'rotate' : ''}`} // Added rotation class based on isPlaying
      />
    </div>
  )
}

export default SpinningDisc

