import { useState, useEffect } from 'react'
import { weddingData } from './data/wedding'
import Hero from './components/Hero'
import CoupleSection from './components/CoupleSection'
import WeddingDetails from './components/WeddingDetails'
import Countdown from './components/Countdown'
import Events from './components/Events'
import Story from './components/Story'
import Gallery from './components/Gallery'
import Venue from './components/Venue'
import RSVP from './components/RSVP'
import Footer from './components/Footer'
import MusicToggle from './components/MusicToggle'

export default function App() {
  const [showInvitation, setShowInvitation] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audio = document.getElementById('bgm') as HTMLAudioElement
    if (audio) {
      if (isPlaying) {
        audio.play().catch(() => {
          console.log('Autoplay prevented')
        })
      } else {
        audio.pause()
      }
    }
  }, [isPlaying])

  return (
    <div className="bg-white">
      <audio id="bgm" loop src="data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA==" />

      <MusicToggle isPlaying={isPlaying} onToggle={setIsPlaying} />

      {!showInvitation && <Hero onOpen={() => setShowInvitation(true)} />}

      {showInvitation && (
        <>
          <CoupleSection couple={weddingData.couple} />
          <WeddingDetails data={weddingData} />
          <Countdown targetDate={weddingData.weddingDate} />
          <Events events={weddingData.events} />
          {weddingData.story && <Story timeline={weddingData.story} />}
          {weddingData.gallery && weddingData.gallery.length > 0 && <Gallery images={weddingData.gallery} />}
          <Venue venue={weddingData.venue} />
          <RSVP />
          <Footer couple={weddingData.couple} />
        </>
      )}
    </div>
  )
}
