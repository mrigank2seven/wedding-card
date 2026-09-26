import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface CountdownProps {
  targetDate: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetTime = new Date(targetDate).getTime()
      const now = new Date().getTime()
      const difference = targetTime - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  const TimeUnit = ({ label, value }: { label: string; value: number }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center"
    >
      <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-wine-200 to-wine-300 rounded-lg flex items-center justify-center shadow-md border border-wine-400 mb-3">
        <span className="text-3xl md:text-4xl font-serif font-bold text-wine-900">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <p className="text-wine-700 text-xs md:text-sm uppercase tracking-widest font-sans">
        {label}
      </p>
    </motion.div>
  )

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
            Coming Soon
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-wine-900">
            Countdown to Forever
          </h2>
        </motion.div>

        <div className="flex justify-center gap-4 md:gap-6">
          <TimeUnit label="Days" value={timeLeft.days} />
          <div className="flex items-end pb-6 md:pb-8">
            <span className="text-3xl md:text-4xl text-wine-600 mx-2">:</span>
          </div>
          <TimeUnit label="Hours" value={timeLeft.hours} />
          <div className="flex items-end pb-6 md:pb-8">
            <span className="text-3xl md:text-4xl text-wine-600 mx-2">:</span>
          </div>
          <TimeUnit label="Minutes" value={timeLeft.minutes} />
          <div className="flex items-end pb-6 md:pb-8">
            <span className="text-3xl md:text-4xl text-wine-600 mx-2">:</span>
          </div>
          <TimeUnit label="Seconds" value={timeLeft.seconds} />
        </div>
      </div>
    </section>
  )
}
