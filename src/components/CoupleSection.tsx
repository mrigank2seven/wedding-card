import { motion } from 'framer-motion'

interface Couple {
  bride: {
    name: string
    parentsMother: string
    parentsFather: string
  }
  groom: {
    name: string
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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-48 h-48 md:w-56 md:h-56 mx-auto mb-6 bg-gradient-to-br from-wine-200 to-wine-300 rounded-full overflow-hidden shadow-lg">
              <div className="w-full h-full bg-wine-400 opacity-30 flex items-center justify-center">
                <span className="text-wine-800 text-5xl">👰</span>
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-serif text-wine-900 mb-2">
              {couple.bride.name}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {couple.bride.parentsMother} & {couple.bride.parentsFather}
            </p>
            <p className="text-wine-700 italic">
              A woman of grace, strength, and infinite love.
            </p>
          </motion.div>

          {/* Heart divider */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex justify-center"
          >
            <div className="text-6xl text-gold">💕</div>
          </motion.div>

          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:col-start-2 md:row-start-1"
          >
            <div className="w-48 h-48 md:w-56 md:h-56 mx-auto mb-6 bg-gradient-to-br from-wine-200 to-wine-300 rounded-full overflow-hidden shadow-lg">
              <div className="w-full h-full bg-wine-400 opacity-30 flex items-center justify-center">
                <span className="text-wine-800 text-5xl">🤵</span>
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-serif text-wine-900 mb-2">
              {couple.groom.name}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {couple.groom.parentsMother} & {couple.groom.parentsFather}
            </p>
            <p className="text-wine-700 italic">
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
