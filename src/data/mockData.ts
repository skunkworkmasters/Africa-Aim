import { ServiceData, ProviderData } from '../types/sliders';

// Mock data for services (previously from marketplace.ts)
export const mockServiceData: ServiceData[] = [
  {
    id: 1,
    title: "AI-Powered Data Analysis",
    provider: "TechAfrica",
    description: "Comprehensive data analysis using advanced AI algorithms to extract insights from your business data.",
    categories: ["Data Analysis", "Business Intelligence"],
    type: "Service",
    region: "East Africa",
    country: "Kenya",
    city: "Nairobi",
    tags: ["AI", "Data Analysis", "Business Intelligence"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  },
  {
    id: 2,
    title: "Custom AI Model Development",
    provider: "AI Innovate",
    description: "Tailored AI model development for specific business needs and use cases.",
    categories: ["AI Development", "Machine Learning"],
    type: "Development",
    region: "West Africa",
    country: "Nigeria",
    city: "Lagos",
    tags: ["AI", "Machine Learning", "Custom Development"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  },
  {
    id: 3,
    title: "AI Integration Services",
    provider: "DataSense",
    description: "Seamless integration of AI solutions with your existing business systems and workflows.",
    categories: ["System Integration", "AI Implementation"],
    type: "Integration",
    region: "Southern Africa",
    country: "South Africa",
    city: "Johannesburg",
    tags: ["AI", "Integration", "Systems"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  },
  {
    id: 4,
    title: "AI Strategy Consulting",
    provider: "Cairo AI Labs",
    description: "Strategic consulting to help businesses leverage AI for competitive advantage.",
    categories: ["Consulting", "Strategy"],
    type: "Consulting",
    region: "North Africa",
    country: "Egypt",
    city: "Cairo",
    tags: ["AI", "Strategy", "Consulting"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  },
  {
    id: 5,
    title: "Computer Vision Solutions",
    provider: "AI Vision Pro",
    description: "Advanced computer vision solutions for object detection, recognition, and analysis.",
    categories: ["Computer Vision", "Image Processing"],
    type: "Specialized",
    region: "North Africa",
    country: "Morocco",
    city: "Casablanca",
    tags: ["AI", "Computer Vision", "Image Processing"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  },
  {
    id: 6,
    title: "NLP & Text Analytics",
    provider: "ML Masters",
    description: "Natural language processing and text analytics services for understanding customer feedback and sentiment.",
    categories: ["NLP", "Text Analytics"],
    type: "Specialized",
    region: "East Africa",
    country: "Rwanda",
    city: "Kigali",
    tags: ["AI", "NLP", "Text Analytics"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  },
  {
    id: 7,
    title: "AI-Powered Chatbots",
    provider: "BotGenius",
    description: "Intelligent chatbots for customer service, lead generation, and process automation.",
    categories: ["Chatbots", "Customer Service"],
    type: "Service",
    region: "West Africa",
    country: "Ghana",
    city: "Accra",
    tags: ["AI", "Chatbots", "Automation"],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  },
  {
    id: 8,
    title: "Predictive Analytics",
    provider: "DataSense",
    description: "Predictive analytics services to forecast trends and make data-driven decisions.",
    categories: ["Predictive Analytics", "Forecasting"],
    type: "Service",
    region: "Southern Africa",
    country: "South Africa",
    city: "Johannesburg",
    tags: ["AI", "Predictive Analytics", "Forecasting"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  }
];

// Mock data for providers (previously from providers.ts)
export const mockProviderData: ProviderData[] = [
  {
    id: "1",
    name: "TechAfrica Solutions",
    logo: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    type: "Enterprise",
    verified: true,
    sponsored: true,
    description: "Leading provider of enterprise AI solutions across East Africa.",
    rating: 4.8,
    reviewCount: 156,
    services: ["AI Development", "Data Analytics", "System Integration"],
    categories: ["Enterprise", "AI Solutions"],
    priceRange: [500, 5000],
    languages: ["English", "Swahili"],
    location: "Nairobi, Kenya"
  },
  {
    id: "2",
    name: "AI Innovate Lagos",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    type: "Startup",
    verified: true,
    sponsored: false,
    description: "Innovative AI startup focused on developing cutting-edge solutions for West African businesses.",
    rating: 4.6,
    reviewCount: 89,
    services: ["Computer Vision", "NLP", "AI Consulting"],
    categories: ["Startup", "AI Solutions"],
    priceRange: [200, 2000],
    languages: ["English", "Yoruba"],
    location: "Lagos, Nigeria"
  },
  {
    id: "3",
    name: "Cairo AI Labs",
    logo: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    type: "Enterprise",
    verified: true,
    sponsored: true,
    description: "Premier research laboratory specializing in advanced AI research and development.",
    rating: 4.9,
    reviewCount: 201,
    services: ["AI Research", "Prototype Development", "AI Consulting"],
    categories: ["Research", "AI Development"],
    priceRange: [1000, 10000],
    languages: ["English", "Arabic"],
    location: "Cairo, Egypt"
  },
  {
    id: "4",
    name: "DataSense",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    type: "Enterprise",
    verified: true,
    sponsored: false,
    description: "Comprehensive data and AI solutions provider for businesses across Africa.",
    rating: 4.7,
    reviewCount: 142,
    services: ["Data Analytics", "Predictive Modeling", "Business Intelligence"],
    categories: ["Enterprise", "Data Analytics"],
    priceRange: [800, 8000],
    languages: ["English", "Afrikaans", "Zulu"],
    location: "Johannesburg, South Africa"
  },
  {
    id: "5",
    name: "AI Vision Pro",
    logo: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    type: "Startup",
    verified: true,
    sponsored: false,
    description: "Specialized in computer vision and image processing solutions for various industries.",
    rating: 4.8,
    reviewCount: 78,
    services: ["Computer Vision", "Image Processing", "Object Detection"],
    categories: ["Specialized", "Computer Vision"],
    priceRange: [500, 5000],
    languages: ["English", "French", "Arabic"],
    location: "Casablanca, Morocco"
  },
  {
    id: "6",
    name: "ML Masters",
    logo: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    type: "Startup",
    verified: true,
    sponsored: true,
    description: "Specializing in machine learning training and development for African professionals.",
    rating: 4.9,
    reviewCount: 112,
    services: ["ML Training", "Model Development", "AI Implementation"],
    categories: ["Training", "Machine Learning"],
    priceRange: [300, 3000],
    languages: ["English", "French", "Kinyarwanda"],
    location: "Kigali, Rwanda"
  }
];
