import { motion } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'

interface MusicToggleProps {
  isPlaying: boolean
  onToggle: (playing: boolean) => void
}

export default function MusicToggle({ isPlaying, onToggle }: MusicToggleProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      onClick={() => onToggle(!isPlaying)}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-wine-700 hover:bg-wine-800 text-cream shadow-lg flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-wine-700"
      title={isPlaying ? 'Mute music' : 'Play music'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isPlaying ? 0 : 180, opacity: isPlaying ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Volume2 className="w-6 h-6" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ rotate: isPlaying ? 180 : 0, opacity: isPlaying ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <VolumeX className="w-6 h-6" />
      </motion.div>
    </motion.button>
  )
}
