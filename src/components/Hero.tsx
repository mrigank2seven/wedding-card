import { motion } from 'framer-motion'

interface HeroProps {
  onOpen: () => void
}

export default function Hero({ onOpen }: HeroProps) {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Burgundy fabric background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #5a3a2e 0%, #6b4423 25%, #704436 50%, #6b4423 75%, #5a3a2e 100%)',
        }}
      >
        {/* Fabric texture overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 w-full h-full">
        {/* "Tap to Reveal" text */}
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="script-font text-4xl sm:text-5xl md:text-6xl text-amber-50 mb-16 sm:mb-20 md:mb-24 font-light tracking-wide"
          style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.3), 0 0 20px rgba(255,255,255,0.1)',
            fontStyle: 'italic'
          }}
        >
          Tap to Reveal
        </motion.p>

        {/* Wax Seal */}
        <motion.button
          onClick={onOpen}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="group relative mb-20 sm:mb-24 md:mb-32 focus:outline-none focus:ring-0 transition-all cursor-pointer"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, type: 'spring', stiffness: 100 }}
            className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80"
          >
            {/* Shadow for depth */}
            <div className="absolute inset-0 rounded-full" style={{
              boxShadow: '0 30px 60px rgba(0,0,0,0.6), 0 0 30px rgba(0,0,0,0.4), inset -2px -2px 5px rgba(0,0,0,0.2), inset 2px 2px 5px rgba(255,255,255,0.3)'
            }} />

            {/* Main seal body */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-50 via-amber-100 to-yellow-50 overflow-hidden flex items-center justify-center">
              {/* Highlight */}
              <div className="absolute top-4 left-6 w-20 h-20 rounded-full bg-white opacity-30 blur-xl" />
              
              {/* SVG decorations */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" style={{ filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.1))' }}>
                <circle cx="100" cy="100" r="95" fill="none" stroke="#c4a57b" strokeWidth="1" opacity="0.6" />
                <g opacity="0.5">
                  <path d="M 60 30 Q 70 25, 80 30 Q 90 35, 100 32 Q 110 35, 120 30 Q 130 25, 140 30" fill="none" stroke="#a0826d" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M 60 170 Q 70 175, 80 170 Q 90 165, 100 168 Q 110 165, 120 170 Q 130 175, 140 170" fill="none" stroke="#a0826d" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="45" cy="45" r="8" fill="none" stroke="#a0826d" strokeWidth="1" />
                  <circle cx="155" cy="45" r="8" fill="none" stroke="#a0826d" strokeWidth="1" />
                  <circle cx="45" cy="155" r="8" fill="none" stroke="#a0826d" strokeWidth="1" />
                  <circle cx="155" cy="155" r="8" fill="none" stroke="#a0826d" strokeWidth="1" />
                </g>
                <circle cx="100" cy="100" r="70" fill="none" stroke="#c4a57b" strokeWidth="1.5" opacity="0.7" />
              </svg>

              {/* Center initials */}
              <div className="relative z-10 text-center">
                <p className="script-font text-8xl md:text-9xl text-amber-800 font-bold leading-none" 
                   style={{
                     textShadow: '1px 1px 2px rgba(0,0,0,0.15), -1px -1px 2px rgba(255,255,255,0.3)',
                     fontStyle: 'italic'
                   }}>
                  A&R
                </p>
              </div>

              {/* Shine effect */}
              <motion.div
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-8 left-8 w-24 h-24 rounded-full bg-white opacity-20 blur-2xl"
              />
            </div>

            {/* Pulsing halo */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.2, 0.5]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -inset-4 rounded-full border-2 border-amber-300"
              style={{ boxShadow: 'inset 0 0 20px rgba(217, 119, 6, 0.3)' }}
            />
          </motion.div>
        </motion.button>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <p className="text-amber-100 text-sm sm:text-base tracking-widest uppercase font-light opacity-80">
            An Invitation to Celebrate
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
      >
        <div className="text-amber-100 text-xs tracking-widest uppercase opacity-60 mb-2">Scroll</div>
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-amber-100 text-xl"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  )
}
