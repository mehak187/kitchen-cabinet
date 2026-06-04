// Central place for all business info — edit here to update the whole site.

export const business = {
  nameEn: 'For Aluminum Kitchens',
  nameAr: 'المطابخ الألمنيوم',
  taglineEn: 'Ready & Custom Made',
  taglineAr: 'جاهز وتفصيل حسب الطلب',
  city: 'Riyadh',
  area: 'Manfuhah / Al Bathaa, Riyadh',
  hours: 'Open Daily · 8:00 AM – 10:00 PM',
  hoursAr: 'يومياً ٨ صباحاً – ١٠ مساءً',
}

export const contacts = [
  {
    name: 'Arif',
    phoneDisplay: '0508329811',
    tel: '+966508329811',
    wa: '966508329811',
  },
  {
    name: 'Usman',
    phoneDisplay: '0582291051',
    tel: '+966582291051',
    wa: '966582291051',
  },
]

export const whatsappMessage = encodeURIComponent(
  'Hello! I am interested in an aluminum kitchen. Please share details.'
)

// Gallery — completed kitchens & 3D custom designs.
// Confirmed finished-kitchen photos are listed first so they lead the grid.
export const gallery = [
  'k28', 'k08', 'k35', 'k32', 'k31', 'k36', 'k18', 'k19',
  'k21', 'k22', 'k23', 'k24', 'k26', 'k29', 'k30', 'k33',
  'k34', 'k38', 'k39', 'k16', 'k17', 'k20', 'k25', 'k27',
  'k37', 'k12',
  // 3D design drawings (custom / تفصيل service)
  'k00', 'k01', 'k02', 'k03', 'k04', 'k05', 'k06', 'k07',
  'k09', 'k11', 'k14',
].map((id) => `/gallery/${id}.jpg`)

export const heroImage = '/gallery/k28.jpg'

export const videos = ['/video/walkthrough1.mp4', '/video/walkthrough2.mp4']

// Trust band — edit these numbers to match your real figures.
export const stats = [
  { value: '4.2', suffix: '★', label: 'Google rating' },
  { value: '500', suffix: '+', label: 'Kitchens delivered' },
  { value: '10', suffix: '+', label: 'Years of experience' },
  { value: '100', suffix: '%', label: 'Aluminum — rust-proof' },
]

// Customer reviews — replace with your real Google reviews any time.
export const reviews = [
  {
    name: 'Mohammed A.',
    rating: 5,
    text: 'Excellent aluminum kitchen, exactly the custom size I needed. Clean finish and the team installed everything quickly. Highly recommended.',
  },
  {
    name: 'Khalid R.',
    rating: 5,
    text: 'Good price and very professional work. They came, measured for free, and delivered on time. The cabinets look great and feel solid.',
  },
  {
    name: 'Sara M.',
    rating: 4,
    text: 'Beautiful modern design and friendly service on WhatsApp. Happy with my new kitchen — strong, water-proof and easy to clean.',
  },
]
