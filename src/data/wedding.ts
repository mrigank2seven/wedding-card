export interface WeddingData {
  couple: {
    bride: {
      name: string
      nickname?: string
      image?: string
      bio?: string
      parentsMother: string
      parentsFather: string
    }
    groom: {
      name: string
      nickname?: string
      image?: string
      bio?: string
      parentsMother: string
      parentsFather: string
    }
  }
  weddingDate: string
  weddingTime: string
  venue: {
    name: string
    address: string
    city: string
    state: string
    pincode: string
    latitude?: number
    longitude?: number
    googleMapsUrl?: string
  }
  events: Array<{
    id: string
    name: string
    date: string
    time: string
    venue: {
      name: string
      address: string
      city: string
    }
    description?: string
  }>
  story?: Array<{
    year: string
    title: string
    description: string
  }>
  gallery?: string[]
}

export const weddingData: WeddingData = {
  couple: {
    bride: {
      name: 'Bride Name',
      nickname: 'Bride',
      image: '/images/Image1.jpeg',
      parentsMother: 'Mrs. [Mother]',
      parentsFather: 'Mr. [Father]',
    },
    groom: {
      name: 'Groom Name',
      nickname: 'Groom',
      image: '/images/Image2.jpeg',
      parentsMother: 'Mrs. [Mother]',
      parentsFather: 'Mr. [Father]',
    },
  },
  weddingDate: '2026-07-14',
  weddingTime: '6:00 PM',
  venue: {
    name: 'Grand Venue',
    address: '123 Wedding Street',
    city: 'City Name',
    state: 'State',
    pincode: '000000',
    googleMapsUrl: 'https://maps.google.com',
  },
  events: [
    {
      id: 'mehendi',
      name: 'Mehendi',
      date: '2026-07-12',
      time: '5:00 PM',
      venue: {
        name: 'Venue Name',
        address: 'Address',
        city: 'City',
      },
      description: 'Join us for a vibrant celebration of colors and joy.',
    },
    {
      id: 'haldi',
      name: 'Haldi',
      date: '2026-07-13',
      time: '5:00 PM',
      venue: {
        name: 'Venue Name',
        address: 'Address',
        city: 'City',
      },
      description: 'A sacred and golden celebration of turmeric and blessings.',
    },
    {
      id: 'wedding',
      name: 'Wedding',
      date: '2026-07-14',
      time: '6:00 PM',
      venue: {
        name: 'Grand Venue',
        address: 'Address',
        city: 'City',
      },
      description: 'The main wedding ceremony where two souls become one.',
    },
    {
      id: 'reception',
      name: 'Reception',
      date: '2026-07-14',
      time: '8:00 PM',
      venue: {
        name: 'Reception Venue',
        address: 'Address',
        city: 'City',
      },
      description: 'A night of celebration, dance, and joyful moments.',
    },
  ],
  story: [
    {
      year: '2020',
      title: 'Our First Meeting',
      description: 'The beautiful beginning of our love story.',
    },
    {
      year: '2023',
      title: 'The Proposal',
      description: 'A moment we will cherish forever.',
    },
    {
      year: '2026',
      title: 'Forever Begins',
      description: 'Today, we start our forever journey together.',
    },
  ],
  gallery: [
    '/images/Image1.jpeg',
    '/images/Image2.jpeg',
    '/images/Image3.jpeg',
    '/images/Image4.jpeg',
  ],
}
