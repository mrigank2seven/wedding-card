import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

interface RSVPFormData {
  name: string
  email: string
  attendance: 'accept' | 'decline' | ''
  guests: number
  message: string
}

export default function RSVP() {
  const [formData, setFormData] = useState<RSVPFormData>({
    name: '',
    email: '',
    attendance: '',
    guests: 1,
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value) : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.attendance) {
      alert('Please fill in all required fields')
      return
    }
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', attendance: '', guests: 1, message: '' })
  }

  return (
    <section className="py-20 md:py-32 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-wine-600 text-sm tracking-widest uppercase mb-4">
            Be Part of Our Celebration
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-wine-900">
            RSVP
          </h2>
          <p className="text-wine-700 mt-4 max-w-2xl mx-auto">
            Please confirm your attendance by filling out the form below. We would love to celebrate with you!
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="bg-cream rounded-lg p-8 md:p-12 shadow-md"
        >
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-green-100 border border-green-400 rounded-lg flex items-center gap-3"
            >
              <Check className="w-5 h-5 text-green-600" />
              <p className="text-green-800">Thank you! Your RSVP has been received.</p>
            </motion.div>
          )}

          <div className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-wine-900 font-semibold mb-2">
                Full Name <span className="text-wine-600">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-wine-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wine-600"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-wine-900 font-semibold mb-2">
                Email Address <span className="text-wine-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-wine-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wine-600"
                placeholder="your@email.com"
              />
            </div>

            {/* Attendance */}
            <div>
              <label className="block text-wine-900 font-semibold mb-4">
                Will you be joining us? <span className="text-wine-600">*</span>
              </label>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="attendance"
                    value="accept"
                    checked={formData.attendance === 'accept'}
                    onChange={handleChange}
                    className="w-4 h-4"
                  />
                  <span className="text-wine-700">Joyfully Accept</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="attendance"
                    value="decline"
                    checked={formData.attendance === 'decline'}
                    onChange={handleChange}
                    className="w-4 h-4"
                  />
                  <span className="text-wine-700">Regretfully Decline</span>
                </label>
              </div>
            </div>

            {/* Number of guests */}
            {formData.attendance === 'accept' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                <label className="block text-wine-900 font-semibold mb-2">
                  Number of Guests
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-wine-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wine-600"
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'guest' : 'guests'}</option>
                  ))}
                </select>
              </motion.div>
            )}

            {/* Message */}
            <div>
              <label className="block text-wine-900 font-semibold mb-2">
                Special Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-wine-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wine-600 resize-none"
                placeholder="Share your wishes and blessings..."
              ></textarea>
            </div>

            {/* Submit button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-8 py-3 bg-wine-700 text-cream rounded-lg hover:bg-wine-800 transition-colors font-semibold tracking-wide uppercase"
            >
              Submit RSVP
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
