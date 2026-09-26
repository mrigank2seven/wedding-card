import { motion } from 'framer-motion'

interface HeroProps {
  onOpen: () => void
}

export default function Hero({ onOpen }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-wine-900 via-wine-800 to-wine-900 overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gold rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-wine-700 rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-gold text-xl md:text-2xl tracking-widest mb-8 font-sans font-light">
            Together Forever
          </h2>
        </motion.div>

        {/* Wax Seal Circle */}
        <motion.button
          onClick={onOpen}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="mx-auto mb-12 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-4 focus:ring-offset-wine-900 rounded-full transition-all"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-64 h-64 md:w-80 md:h-80 bg-cream rounded-full shadow-2xl flex items-center justify-center relative"
          >
            <div className="absolute inset-4 border-2 border-gold rounded-full"></div>
            <div className="text-center">
              <p className="script-font text-6xl md:text-7xl text-wine-900 leading-none">
                R&P
              </p>
              <p className="text-gold text-sm tracking-widest mt-4 font-sans">
                Wedding Invitation
              </p>
            </div>
          </motion.div>
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-cream"
        >
          <p className="script-font text-4xl md:text-5xl mb-4">
            Tap to Reveal
          </p>
          <p className="text-gold text-sm tracking-widest uppercase">
            The Celebration Awaits
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gold text-sm"
      >
        <p className="text-xs uppercase tracking-widest">Scroll to continue</p>
      </motion.div>
    </section>
  )
}
