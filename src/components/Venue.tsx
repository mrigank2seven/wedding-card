import { motion } from 'framer-motion'
import { MapPin, Navigation } from 'lucide-react'
import { WeddingData } from '../data/wedding'

interface VenueProps {
  venue: WeddingData['venue']
}

export default function Venue({ venue }: VenueProps) {
  const handleNavigate = () => {
    if (venue.googleMapsUrl) {
      window.open(venue.googleMapsUrl, '_blank')
    }
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-cream via-white to-cream px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-wine-600 text-sm tracking-widest uppercase mb-4">
            Venue Details
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-wine-900">
            Our Venue
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Map/Image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-lg shadow-lg"
          >
            <div className="w-full h-80 md:h-96 bg-gradient-to-br from-wine-200 to-wine-300 flex items-center justify-center">
              <MapPin className="w-16 h-16 text-wine-900 opacity-30" />
            </div>
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.0000000000!2d77!3d28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsCAwJzAwLjAiTiA3N8KwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890`}
              width="100%"
              height="100%"
              style={{ border: 0, position: 'absolute', inset: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          {/* Venue info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-serif text-wine-900 mb-4">
              {venue.name}
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-wine-800 font-semibold">{venue.address}</p>
                  <p className="text-wine-700">{venue.city}, {venue.state} {venue.pincode}</p>
                </div>
              </div>
            </div>
            <button
              onClick={handleNavigate}
              className="inline-flex items-center gap-2 px-6 py-3 bg-wine-700 text-cream rounded-full hover:bg-wine-800 transition-colors font-sans text-sm tracking-wider uppercase"
            >
              <Navigation className="w-4 h-4" />
              Open in Google Maps
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
