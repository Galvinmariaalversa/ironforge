import {
  Dumbbell,
  Zap,
  Activity,
  Trophy,
  Flame,
  Shield
} from 'lucide-react';

export const METRICS_DATA = [
  { number: '500+', title: 'Active Members', desc: 'Dedicated athletes forging their best physiques' },
  { number: '15+', title: 'Master Coaches', desc: 'Olympians, IFBB pros & strength scientists' },
  { number: '20+', title: 'Specialized Systems', desc: 'Periodized for hypertrophy and power' },
  { number: '100%', title: 'Iron Standard', desc: 'Uncompromised discipline and measurable results' }
];

export const PROGRAMS_DATA = [
  {
    id: '01',
    title: 'HYPERTROPHY & BODYBUILDING',
    desc: 'Scientific progressive overload, mechanical tension periodization, and high-volume isolation targeting maximum muscular symmetry.',
    icon: Dumbbell,
    duration: '16 Weeks Cycle',
    frequency: '5 Days / Week',
    difficulty: 'Intermediate to Advanced',
    benefits: [
      'Targeted muscle fiber recruitment and symmetry',
      'Structured volume and progressive overload blocks',
      'Metabolic conditioning & hypertrophy hybrid sets',
      'Nutritional macronutrient periodization guide'
    ],
    curriculum: [
      'Upper/Lower & Push/Pull/Legs periodization',
      'Muscle fiber recruitment diagnostics',
      'Intra-workout intra-cellular hydration protocols',
      'Advanced tempo manipulation and drop sets'
    ]
  },
  {
    id: '02',
    title: 'POWERLIFTING SUPREMACY',
    desc: 'Master the big three (Squat, Bench Press, Deadlift) on competition-spec IPF platforms with calibrated Eleiko steel plates.',
    icon: Zap,
    duration: '12 Weeks Cycle',
    frequency: '4 Days / Week',
    difficulty: 'Advanced',
    benefits: [
      'Mastery of technical bar trajectory & tightness',
      'Peak neurological motor unit recruitment',
      'Competition-grade platform readiness',
      'Tendon & posterior chain resilience'
    ],
    curriculum: [
      'Barbell velocity tracking and RPE calibration',
      'Biomechanical lever and stance optimization',
      'Peaking protocols for 1-rep max testing',
      'Accessory posterior chain strengthening'
    ]
  },
  {
    id: '03',
    title: 'ATHLETIC CONDITIONING',
    desc: 'High-velocity sled drives, kettlebell ballistics, and functional anaerobic capacity drills built for explosive power and endurance.',
    icon: Activity,
    duration: 'Continuous Blocks',
    frequency: '3-4 Days / Week',
    difficulty: 'All Levels',
    benefits: [
      'Enhanced VO2 max and anaerobic threshold',
      'Multi-planar agility and reactive stability',
      'Accelerated fat oxidation and conditioning',
      'Injury mitigation through functional mobility'
    ],
    curriculum: [
      'Lactate threshold manipulation',
      'Multi-directional sprint mechanics',
      'Plyometric reactive force development',
      'Metabolic conditioning intervals'
    ]
  },
  {
    id: '04',
    title: 'OLYMPIC WEIGHTLIFTING',
    desc: 'Precision technical coaching for Snatch and Clean & Jerk on competition wood platforms with Swedish Eleiko barbells.',
    icon: Trophy,
    duration: '12 Weeks Cycle',
    frequency: '3 Days / Week',
    difficulty: 'Intermediate to Advanced',
    benefits: [
      'Explosive triple extension power generation',
      'Elite thoracic and ankle mobility range',
      'Proprioception and rapid speed under bar',
      'Video analysis & bar path correction'
    ],
    curriculum: [
      'First and second pull bar trajectory analysis',
      'Overhead stability and thoracic mobility drills',
      'Drop catch speed and turnover acceleration',
      'Video feedback biomechanical breakdowns'
    ]
  },
  {
    id: '05',
    title: 'COMBAT & STRIKING',
    desc: 'Heavy bag power development, rotational core torque, and high-intensity strike conditioning led by combat specialists.',
    icon: Flame,
    duration: '8 Weeks Cycle',
    frequency: '3 Days / Week',
    difficulty: 'All Levels',
    benefits: [
      'High-impact rotational power & core density',
      'Combat reflex coordination & distance timing',
      'High caloric burn rate and sustained grit',
      'Full body kinetic chain activation'
    ],
    curriculum: [
      'Kinetic chain power transfer for striking',
      'Rotational core resistance drills',
      'Footwork agility and balance under fatigue',
      'High-density heavy bag round endurance'
    ]
  },
  {
    id: '06',
    title: 'MOBILITY & RECOVERY',
    desc: 'Full-spectrum contrast therapy combining 190°F Finnish cedar saunas, 42°F cold plunge pools, and guided fascial release.',
    icon: Shield,
    duration: 'On-Demand Daily',
    frequency: 'Daily Protocol',
    difficulty: 'All Levels',
    benefits: [
      'Accelerated systemic inflammation clearance',
      'Autonomic nervous system down-regulation',
      'Enhanced fascia elasticity and range of motion',
      'Improved sleep architecture and HRV scores'
    ],
    curriculum: [
      'Contrast vascular pumping (heat to cold plunge)',
      'Normatec pneumatic compression therapy',
      'Active isolated stretching and joint flossing',
      'Heart Rate Variability (HRV) autonomic reset'
    ]
  }
];

