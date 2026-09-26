import { motion } from 'framer-motion'
import { Calendar, MapPin, Clock } from 'lucide-react'
import { WeddingData } from '../data/wedding'

interface EventsProps {
  events: WeddingData['events']
}

export default function Events({ events }: EventsProps) {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-cream to-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-wine-600 text-sm tracking-widest uppercase mb-4">
            Celebration Events
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-wine-900">
            Wedding Events
          </h2>
        </motion.div>

        <div className="space-y-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 md:p-8 shadow-md border border-wine-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-wine-100 to-wine-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">
                    {event.id === 'mehendi' && '🎨'}
                    {event.id === 'haldi' && '💛'}
                    {event.id === 'wedding' && '💍'}
                    {event.id === 'reception' && '🎉'}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif text-wine-900 mb-2">
                    {event.name}
                  </h3>
                  <p className="text-wine-700 mb-4">
                    {event.description}
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-wine-600">
                      <Calendar className="w-4 h-4 text-gold" />
                      <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-2 text-wine-600">
                      <Clock className="w-4 h-4 text-gold" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-wine-600">
                      <MapPin className="w-4 h-4 text-gold" />
                      <span>{event.venue.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
