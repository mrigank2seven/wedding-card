import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface HeroProps {
  onOpen: () => void
}

export default function Hero({ onOpen }: HeroProps) {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-wine-950 via-wine-900 to-wine-800 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -left-40 w-80 h-80 bg-gold rounded-full mix-blend-overlay opacity-10 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-wine-700 rounded-full mix-blend-overlay opacity-10 blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 max-w-2xl w-full">
        {/* Top text */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 sm:mb-12"
        >
          <p className="text-gold text-sm sm:text-base tracking-widest uppercase font-sans font-light">
            You Are Invited
          </p>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <h1 className="text-cream text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 leading-tight">
            Shri Amit Gupta
          </h1>
          <p className="text-gold text-lg sm:text-xl tracking-wider">weds</p>
        </motion.div>

        {/* Wax Seal Button */}
        <motion.button
          onClick={onOpen}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="group mx-auto mb-12 sm:mb-16 focus:outline-none focus:ring-4 focus:ring-gold focus:ring-offset-4 focus:ring-offset-wine-900 rounded-full transition-all"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72"
          >
            {/* Wax seal with 3D effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream to-yellow-100 rounded-full shadow-2xl flex items-center justify-center overflow-hidden">
              {/* Border decoration */}
              <div className="absolute inset-3 sm:inset-4 border-3 border-gold rounded-full opacity-70"></div>
              <div className="absolute inset-6 sm:inset-8 border border-gold rounded-full opacity-40"></div>

              {/* Center content */}
              <div className="text-center z-10">
                <p className="script-font text-6xl sm:text-7xl md:text-8xl text-wine-900 leading-none font-bold">
                  A&R
                </p>
                <p className="text-gold text-xs sm:text-sm tracking-widest mt-2 sm:mt-4 font-sans font-semibold">
                  WEDDING
                </p>
              </div>

              {/* Shine effect */}
              <motion.div
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent rounded-full"
              />
            </div>

            {/* Pulsing ring */}
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.2, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 border-2 border-gold rounded-full"
            />
          </motion.div>
        </motion.button>

        {/* Call to action text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mb-12"
        >
          <p className="script-font text-3xl sm:text-4xl md:text-5xl text-cream mb-3 font-light">
            Tap to Reveal
          </p>
          <p className="text-gold text-xs sm:text-sm tracking-widest uppercase font-semibold">
            Your Invitation Awaits
          </p>
        </motion.div>

        {/* Subtle CTA button */}
        <motion.button
          onClick={onOpen}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 sm:px-8 py-3 border-2 border-gold text-gold hover:bg-gold hover:text-wine-900 transition-all font-sans font-semibold text-sm uppercase tracking-wider rounded-full mb-8"
        >
          Open Invitation
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gold"
      >
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8" />
      </motion.div>
    </section>
  )
}