export const TRAINERS_DATA = [
  {
    id: 1,
    name: 'Marcus "Titan" Vance',
    role: 'Head of Strength & Conditioning',
    badge: 'HEAD COACH',
    experience: '14+ Years Coaching',
    certifications: 'CSCS, USAW Level 2, Precision Nutrition L1',
    bio: 'Former collegiate strength scientist and champion powerlifter with 14 years developing elite athletic performance and coaching national level lifters.',
    image: '/images/trainer_marcus.jpg',
    tags: ['Powerlifting', 'Biomechanics', 'RPE Programming']
  },
  {
    id: 2,
    name: 'Elena Rostova',
    role: 'Master Hypertrophy Director',
    badge: 'IFBB PRO',
    experience: '11+ Years Coaching',
    certifications: 'IFBB Pro Card, NASM Master Trainer, Sports Nutritionist',
    bio: 'Two-time IFBB Pro champion specializing in aesthetic muscle symmetry, contest preparation, and endocrine nutrition for advanced physiques.',
    image: '/images/trainer_elena.jpg',
    tags: ['Hypertrophy', 'Contest Prep', 'Nutrition Systems']
  },
  {
    id: 3,
    name: 'David Chen',
    role: 'Olympic Weightlifting Specialist',
    badge: 'OLYMPIC COACH',
    experience: '10+ Years Coaching',
    certifications: 'USAW National Coach, Eleiko Certified Strength Coach',
    bio: 'National weightlifting medalist and certified master coach renowned for bar path precision, kinetic chain dynamics, and platform peaking protocols.',
    image: '/images/trainer_david.jpg',
    tags: ['Snatch & C&J', 'Speed Mechanics', 'Platform Peaking']
  },
  {
    id: 4,
    name: 'Sarah Jenkins',
    role: 'Recovery & Functional Conditioning',
    badge: 'PERFORMANCE LEAD',
    experience: '8+ Years Coaching',
    certifications: 'FRC Mobility Specialist, Boxing/Kickboxing Coach, Contrast Therapy Cert',
    bio: 'Former elite combat athlete focused on rotational core supremacy, contrast therapy recovery, and bulletproofing joints against injury.',
    image: '/images/trainer_sarah.jpg',
    tags: ['Contrast Therapy', 'Metabolic Sleds', 'Mobility']
  }
];

