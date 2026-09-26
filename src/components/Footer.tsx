import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { WeddingData } from '../data/wedding'

interface FooterProps {
  couple: WeddingData['couple']
}

export default function Footer({ couple }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-wine-950 to-wine-900 text-cream py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-3xl font-serif text-gold">
              {couple.bride.name[0]} & {couple.groom.name[0]}
            </span>
          </div>
          <p className="text-cream opacity-80 mb-4">
            Thank you for celebrating this special moment with us
          </p>
          <div className="flex justify-center items-center gap-2 text-gold mb-6">
            <Heart className="w-4 h-4 fill-current" />
            <span className="script-font text-2xl">Forever</span>
            <Heart className="w-4 h-4 fill-current" />
          </div>
        </motion.div>

        <div className="border-t border-wine-700 pt-8">
          <div className="grid md:grid-cols-3 gap-8 text-center text-sm text-cream opacity-70 mb-8">
            <div>
              <p className="font-semibold mb-1">Bride</p>
              <p>{couple.bride.name}</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Wedding</p>
              <p>2026</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Groom</p>
              <p>{couple.groom.name}</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center text-xs text-cream opacity-60 pt-4 border-t border-wine-700"
          >
            <p>© {year} Wedding Invitation. All rights reserved.</p>
            <p className="mt-2">With love and gratitude</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
