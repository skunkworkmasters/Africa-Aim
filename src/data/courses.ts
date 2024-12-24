// src/data/courses.ts
import { Course } from '../types/courses';

export const courses: Course[] = [
  // Existing Courses
  {
    id: '1',
    title: 'Machine Learning for Agriculture',
    provider: 'AgriTech Academy',
    verified: true,
    description: 'Learn how to apply machine learning techniques to solve agricultural challenges in Africa. Hands-on experience with real datasets.',
    thumbnail: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=400',
    type: 'Remote',
    location: 'Nairobi, Kenya',
    country: 'Kenya',
    countryCode: 'KE',
    industry: 'Agriculture',
    technologies: ['ML', 'Python', 'TensorFlow'],
    duration: '12 weeks',
    price: 37,
    originalPrice: 82,
    discount: 45,
    certificate: true,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-02-20T15:30:00Z',
    curriculum: [
      'Introduction to ML',
      'Data Collection & Preprocessing',
      'Model Training',
      'Deployment',
    ],
    objectives: [
      'Understand ML fundamentals',
      'Build agricultural ML models',
      'Deploy solutions in production',
    ],
    prerequisites: [
      'Basic Python knowledge',
      'Statistics fundamentals',
    ],
    instructor: {
      name: 'Dr. Sarah Kimani',
      title: 'AI Research Lead',
      bio: 'Expert in agricultural AI applications with over 10 years of experience.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop',
    },
    reviews: {
      rating: 4.8,
      count: 156,
      items: [
        {
          id: '1',
          user: 'John M.',
          rating: 5,
          comment: 'Excellent course with practical examples',
          date: '2024-02-15T10:00:00Z',
        },
      ],
    },
    schedule: {
      startDate: '2024-04-01T00:00:00Z',
      endDate: '2024-06-24T00:00:00Z',
      sessions: [
        {
          day: 'Monday',
          time: '10:00 AM - 12:00 PM EAT',
        },
        {
          day: 'Wednesday',
          time: '10:00 AM - 12:00 PM EAT',
        },
      ],
    },
  },
  {
    id: '2',
    title: 'Healthcare AI & ML',
    provider: 'MediTech Institute',
    verified: true,
    description: 'Master AI applications in healthcare, from diagnosis to treatment planning.',
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400',
    type: 'Hybrid',
    location: 'Lagos, Nigeria',
    country: 'Nigeria',
    countryCode: 'NG',
    industry: 'Healthcare',
    technologies: ['Deep Learning', 'Python', 'PyTorch'],
    duration: '16 weeks',
    price: 78,
    originalPrice: 135,
    discount: 57,
    certificate: true,
    createdAt: '2024-02-01T10:00:00Z',
    updatedAt: '2024-03-01T15:30:00Z',
    curriculum: [
      'Medical Image Analysis',
      'Clinical Data Processing',
      'Diagnostic Models',
      'Deployment in Healthcare',
    ],
    objectives: [
      'Build medical imaging models',
      'Process clinical data',
      'Deploy healthcare AI solutions',
    ],
    prerequisites: [
      'Python programming',
      'Basic ML knowledge',
      'Healthcare background preferred',
    ],
    instructor: {
      name: 'Dr. Oluwaseun Adebayo',
      title: 'Medical AI Specialist',
      bio: 'Leading researcher in medical AI with clinical experience.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop',
    },
    reviews: {
      rating: 4.9,
      count: 89,
      items: [
        {
          id: '1',
          user: 'Sarah K.',
          rating: 5,
          comment: 'Comprehensive coverage of healthcare AI',
          date: '2024-03-01T10:00:00Z',
        },
      ],
    },
    schedule: {
      startDate: '2024-05-01T00:00:00Z',
      endDate: '2024-08-24T00:00:00Z',
      sessions: [
        {
          day: 'Tuesday',
          time: '2:00 PM - 4:00 PM WAT',
        },
        {
          day: 'Thursday',
          time: '2:00 PM - 4:00 PM WAT',
        },
      ],
    },
  },
  
  // Add 20 more course objects here...
  
  // Example of additional course entries:
  {
    id: '3',
    title: 'Financial Analytics with Python',
    provider: 'FinanceTech Academy',
    verified: true,
    description: 'Dive deep into financial data analysis using Python and gain insights for investment strategies.',
    thumbnail: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&q=80&w=400',
    type: 'Remote',
    location: 'Accra, Ghana',
    country: 'Ghana',
    countryCode: 'GH',
    industry: 'Finance',
    technologies: ['Python', 'Pandas', 'NumPy'],
    duration: '10 weeks',
    price: 120,
    originalPrice: 199,
    discount: 79,
    certificate: true,
    createdAt: '2024-03-10T09:00:00Z',
    updatedAt: '2024-04-15T13:00:00Z',
    curriculum: [
      'Introduction to Financial Analytics',
      'Data Manipulation with Pandas',
      'Statistical Analysis',
      'Building Financial Models',
      'Data Visualization',
    ],
    objectives: [
      'Master data analysis techniques',
      'Build and interpret financial models',
      'Visualize complex financial data effectively',
    ],
    prerequisites: [
      'Basic Python programming',
      'Understanding of financial concepts',
    ],
    instructor: {
      name: 'Ms. Amina Yusuf',
      title: 'Financial Data Analyst',
      bio: 'Experienced financial analyst with expertise in Python-based analytics.',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop',
    },
    reviews: {
      rating: 4.7,
      count: 98,
      items: [
        {
          id: '1',
          user: 'James T.',
          rating: 5,
          comment: 'Great course with real-world financial examples',
          date: '2024-04-10T10:00:00Z',
        },
      ],
    },
    schedule: {
      startDate: '2024-06-01T00:00:00Z',
      endDate: '2024-08-10T00:00:00Z',
      sessions: [
        {
          day: 'Monday',
          time: '1:00 PM - 3:00 PM GMT',
        },
        {
          day: 'Wednesday',
          time: '1:00 PM - 3:00 PM GMT',
        },
      ],
    },
  },
  // Continuing from courses.ts
{
  id: '4',
  title: 'Data Science in Healthcare',
  provider: 'HealthData Institute',
  verified: true,
  description: 'Apply data science methodologies to healthcare data for improved patient outcomes.',
  thumbnail: 'https://images.unsplash.com/photo-1581091012184-805e4a1f2a9d?auto=format&fit=crop&q=80&w=400',
  type: 'Hybrid',
  location: 'Kampala, Uganda',
  country: 'Uganda',
  countryCode: 'UG',
  industry: 'Healthcare',
  technologies: ['R', 'Machine Learning', 'Data Visualization'],
  duration: '14 weeks',
  price: 55,
  originalPrice: 89,
  discount: 35,
  certificate: true,
  createdAt: '2024-04-05T11:00:00Z',
  updatedAt: '2024-05-10T16:00:00Z',
  curriculum: [
    'Data Cleaning and Preparation',
    'Exploratory Data Analysis',
    'Predictive Modeling',
    'Visualizing Healthcare Data',
    'Deploying Data Science Solutions',
  ],
  objectives: [
    'Enhance data handling skills',
    'Develop predictive healthcare models',
    'Visualize and interpret healthcare data',
  ],
  prerequisites: [
    'Basic knowledge of R or Python',
    'Understanding of statistical concepts',
  ],
  instructor: {
    name: 'Dr. Emmanuel Okello',
    title: 'Data Scientist',
    bio: 'Specialist in healthcare data analytics with extensive research experience.',
    avatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=120&h=120&fit=crop',
  },
  reviews: {
    rating: 4.6,
    count: 112,
    items: [
      {
        id: '1',
        user: 'Linda M.',
        rating: 5,
        comment: 'Transformed my approach to healthcare data',
        date: '2024-05-15T11:30:00Z',
      },
    ],
  },
  schedule: {
    startDate: '2024-07-01T00:00:00Z',
    endDate: '2024-09-15T00:00:00Z',
    sessions: [
      {
        day: 'Tuesday',
        time: '3:00 PM - 5:00 PM EAT',
      },
      {
        day: 'Thursday',
        time: '3:00 PM - 5:00 PM EAT',
      },
    ],
  },
},
{
  id: '5',
  title: 'Financial Modeling with Excel',
  provider: 'FinancePro Academy',
  verified: true,
  description: 'Develop advanced financial models using Excel for investment analysis and business planning.',
  thumbnail: 'https://images.unsplash.com/photo-1581090700227-9e9616ac5d3c?auto=format&fit=crop&q=80&w=400',
  type: 'In-Person',
  location: 'Cairo, Egypt',
  country: 'Egypt',
  countryCode: 'EG',
  industry: 'Finance',
  technologies: ['Python', 'PowerBI', 'Financial Analysis'],
  duration: '8 weeks',
  price: 37,
  originalPrice: 115,
  discount: 78,
  certificate: true,
  createdAt: '2024-05-10T10:00:00Z',
  updatedAt: '2024-06-15T14:00:00Z',
  curriculum: [
    'ML for Financial Analysis',
    'Building Financial Statements',
    'Valuation Techniques',
    'Automating Tasks with AI',
  ],
  objectives: [
    'Master financial modeling in PowerBI',
    'Analyze and interpret financial data',
    'Automate repetitive tasks using Python',
  ],
  prerequisites: [
    'Basic knowledge of PowerBI',
    'Understanding of financial concepts',
  ],
  instructor: {
    name: 'Mr. Ahmed El-Sayed',
    title: 'Financial Analyst',
    bio: 'Experienced financial analyst specializing in Excel-based financial modeling.',
    avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=120&h=120&fit=crop',
  },
  reviews: {
    rating: 4.7,
    count: 85,
    items: [
      {
        id: '1',
        user: 'Khalid A.',
        rating: 5,
        comment: 'Practical and comprehensive financial modeling course',
        date: '2024-06-10T12:00:00Z',
      },
    ],
  },
  schedule: {
    startDate: '2024-08-01T00:00:00Z',
    endDate: '2024-09-26T00:00:00Z',
    sessions: [
      {
        day: 'Monday',
        time: '9:00 AM - 12:00 PM EET',
      },
      {
        day: 'Wednesday',
        time: '9:00 AM - 12:00 PM EET',
      },
    ],
  },
},
{
  id: '6',
  title: 'Data Engineering with Spark',
  provider: 'DataMasters',
  verified: true,
  description: 'Learn to build scalable data pipelines and process large datasets using Apache Spark.',
  thumbnail: 'https://www.pexels.com/photo/person-holding-mug-and-mobile-phone-6802052/?auto=format&fit=crop&q=80&w=400',
  type: 'Remote',
  location: 'Johannesburg, South Africa',
  country: 'South Africa',
  countryCode: 'ZA',
  industry: 'Technology',
  technologies: ['Apache Spark', 'Scala', 'Big Data'],
  duration: '10 weeks',
  price: 25,
  originalPrice: 81,
  discount: 56,
  certificate: true,
  createdAt: '2024-06-01T11:00:00Z',
  updatedAt: '2024-07-10T15:30:00Z',
  curriculum: [
    'Introduction to Data Engineering',
    'Building Data Pipelines',
    'Real-time Data Processing',
    'Optimizing Spark Jobs',
  ],
  objectives: [
    'Understand data engineering principles',
    'Build efficient data pipelines with Spark',
    'Process real-time data streams',
  ],
  prerequisites: [
    'Basic programming skills',
    'Understanding of databases',
  ],
  instructor: {
    name: 'Ms. Thandi Nkosi',
    title: 'Senior Data Engineer',
    bio: 'Expert in big data technologies and scalable data solutions.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop',
  },
  reviews: {
    rating: 4.5,
    count: 95,
    items: [
      {
        id: '1',
        user: 'Peter N.',
        rating: 5,
        comment: 'In-depth coverage of Spark and practical projects',
        date: '2024-07-10T15:30:00Z',
      },
    ],
  },
  schedule: {
    startDate: '2024-09-01T00:00:00Z',
    endDate: '2024-11-10T00:00:00Z',
    sessions: [
      {
        day: 'Tuesday',
        time: '1:00 PM - 4:00 PM SAST',
      },
      {
        day: 'Thursday',
        time: '1:00 PM - 4:00 PM SAST',
      },
    ],
  },
},
// Continue adding courses up to id: 25

];