export const GALLERY_DATA = [
  {
    id: 'arena',
    title: 'THE MAIN ARENA - FREE WEIGHTS & CALIBRATED RACKS',
    tag: 'ZONE 01 /// FREE WEIGHTS',
    image: '/images/gallery_dungeon.jpg',
    className: 'bento-item-1',
    desc: '20 custom steel power racks, chalk stations, calibrated competition plates, and heavy chains.'
  },
  {
    id: 'dumbbells',
    title: 'ELEIKO DUMBBELL VAULT',
    tag: 'ZONE 02 /// DUMBBELLS',
    image: '/images/gallery_dumbbells.jpg',
    className: 'bento-item-2',
    desc: 'Precision machined solid steel dumbbells from 5 lbs up to 160 lbs in 2.5 lb increments.'
  },
  {
    id: 'turf',
    title: 'THE SPRINT TURF & PLYO ZONE',
    tag: 'ZONE 03 /// TURF TRACK',
    image: '/images/gym_interior.jpg',
    className: 'bento-item-3',
    desc: '50-yard high-density indoor sprint turf equipped with Rogue sleds, plyo boxes, and slam balls.'
  },
  {
    id: 'dungeon',
    title: 'POWER RACK DUNGEON',
    tag: 'ZONE 04 /// POWERLIFTING',
    image: '/images/hero_athlete.jpg',
    className: 'bento-item-4',
    desc: 'A dedicated underground iron sanctuary with sound-dampened deadlift platforms and mono-lifts.'
  },
  {
    id: 'contrast',
    title: 'CONTRAST SPA & SAUNA LOUNGE',
    tag: 'ZONE 05 /// RECOVERY',
    image: '/images/gym_interior.jpg',
    className: 'bento-item-5',
    desc: 'Infrared Finnish sauna heated to 195°F paired with dual chilled stainless steel plunges.'
  }
];

export const PRICING_DATA = [
  {
    id: 'iron-basic',
    name: 'IRON BASIC',
    desc: 'Essential access for disciplined individuals focused on independent strength training.',
    annualPrice: '$1,499',
    annualPeriod: '/ year ($125/mo)',
    monthlyPrice: '$149',
    monthlyPeriod: '/ month billed monthly',
    featured: false,
    buttonText: 'GET STARTED',
    features: [
      'Full access to main arena & dumbbell vault',
      'Standard hours access (5 AM - 11 PM)',
      'Full locker room & Finnish sauna access',
      'Complimentary physical baseline assessment',
      'Access to member training logging app'
    ]
  },
  {
    id: 'forge-pro',
    name: 'FORGE PRO',
    badge: 'MOST POPULAR',
    desc: 'The complete performance ecosystem for committed athletes demanding top-tier results.',
    annualPrice: '$5,000',
    annualPeriod: '/ year ($416/mo)',
    monthlyPrice: '$450',
    monthlyPeriod: '/ month billed monthly',
    featured: true,
    buttonText: 'JOIN FORGE PRO',
    features: [
      '24/7 Biometric keycard access',
      'Unlimited access to all Vanguard classes',
      'Full Contrast Recovery Zone (Sauna + Cold Plunge)',
      'Monthly 1-on-1 coaching session & form review',
      'Personalized nutrition & macronutrient architecture',
      'Bi-weekly InBody composition scans',
      'Complimentary guest pass every month'
    ]
  },
  {
    id: 'titan-elite',
    name: 'TITAN ELITE',
    desc: 'The ultimate bespoke experience with unlimited private coaching and VIP amenities.',
    annualPrice: '$11,999',
    annualPeriod: '/ year ($999/mo)',
    monthlyPrice: '$1,150',
    monthlyPeriod: '/ month billed monthly',
    featured: false,
    buttonText: 'APPLY FOR TITAN',
    features: [
      'All Forge Pro benefits included',
      'Unlimited 1-on-1 private coaching sessions',
      'Dedicated VIP locker with custom laundry service',
      'Quarterly bloodwork & metabolic panel analysis',
      'Private recovery suite reservations',
      'Custom engraved lifting belt and apparel kit',
      'Priority worldwide access across partner clubs'
    ]
  }
];

