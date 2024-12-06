import AudioPlayer from './AudioPlayer'
import ConfettiEffect from './ConfettiEffect'
import CursorImageEffect from './CursorImageEffect'
import RandomImages from './RandomImages'

// birthday_card/src/components/BirthdayCard.tsx
const BirthdayCard = () => {
  return (
    <div className="card relative w-full overflow-hidden">
      <ConfettiEffect />
      <CursorImageEffect />
      <RandomImages />
      <div className="relative z-20 flex flex-col items-center justify-center p-4 h-full">
        <h1 className="text-6xl font-bold text-center mb-8 birthday-text">
          Happy Birthday
        </h1>
        <AudioPlayer />
      </div>
    </div>
  );
};


export default BirthdayCard

