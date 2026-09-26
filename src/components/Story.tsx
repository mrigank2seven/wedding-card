import { motion } from 'framer-motion'
import { WeddingData } from '../data/wedding'

interface StoryProps {
  timeline: WeddingData['story']
}

export default function Story({ timeline }: StoryProps) {
  if (!timeline || timeline.length === 0) return null

  return (
    <section className="py-20 md:py-32 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-wine-600 text-sm tracking-widest uppercase mb-4">
            Our Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-wine-900">
            Our Love Story
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-wine-200 to-wine-100"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content */}
                <div className="w-1/2 px-4 md:px-8">
                  <div className={`${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <p className="text-gold font-serif text-2xl md:text-3xl font-bold mb-2">
                      {item.year}
                    </p>
                    <h3 className="text-xl font-serif text-wine-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-wine-700">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="flex justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="w-6 h-6 bg-gold rounded-full border-4 border-white absolute left-1/2 transform -translate-x-1/2 shadow-md"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
