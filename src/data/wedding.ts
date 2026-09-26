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
      name: 'Amit Gupta',
      nickname: 'Amit',
      image: '/images/Image2.jpeg',
      parentsMother: 'Late Smt. Divya Gupta',
      parentsFather: 'Late Shri Ram Kumar Gupta',
    },
  },
  weddingDate: '2026-12-02',
  weddingTime: '8:00 AM',
  venue: {
    name: 'Hotel Maharaja Inn',
    address: 'Sector-6',
    city: 'Kanpur',
    state: 'Uttar Pradesh',
    pincode: '208001',
    googleMapsUrl: 'https://maps.google.com/maps?q=Hotel+Maharaja+Inn+Sector+6+Kanpur',
  },
  events: [
    {
      id: 'mandap',
      name: 'Mandap Installation & Haldi',
      date: '2026-11-30',
      time: '3:00 PM',
      venue: {
        name: 'Hotel Maharaja Inn',
        address: 'Sector-6',
        city: 'Kanpur',
      },
      description: 'Join us for the auspicious Mandap installation and Haldi ceremony.',
    },
    {
      id: 'pujan',
      name: 'Mat Pujan & Tel Pujan',
      date: '2026-12-01',
      time: '4:00 PM',
      venue: {
        name: 'Hotel Maharaja Inn',
        address: 'Sector-6',
        city: 'Kanpur',
      },
      description: 'Traditional blessing and oil massage ceremony for the couple.',
    },
    {
      id: 'wedding',
      name: 'Wedding Ceremony',
      date: '2026-12-02',
      time: '8:00 AM',
      venue: {
        name: 'Hotel Maharaja Inn',
        address: 'Sector-6',
        city: 'Kanpur',
      },
      description: 'The main wedding ceremony celebrating the union of two souls.',
    },
    {
      id: 'reception',
      name: 'Bride\'s Arrival Reception',
      date: '2026-12-03',
      time: '6:00 PM',
      venue: {
        name: 'Hotel Maharaja Inn',
        address: 'Sector-6',
        city: 'Kanpur',
      },
      description: 'Reception celebration as the bride arrives at the groom\'s home.',
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
      description: 'Today, we start our forever journey together on December 2nd.',
    },
  ],
  gallery: [
    '/images/Image1.jpeg',
    '/images/Image2.jpeg',
    '/images/Image3.jpeg',
    '/images/Image4.jpeg',
  ],
}