export const TRANSFORMATIONS_DATA = [
  {
    name: 'Marcus K.',
    program: 'HYPERTROPHY & BODY RECOMPOSITION',
    duration: '16 Weeks',
    stat1: '-18 KG',
    lbl1: 'Body Fat',
    stat2: '+8.4 KG',
    lbl2: 'Lean Muscle',
    image: '/images/transformation_male.jpg',
    quote: 'The coaching team stripped away the gimmicks and built a system based on biomechanics and consistency.'
  },
  {
    name: 'James L.',
    program: 'POWERLIFTING PEAK PROTOCOL',
    duration: '24 Weeks',
    stat1: '+190 KG',
    lbl1: 'Total Increase',
    stat2: '610 KG',
    lbl2: 'Competition Total',
    image: '/images/hero_athlete.jpg',
    quote: 'Squat jumped from 160kg to 235kg with zero joint pain thanks to their stance adjustments.'
  },
  {
    name: 'Elena S.',
    program: 'ATHLETIC SPEED & METABOLIC COND.',
    duration: '12 Weeks',
    stat1: '-12% BF',
    lbl1: 'Body Composition',
    stat2: '+32%',
    lbl2: 'Power Output',
    image: '/images/trainer_elena.jpg',
    quote: 'IronForge redefined my physical ceiling. The energy in this facility is unlike anywhere on earth.'
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: 1,
    quote: "IronForge is not just another luxury gym. It's an unyielding sanctuary. The caliber of equipment, from calibrated plates to custom racks, has taken my deadlift from 240kg to 310kg.",
    author: 'David Sterling',
    role: 'National Powerlifting Champion',
    avatar: '/images/trainer_marcus.jpg',
    stars: 5,
    sample: false
  },
  {
    id: 2,
    quote: "The contrast therapy suite and coaches saved my athletic career. After shoulder surgery, their biomechanical approach helped me rebuild stronger and faster than before.",
    author: 'Marcus Vance Jr.',
    role: 'Competitive CrossFit & Hyrox Athlete',
    avatar: '/images/trainer_david.jpg',
    stars: 5,
    sample: false
  },
  {
    id: 3,
    quote: "The culture here is electric. No one is on their phone wasting time. Everyone is here with pure intent. It commands your respect the moment you step foot inside.",
    author: 'Rachel Campbell',
    role: 'IFBB Physique Competitor',
    avatar: '/images/trainer_sarah.jpg',
    stars: 5,
    sample: false
  }
];

