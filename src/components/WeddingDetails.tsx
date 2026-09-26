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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-wine-100 via-cream to-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-wine-600 text-sm tracking-widest uppercase mb-4 font-semibold">
            📅 Save the Date
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-wine-900 leading-tight">
            Our Wedding Day
          </h2>
          <p className="text-wine-600 mt-4 text-lg">
            Join us for the celebration of a lifetime
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-3 gap-6 md:gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Date */}
          <motion.div
            variants={itemVariants}
            whileHover={{ translateY: -8 }}
            className="group"
          >
            <div className="p-6 md:p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all border-2 border-wine-100 group-hover:border-gold text-center">
              <motion.div
                className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-gold to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <Calendar className="w-6 h-6 md:w-7 md:h-7 text-wine-900" />
              </motion.div>
              <p className="text-xs text-wine-600 uppercase tracking-widest mb-2 font-semibold">Date</p>
              <p className="text-base md:text-lg font-serif text-wine-900 font-bold">
                {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </p>
              <p className="text-sm text-wine-600 mt-1">
                {date.toLocaleDateString('en-US', { weekday: 'long' })}
              </p>
            </div>
          </motion.div>

          {/* Time */}
          <motion.div
            variants={itemVariants}
            whileHover={{ translateY: -8 }}
            className="group"
          >
            <div className="p-6 md:p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all border-2 border-wine-100 group-hover:border-gold text-center">
              <motion.div
                className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-gold to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <Clock className="w-6 h-6 md:w-7 md:h-7 text-wine-900" />
              </motion.div>
              <p className="text-xs text-wine-600 uppercase tracking-widest mb-2 font-semibold">Time</p>
              <p className="text-base md:text-lg font-serif text-wine-900 font-bold">
                {data.weddingTime}
              </p>
              <p className="text-sm text-wine-600 mt-1">
                Barat Departure
              </p>
            </div>
          </motion.div>

          {/* Venue */}
          <motion.div
            variants={itemVariants}
            whileHover={{ translateY: -8 }}
            className="group"
          >
            <div className="p-6 md:p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all border-2 border-wine-100 group-hover:border-gold text-center">
              <motion.div
                className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-gold to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <MapPin className="w-6 h-6 md:w-7 md:h-7 text-wine-900" />
              </motion.div>
              <p className="text-xs text-wine-600 uppercase tracking-widest mb-2 font-semibold">Venue</p>
              <p className="text-base md:text-lg font-serif text-wine-900 font-bold">
                {data.venue.name}
              </p>
              <p className="text-sm text-wine-600 mt-1">
                {data.venue.city}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Venue Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-r from-wine-50 to-gold/10 p-8 md:p-12 rounded-2xl border-2 border-wine-200 text-center shadow-lg"
        >
          <h3 className="text-2xl md:text-3xl font-serif text-wine-900 mb-4 font-bold">
            {data.venue.name}
          </h3>
          <div className="space-y-2 mb-8">
            <p className="text-wine-700 text-lg font-semibold">
              {data.venue.address}
            </p>
            <p className="text-wine-600">
              {data.venue.city}, {data.venue.state} {data.venue.pincode}
            </p>
          </div>
          <motion.button
            onClick={handleMapClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-wine-700 to-wine-800 text-cream rounded-full hover:shadow-lg transition-all font-semibold text-sm tracking-wider uppercase"
          >
            📍 View on Google Maps
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
