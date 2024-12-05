import AudioPlayer from './AudioPlayer'
import ConfettiEffect from './ConfettiEffect'
import CursorImageEffect from './CursorImageEffect'
import RandomImages from './RandomImages'

const BirthdayCard = () => {
  return (
    <div className="relative w-full max-w-8xl aspect-video overflow-hidden">
      <ConfettiEffect />
      <CursorImageEffect />
      <RandomImages />
      {/* Placeholder for background image */}
      {/* <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">Add your background image here</span>
      </div> */}
      
      <div className="relative z-20 h-full flex flex-col items-center justify-center p-4">
        <h1 className="text-6xl font-bold text-center mb-8 birthday-text">
          Happy Birthday
        </h1>
        <AudioPlayer />
      </div>
    </div>
  )
}

export default BirthdayCard

