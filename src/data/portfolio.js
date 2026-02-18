/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   data/portfolio.js
   Single source of truth for all CV data.
   Update this file to change site content.
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export const profile = {
  name:        'Isaac Magina',
  initials:    'IM',
  tagline:     'Strategic Business Leader',
  subTagline:  'Insurance · Agriculture · Climate Risk',
  email:       'isaacojuk@gmail.com',
  phone1:      '+234 816 511 4957',
  phone2:      '+254 722 224 415',
  location:    'Nairobi, Kenya',
  linkedin:    'https://www.linkedin.com/in/isaac-magina-1a0592a5/',
  currentRole: 'Manager, Agriculture & Climate Insurance · Africa Re',
  about: `Over 18 years I have built a track record of leading transformative projects across
    Africa and Europe — from pioneering parametric insurance products that protect smallholder
    farmers, to steering sovereign risk transfer solutions worth hundreds of millions of dollars.
    I bring a genuine passion for ESG integration, coalition building, and unlocking underserved
    markets through innovation and public-private partnerships.`,
}

export const stats = [
  { value: '+18',   label: 'Years Experience' },
  { value: '$120M', label: 'Portfolio Steered' },
  { value: '5+',   label: 'Countries Served'  },
]

export const competencies = [
  'Team Leadership',
  'Project Management',
  'Strategy & Vision',
  'Stakeholder Engagement',
  'Marketing & Communications',
  'Cultural Diversity & Inclusion',
  'Climate Risk',
  'ESG Integration',
  'Portfolio Steering',
  'Government Origination',
  'Brand Building',
  'Analytics & Reporting',
]

export const languages = [
  { name: 'English', level: 'Native' },
  { name: 'Swahili', level: 'Native' },
  { name: 'French',  level: 'A2'     },
]

export const experience = [
  {
    id:           1,
    period:       '2021 — Present',
    organisation: 'Africa Reinsurance Corporation',
    role:         'Manager, Agriculture Underwriting & Marketing',
    location:     'Lagos, Nigeria',
    description:  'Providing strategic leadership and financial performance oversight of the Agriculture and Climate Insurance Portfolio, positioning Africa Re as the continent\'s market leader in climate insurance initiatives through stakeholder engagements and public-private sector partnerships.',
    achievements: [
      'Thought leadership across Africa\'s Agriculture & Climate insurance landscape',
      'Built rich, profitable pipeline through balanced portfolio steering',
      'Elevated Africa Re as technical partner in Pan-African PPP initiatives',
    ],
  },
  {
    id:           2,
    period:       '2019 — 2021',
    organisation: 'Swiss Reinsurance Company Limited',
    role:         'Public Sector & Agriculture Specialist',
    location:     'Zurich, Switzerland',
    description:  'Team lead and business development for Public Sector Solutions initiatives in Sub-Saharan Africa, and Agriculture Underwriter for East and West Africa. Initiated landmark public-private partnerships in Health and Agriculture.',
    achievements: [
      'Steered USD 120M Agriculture portfolio to profitability',
      'Kenya Livestock Insurance Program',
      'Uganda Agriculture Insurance Scheme',
      'Critical Illness Funding Solution for Cancer Patients',
    ],
  },
  {
    id:           3,
    period:       '2015 — 2019',
    organisation: 'Swiss Reinsurance Company Limited',
    role:         'Senior Client Manager',
    location:     'Zurich, Switzerland',
    description:  'Originated and managed public sector pipeline for Sub-Saharan Africa with focus on Agriculture, Health and Climate Risk. Achieved above-peer-average portfolio growth in challenging, protectionist market environments.',
    achievements: [
      'Above-peer-average Agriculture portfolio growth',
      'Market entry in high-barrier Sub-Saharan markets',
    ],
  },
  {
    id:           4,
    period:       '2007 — 2015',
    organisation: 'UAP Old Mutual Insurance Company',
    role:         'Agriculture Underwriter',
    location:     'Nairobi, Kenya',
    description:  'Built the Agriculture Insurance business unit from the ground up. Led Product Development, Marketing, Underwriting and Claims management across five East African subsidiaries. Pioneered parametric risk transfer solutions in agriculture.',
    achievements: [
      'Grew portfolio from $0 to USD 4.5M premiums by 2014',
      'Pioneered Kilimo Salama parametric insurance',
      'Set up Agriculture Insurance Unit across 5 subsidiaries',
    ],
  },
  {
    id:           5,
    period:       '2006 — 2007',
    organisation: 'Bayer East Africa Limited',
    role:         'Product Manager – Herbicides & Seed Treatment',
    location:     'Nairobi, Kenya',
    description:  'Developed and implemented marketing and product development strategy for Herbicide and Seed Treatment brands in East Africa, providing technical support and product positioning to the Sales Team.',
    achievements: [
      '55% market share in Seed Treatment products in Kenya (2007)',
    ],
  },
  {
    id:           6,
    period:       '2002 — 2006',
    organisation: 'Asego Holdings Limited',
    role:         'Assistant Operations Manager',
    location:     'Kenya',
    description:  'Supported operations management in an insurance-adjacent environment, contributing to business efficiency and process improvement.',
    achievements: [],
  },
]

export const skills = [
  {
    category: 'Domain Expertise',
    items: [
      { name: 'Agriculture & Climate Insurance', level: 92 },
      { name: 'Reinsurance & Underwriting',      level: 88 },
      { name: 'ESG & Climate Risk',               level: 85 },
      { name: 'African Market Intelligence',      level: 92 },
    ],
  },
  {
    category: 'Leadership & Business',
    items: [
      { name: 'Business Development',             level: 90 },
      { name: 'Stakeholder & Govt. Origination',  level: 86 },
      { name: 'Marketing & Brand Strategy',       level: 82 },
      { name: 'Sales, Reporting & Analytics',     level: 82 },
    ],
  },
]

export const education = [
  {
    id:          1,
    year:        '2024',
    degree:      'MBA — Leadership & Sustainability',
    institution: 'University of Cumbria',
    highlight:   true,
  },
  {
    id:          2,
    year:        '2021',
    degree:      'Investment Foundations Certificate',
    institution: 'CFA Institute',
    highlight:   false,
  },
  {
    id:          3,
    year:        '2010',
    degree:      'Post Graduate Diploma — Marketing Management',
    institution: 'Kenya Institute of Management',
    highlight:   false,
  },
  {
    id:          4,
    year:        '2007',
    degree:      'Certificate of Proficiency in Insurance (COP)',
    institution: 'College of Insurance, Nairobi',
    highlight:   false,
  },
  {
    id:          5,
    year:        '1999',
    degree:      'BSc. Agriculture (Economics & Agronomy)',
    institution: 'Egerton University, Njoro',
    highlight:   false,
  },
]

export const courses = [
  'Emerging Leaders MasterClass — Relds & Agate Lagos (2022)',
  'Principles of Traditional Non-life Reinsurance — Swiss Re Zurich (2020)',
  'Media and Public Communication — Swiss Re Zurich (2018)',
  'Management Development Program — Strathmore Business School (2010)',
]

export const interests = [
  { icon: '🏉', label: 'Rugby Sports'     },
  { icon: '✈️', label: 'Travel & Discovery' },
  { icon: '🎓', label: 'Youth Mentorship' },
]