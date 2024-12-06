'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react'
import SpinningDisc from './SpinningDisc'

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.addEventListener('timeupdate', handleTimeUpdate)
      audio.addEventListener('loadedmetadata', handleLoadedMetadata)
    }
    return () => {
      if (audio) {
        audio.removeEventListener('timeupdate', handleTimeUpdate)
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
      }
    }
  }, [])

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="relative w-full max-w-md flex flex-col items-center">
      <SpinningDisc isPlaying={isPlaying} />
      <div className="relative z-10 w-full bg-gray-800 text-white p-4 rounded-lg mt-4">
        <audio
          ref={audioRef}
          src="https://github.com/wing0night/card2/raw/refs/heads/main/public/mp3/birthday.MP3" // 更新为您的 GitHub Pages URL
          onEnded={() => setIsPlaying(false)}
        />
        <div className="flex items-center justify-between mb-4">
          <button className="p-2" onClick={() => audioRef.current && (audioRef.current.currentTime -= 10)}>
            <SkipBack size={24} />
          </button>
          <button className="p-2" onClick={togglePlay}>
            {isPlaying ? <Pause size={32} /> : <Play size={32} />}
          </button>
          <button className="p-2" onClick={() => audioRef.current && (audioRef.current.currentTime += 10)}>
            <SkipForward size={24} />
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <div className="text-sm">{formatTime(currentTime)}</div>
          <div className="flex-grow bg-gray-600 h-1 rounded-full">
            <div
              className="bg-white h-full rounded-full"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            ></div>
          </div>
          <div className="text-sm">{formatTime(duration)}</div>
        </div>
      </div>
    </div>
  )
}

export default AudioPlayer

