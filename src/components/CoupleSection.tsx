import { motion } from 'framer-motion'

interface Couple {
  bride: {
    name: string
    image?: string
    parentsMother: string
    parentsFather: string
  }
  groom: {
    name: string
    image?: string
    parentsMother: string
    parentsFather: string
  }
}

interface CoupleProps {
  couple: Couple
}

export default function CoupleSection({ couple }: CoupleProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-wine-100 to-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-gold text-sm tracking-widest uppercase mb-4">
            The Bride & Groom
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-wine-900 mb-2">
            A Beautiful Union
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="relative mb-6 md:mb-8 inline-block group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-48 sm:w-56 h-48 sm:h-56 mx-auto bg-gradient-to-br from-wine-200 to-wine-300 rounded-full overflow-hidden shadow-xl ring-4 ring-gold ring-opacity-30"
              >
                {couple.bride.image ? (
                  <img
                    src={couple.bride.image}
                    alt={couple.bride.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-wine-400 opacity-30 flex items-center justify-center">
                    <span className="text-wine-800 text-5xl">👰</span>
                  </div>
                )}
              </motion.div>
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -inset-1 bg-gold rounded-full opacity-20 blur-xl -z-10"
              />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-wine-900 mb-2 font-bold">
              {couple.bride.name}
            </h3>
            <p className="text-wine-600 text-xs sm:text-sm mb-4 font-semibold">
              {couple.bride.parentsMother} & {couple.bride.parentsFather}
            </p>
            <p className="text-wine-700 italic text-sm sm:text-base">
              A woman of grace, strength, and infinite love.
            </p>
          </motion.div>

          {/* Heart divider */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden sm:flex justify-center col-span-2 sm:col-span-1"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-5xl sm:text-6xl text-gold"
            >
              💕
            </motion.div>
          </motion.div>

          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center sm:col-start-2 sm:row-start-1"
          >
            <div className="relative mb-6 md:mb-8 inline-block group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-48 sm:w-56 h-48 sm:h-56 mx-auto bg-gradient-to-br from-wine-200 to-wine-300 rounded-full overflow-hidden shadow-xl ring-4 ring-gold ring-opacity-30"
              >
                {couple.groom.image ? (
                  <img
                    src={couple.groom.image}
                    alt={couple.groom.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-wine-400 opacity-30 flex items-center justify-center">
                    <span className="text-wine-800 text-5xl">🤵</span>
                  </div>
                )}
              </motion.div>
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -inset-1 bg-gold rounded-full opacity-20 blur-xl -z-10"
              />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-wine-900 mb-2 font-bold">
              {couple.groom.name}
            </h3>
            <p className="text-wine-600 text-xs sm:text-sm mb-4 font-semibold">
              {couple.groom.parentsMother} & {couple.groom.parentsFather}
            </p>
            <p className="text-wine-700 italic text-sm sm:text-base">
              A gentleman of wisdom, kindness, and devoted heart.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 pt-16 border-t border-wine-300 text-center"
        >
          <p className="text-wine-800 italic max-w-2xl mx-auto">
            "Two souls, one heart, forever bound by love, laughter, and endless dreams. 
            Together, we celebrate not just our union, but the beautiful journey we're about to embark on."
          </p>
        </motion.div>
      </div>
    </section>
  )
}