export const SCHEDULE_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const SCHEDULE_DATA = [
  {
    id: 'mon-1',
    day: 'Monday',
    title: 'Barbell Hypertrophy Protocol',
    trainer: 'Marcus "Titan" Vance',
    time: '06:30 AM - 07:45 AM',
    duration: '75 min',
    intensity: 'High',
    seatsAvailable: 4,
    totalSeats: 16
  },
  {
    id: 'mon-2',
    day: 'Monday',
    title: 'Olympic Snatch Mechanics',
    trainer: 'David Chen',
    time: '12:00 PM - 01:15 PM',
    duration: '75 min',
    intensity: 'High',
    seatsAvailable: 6,
    totalSeats: 12
  },
  {
    id: 'mon-3',
    day: 'Monday',
    title: 'Metabolic Turf Sleds',
    trainer: 'Sarah Jenkins',
    time: '06:00 PM - 07:00 PM',
    duration: '60 min',
    intensity: 'Maximum',
    seatsAvailable: 2,
    totalSeats: 20
  },
  {
    id: 'tue-1',
    day: 'Tuesday',
    title: 'Posterior Chain & Deadlift Mastery',
    trainer: 'Marcus "Titan" Vance',
    time: '07:00 AM - 08:15 AM',
    duration: '75 min',
    intensity: 'High',
    seatsAvailable: 5,
    totalSeats: 14
  },
  {
    id: 'tue-2',
    day: 'Tuesday',
    title: 'Contrast Hydro & Fascial Reset',
    trainer: 'Sarah Jenkins',
    time: '05:30 PM - 06:45 PM',
    duration: '75 min',
    intensity: 'Restorative',
    seatsAvailable: 8,
    totalSeats: 15
  },
  {
    id: 'wed-1',
    day: 'Wednesday',
    title: 'Upper Body Symmetry & Tension',
    trainer: 'Elena Rostova',
    time: '06:30 AM - 07:45 AM',
    duration: '75 min',
    intensity: 'High',
    seatsAvailable: 3,
    totalSeats: 18
  },
  {
    id: 'wed-2',
    day: 'Wednesday',
    title: 'Clean & Jerk Velocity Workshop',
    trainer: 'David Chen',
    time: '06:00 PM - 07:15 PM',
    duration: '75 min',
    intensity: 'High',
    seatsAvailable: 4,
    totalSeats: 12
  },
  {
    id: 'thu-1',
    day: 'Thursday',
    title: 'Combat Rotational Power Drills',
    trainer: 'Sarah Jenkins',
    time: '07:00 AM - 08:00 AM',
    duration: '60 min',
    intensity: 'Maximum',
    seatsAvailable: 7,
    totalSeats: 16
  },
  {
    id: 'thu-2',
    day: 'Thursday',
    title: 'Squat Biomechanics & Peaking',
    trainer: 'Marcus "Titan" Vance',
    time: '05:30 PM - 07:00 PM',
    duration: '90 min',
    intensity: 'High',
    seatsAvailable: 3,
    totalSeats: 14
  },
  {
    id: 'fri-1',
    day: 'Friday',
    title: 'Full Body Vanguard Conditioning',
    trainer: 'Elena Rostova',
    time: '06:30 AM - 07:45 AM',
    duration: '75 min',
    intensity: 'Maximum',
    seatsAvailable: 5,
    totalSeats: 20
  },
  {
    id: 'fri-2',
    day: 'Friday',
    title: 'Heavy Bag Striking & Core Torque',
    trainer: 'Sarah Jenkins',
    time: '06:00 PM - 07:15 PM',
    duration: '75 min',
    intensity: 'High',
    seatsAvailable: 6,
    totalSeats: 18
  },
  {
    id: 'sat-1',
    day: 'Saturday',
    title: 'Weekend Iron Brotherhood PR Session',
    trainer: 'Marcus Vance & David Chen',
    time: '09:00 AM - 11:00 AM',
    duration: '120 min',
    intensity: 'Maximum',
    seatsAvailable: 2,
    totalSeats: 25
  },
  {
    id: 'sat-2',
    day: 'Saturday',
    title: 'Full Spectrum Contrast Recovery',
    trainer: 'Sarah Jenkins',
    time: '03:00 PM - 04:30 PM',
    duration: '90 min',
    intensity: 'Restorative',
    seatsAvailable: 10,
    totalSeats: 16
  },
  {
    id: 'sun-1',
    day: 'Sunday',
    title: 'Restorative Mobility & Sauna Flow',
    trainer: 'Elena Rostova',
    time: '10:00 AM - 11:30 AM',
    duration: '90 min',
    intensity: 'Low',
    seatsAvailable: 8,
    totalSeats: 20
  }
];

export const FAQ_DATA = [
  {
    id: 'faq-1',
    question: 'How is IRONFORGE different from commercial luxury gyms?',
    answer: 'Unlike commercial gyms that prioritize vanity machines and overcrowded cardio rows, IRONFORGE is engineered for true athletic performance. We provide calibrated competition plates, custom 11-gauge steel power racks, Eleiko barbells, competition wood platforms, and master coaches who actively compete in strength disciplines.'
  },
  {
    id: 'faq-2',
    question: 'Do I need advanced strength experience to join?',
    answer: 'Not at all. While our facility adheres to elite standards, every new member receives an individualized biomechanical assessment and movement orientation. We cater to disciplined beginners seeking to learn correct technique as well as competitive athletes.'
  },
  {
    id: 'faq-3',
    question: 'What are the facility access hours?',
    answer: 'Members with Forge Pro and Titan Elite memberships have 24/7 biometric key access every day of the year. Standard Iron Basic access and staffed operational hours are Monday through Sunday, 5:00 AM to 11:00 PM.'
  },
  {
    id: 'faq-4',
    question: 'What does the Contrast Recovery Zone include?',
    answer: 'Our contrast recovery suite features a custom Finnish cedar infrared sauna heated to 195°F, paired with dual stainless steel cold plunge tubs maintained at a precise 42°F, alongside Normatec compression systems and dedicated stretching turf.'
  },
  {
    id: 'faq-5',
    question: 'Can I test the facility before committing to a membership?',
    answer: 'Yes. We offer a 7-Day VIP Access Pass for prospective members, as well as private facility walk-throughs and consultations with our Head of Strength.'
  }
];
