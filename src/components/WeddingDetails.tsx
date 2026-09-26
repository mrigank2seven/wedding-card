import { motion } from 'framer-motion'
import { MapPin, Clock, Calendar } from 'lucide-react'
import { WeddingData } from '../data/wedding'

interface WeddingDetailsProps {
  data: WeddingData
}

export default function WeddingDetails({ data }: WeddingDetailsProps) {
  const date = new Date(data.weddingDate)
  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const handleMapClick = () => {
    if (data.venue.googleMapsUrl) {
      window.open(data.venue.googleMapsUrl, '_blank')
    }
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-cream via-white to-cream px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-wine-600 text-sm tracking-widest uppercase mb-4">
            Save the Date
          </p>
          <h2 className="text-5xl md:text-6xl font-serif text-wine-900">
            Our Wedding Day
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Date */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center p-6 bg-white rounded-lg shadow-sm border border-wine-100"
          >
            <Calendar className="w-8 h-8 text-gold mx-auto mb-4" />
            <p className="text-sm text-wine-600 uppercase tracking-wide mb-2">Date</p>
            <p className="text-lg font-serif text-wine-900">{formattedDate}</p>
          </motion.div>

          {/* Time */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center p-6 bg-white rounded-lg shadow-sm border border-wine-100"
          >
            <Clock className="w-8 h-8 text-gold mx-auto mb-4" />
            <p className="text-sm text-wine-600 uppercase tracking-wide mb-2">Time</p>
            <p className="text-lg font-serif text-wine-900">{data.weddingTime}</p>
          </motion.div>

          {/* Venue */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center p-6 bg-white rounded-lg shadow-sm border border-wine-100"
          >
            <MapPin className="w-8 h-8 text-gold mx-auto mb-4" />
            <p className="text-sm text-wine-600 uppercase tracking-wide mb-2">Venue</p>
            <p className="text-lg font-serif text-wine-900">{data.venue.name}</p>
          </motion.div>
        </div>

        {/* Venue Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-wine-100 to-cream p-8 md:p-12 rounded-lg text-center"
        >
          <h3 className="text-2xl font-serif text-wine-900 mb-4">
            {data.venue.name}
          </h3>
          <p className="text-wine-700 text-lg mb-2">
            {data.venue.address}
          </p>
          <p className="text-wine-600 mb-6">
            {data.venue.city}, {data.venue.state} {data.venue.pincode}
          </p>
          <button
            onClick={handleMapClick}
            className="inline-block px-8 py-3 bg-wine-700 text-cream rounded-full hover:bg-wine-800 transition-colors font-sans text-sm tracking-wider uppercase"
          >
            View Location
          </button>
        </motion.div>
      </div>
    </section>
  )
}
