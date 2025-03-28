// src/data/datasets.ts
import { Dataset } from '../types/hub';

export const datasets: Dataset[] = [
  // Existing Dataset
  {
    id: '1',
    name: 'AgriTechResearch/CropDiseaseDetection',
    owner: 'AgriTech Research',
    description: 'Comprehensive dataset of African crop images for disease detection and yield prediction. Includes annotations and metadata.',
    type: 'Image',
    format: 'ZIP',
    industry: 'Agriculture',
    language: 'English',
    country: 'Kenya',
    downloads: 856,
    likes: 124,
    createdAt: '2024-01-10T08:00:00Z',
    updatedAt: '2024-02-15T14:30:00Z',
    size: '2147483648', // 2GB
  },

  // New Datasets Start Here

  // Healthcare
  {
    id: '2',
    name: 'HealthDataLabs/PatientRecords',
    owner: 'HealthData Labs',
    description: 'A comprehensive collection of patient records for disease diagnosis and treatment outcome analysis.',
    type: 'Text',
    format: 'CSV',
    industry: 'Healthcare',
    language: 'English',
    country: 'Nigeria',
    downloads: 1024,
    likes: 250,
    createdAt: '2024-02-05T09:30:00Z',
    updatedAt: '2024-03-10T11:45:00Z',
    size: '536870912', // 512MB
  },
  {
    id: '3',
    name: 'MediTech/ElectronicHealthRecords',
    owner: 'MediTech Solutions',
    description: 'Electronic Health Records dataset for developing AI models in patient monitoring and predictive healthcare.',
    type: 'Text',
    format: 'JSON',
    industry: 'Healthcare',
    language: 'English',
    country: 'South Africa',
    downloads: 768,
    likes: 180,
    createdAt: '2024-02-20T10:15:00Z',
    updatedAt: '2024-03-25T16:00:00Z',
    size: '1073741824', // 1GB
  },

  // Finance
  {
    id: '4',
    name: 'FinanceAnalytics/TransactionData',
    owner: 'FinanceAnalytics Corp',
    description: 'Anonymized financial transaction data for fraud detection and risk assessment in banking.',
    type: 'Transaction',
    format: 'CSV',
    industry: 'Finance',
    language: 'English',
    country: 'Egypt',
    downloads: 950,
    likes: 200,
    createdAt: '2024-03-01T08:45:00Z',
    updatedAt: '2024-04-10T13:20:00Z',
    size: '1610612736', // 1.5GB
  },
  {
    id: '5',
    name: 'FinTechSolutions/MarketTrends',
    owner: 'FinTech Solutions',
    description: 'Market trends and investment data for developing predictive analytics models in finance.',
    type: 'Market Data',
    format: 'JSON',
    industry: 'Finance',
    language: 'English',
    country: 'Kenya',
    downloads: 640,
    likes: 150,
    createdAt: '2024-03-15T12:00:00Z',
    updatedAt: '2024-04-20T15:30:00Z',
    size: '1073741824', // 1GB
  },

  // Education
  {
    id: '6',
    name: 'EduResearch/StudentPerformance',
    owner: 'EduResearch Institute',
    description: 'Dataset containing student performance metrics for developing educational AI models and personalized learning systems.',
    type: 'Numeric',
    format: 'CSV',
    industry: 'Education',
    language: 'English',
    country: 'Ghana',
    downloads: 800,
    likes: 160,
    createdAt: '2024-04-01T09:00:00Z',
    updatedAt: '2024-05-05T10:30:00Z',
    size: '536870912', // 512MB
  },
  {
    id: '7',
    name: 'LanguageAI/LearnSwahili',
    owner: 'LanguageAI Labs',
    description: 'Swahili language learning dataset comprising text, audio, and interactive exercises for NLP model development.',
    type: 'Multimedia',
    format: 'ZIP',
    industry: 'Education',
    language: 'Swahili',
    country: 'Tanzania',
    downloads: 720,
    likes: 140,
    createdAt: '2024-04-20T11:15:00Z',
    updatedAt: '2024-05-25T14:45:00Z',
    size: '2147483648', // 2GB
  },

  // Manufacturing
  {
    id: '8',
    name: 'ManufacturingData/ProductionLines',
    owner: 'ManufacturingData Inc',
    description: 'Dataset of manufacturing production line metrics for optimizing operations and predictive maintenance.',
    type: 'Sensor Data',
    format: 'CSV',
    industry: 'Manufacturing',
    language: 'English',
    country: 'Ethiopia',
    downloads: 680,
    likes: 130,
    createdAt: '2024-05-01T10:30:00Z',
    updatedAt: '2024-06-10T12:00:00Z',
    size: '1073741824', // 1GB
  },
  {
    id: '9',
    name: 'AutoManufacture/QualityInspection',
    owner: 'AutoManufacture Ltd',
    description: 'High-resolution images and annotations for automated quality inspection in automotive manufacturing.',
    type: 'Image',
    format: 'JPEG',
    industry: 'Manufacturing',
    language: 'English',
    country: 'South Africa',
    downloads: 540,
    likes: 110,
    createdAt: '2024-05-15T13:45:00Z',
    updatedAt: '2024-06-20T16:30:00Z',
    size: '3221225472', // 3GB
  },

  // Retail
  {
    id: '10',
    name: 'RetailData/CustomerBehavior',
    owner: 'RetailData Analytics',
    description: 'Customer behavior dataset including purchase history, demographics, and browsing patterns for retail analytics.',
    type: 'Transactional',
    format: 'CSV',
    industry: 'Retail',
    language: 'English',
    country: 'Egypt',
    downloads: 920,
    likes: 210,
    createdAt: '2024-06-01T09:20:00Z',
    updatedAt: '2024-07-05T11:50:00Z',
    size: '1610612736', // 1.5GB
  },
  {
    id: '11',
    name: 'FashionTech/FashionTrends',
    owner: 'FashionTech Innovations',
    description: 'Dataset of fashion trends, including images, sales data, and consumer preferences for trend analysis models.',
    type: 'Image & Text',
    format: 'ZIP',
    industry: 'Retail',
    language: 'English',
    country: 'Nigeria',
    downloads: 810,
    likes: 190,
    createdAt: '2024-06-15T14:10:00Z',
    updatedAt: '2024-07-20T17:00:00Z',
    size: '3221225472', // 3GB
  },

  // Transportation
  {
    id: '12',
    name: 'TransportData/PublicTransit',
    owner: 'TransportData Corp',
    description: 'Comprehensive data on public transit routes, schedules, and ridership for transportation optimization models.',
    type: 'Geospatial',
    format: 'JSON',
    industry: 'Transportation',
    language: 'English',
    country: 'Kenya',
    downloads: 700,
    likes: 160,
    createdAt: '2024-07-01T10:00:00Z',
    updatedAt: '2024-08-05T14:25:00Z',
    size: '1073741824', // 1GB
  },
  {
    id: '13',
    name: 'LogisticsAI/FleetMaintenance',
    owner: 'LogisticsAI Solutions',
    description: 'Predictive maintenance dataset for transportation fleets, including vehicle sensor data and maintenance logs.',
    type: 'Sensor Data',
    format: 'CSV',
    industry: 'Transportation',
    language: 'English',
    country: 'Egypt',
    downloads: 650,
    likes: 145,
    createdAt: '2024-07-10T09:00:00Z',
    updatedAt: '2024-08-15T13:35:00Z',
    size: '536870912', // 512MB
  },

  // Insurance
  {
    id: '14',
    name: 'InsuranceData/RiskAssessment',
    owner: 'InsuranceData Analytics',
    description: 'Anonymized insurance claims and risk assessment data for developing AI models in the insurance sector.',
    type: 'Transactional',
    format: 'CSV',
    industry: 'Insurance',
    language: 'English',
    country: 'Ghana',
    downloads: 730,
    likes: 175,
    createdAt: '2024-08-01T11:30:00Z',
    updatedAt: '2024-09-05T15:00:00Z',
    size: '1073741824', // 1GB
  },
  {
    id: '15',
    name: 'InsuranceAI/ClaimProcessing',
    owner: 'InsuranceAI Labs',
    description: 'Natural Language Processing dataset for automating insurance claim processing and customer support.',
    type: 'Text',
    format: 'JSON',
    industry: 'Insurance',
    language: 'English',
    country: 'Nigeria',
    downloads: 590,
    likes: 130,
    createdAt: '2024-08-15T12:45:00Z',
    updatedAt: '2024-09-25T16:10:00Z',
    size: '536870912', // 512MB
  },

  // Telecom
  {
    id: '16',
    name: 'TelecomData/NetworkPerformance',
    owner: 'TelecomData Solutions',
    description: 'Dataset containing network performance metrics and customer usage data for optimizing telecom services.',
    type: 'Geospatial',
    format: 'CSV',
    industry: 'Telecom',
    language: 'English',
    country: 'South Africa',
    downloads: 880,
    likes: 220,
    createdAt: '2024-09-01T10:30:00Z',
    updatedAt: '2024-10-05T14:00:00Z',
    size: '1610612736', // 1.5GB
  },
  {
    id: '17',
    name: 'SupportAI/CustomerSupportNLP',
    owner: 'SupportAI Solutions',
    description: 'Natural Language Processing dataset for enhancing customer support interactions in telecom call centers.',
    type: 'Text',
    format: 'JSON',
    industry: 'Telecom',
    language: 'Swahili',
    country: 'Kenya',
    downloads: 610,
    likes: 155,
    createdAt: '2024-09-10T09:15:00Z',
    updatedAt: '2024-10-25T16:45:00Z',
    size: '536870912', // 512MB
  },

  // Water
  {
    id: '18',
    name: 'WaterTech/WaterQuality',
    owner: 'WaterTech Solutions',
    description: 'Computer Vision dataset for monitoring water quality and detecting contaminants in real-time.',
    type: 'Image',
    format: 'JPEG',
    industry: 'Water',
    language: 'French',
    country: 'Senegal',
    downloads: 450,
    likes: 95,
    createdAt: '2024-10-01T08:30:00Z',
    updatedAt: '2024-11-05T11:45:00Z',
    size: '3221225472', // 3GB
  },
  {
    id: '19',
    name: 'HydroAnalytics/PredictWaterDemand',
    owner: 'HydroAnalytics Ltd.',
    description: 'Predictive Analytics dataset for forecasting water demand and optimizing distribution in urban areas.',
    type: 'Time Series',
    format: 'CSV',
    industry: 'Water',
    language: 'Arabic',
    country: 'Egypt',
    downloads: 500,
    likes: 120,
    createdAt: '2024-10-10T10:00:00Z',
    updatedAt: '2024-11-15T14:30:00Z',
    size: '1073741824', // 1GB
  },

  // Mining
  {
    id: '20',
    name: 'MiningData/MineSafety',
    owner: 'MiningData Inc',
    description: 'Safety Monitoring dataset for tracking mining operations and ensuring worker safety through real-time data analysis.',
    type: 'Sensor Data',
    format: 'CSV',
    industry: 'Mining',
    language: 'English',
    country: 'Zambia',
    downloads: 560,
    likes: 130,
    createdAt: '2024-11-01T11:20:00Z',
    updatedAt: '2024-12-05T16:50:00Z',
    size: '1073741824', // 1GB
  },
  {
    id: '21',
    name: 'GeoMining/OreClassification',
    owner: 'GeoMining AI',
    description: 'Computer Vision dataset for identifying and classifying ore deposits in mining exploration.',
    type: 'Image',
    format: 'PNG',
    industry: 'Mining',
    language: 'English',
    country: 'South Africa',
    downloads: 480,
    likes: 100,
    createdAt: '2024-11-15T09:15:00Z',
    updatedAt: '2024-12-10T13:30:00Z',
    size: '2147483648', // 2GB
  },

  // Infrastructure
  {
    id: '22',
    name: 'InfrastructureAI/ProjectManagement',
    owner: 'BuildSmart Technologies',
    description: 'Project Management dataset for optimizing construction project workflows and resource allocation.',
    type: 'Task Data',
    format: 'CSV',
    industry: 'Infrastructure',
    language: 'English',
    country: 'Kenya',
    downloads: 620,
    likes: 160,
    createdAt: '2024-12-01T10:00:00Z',
    updatedAt: '2024-12-15T14:30:00Z',
    size: '536870912', // 512MB
  },
  {
    id: '23',
    name: 'CityAnalytics/UrbanTraffic',
    owner: 'CityAnalytics Ltd.',
    description: 'Predictive Analytics dataset for analyzing urban traffic patterns and optimizing infrastructure planning.',
    type: 'Time Series',
    format: 'JSON',
    industry: 'Infrastructure',
    language: 'Arabic',
    country: 'Egypt',
    downloads: 580,
    likes: 140,
    createdAt: '2024-12-10T12:00:00Z',
    updatedAt: '2024-12-25T16:15:00Z',
    size: '1073741824', // 1GB
  },
  {
    id: '24',
    name: 'PowerTech/EnergyGridMaintenance',
    owner: 'PowerTech Solutions',
    description: 'Predictive Maintenance dataset for enhancing energy grid management and predicting outages.',
    type: 'Sensor Data',
    format: 'CSV',
    industry: 'Infrastructure',
    language: 'English',
    country: 'South Africa',
    downloads: 600,
    likes: 150,
    createdAt: '2024-12-20T09:00:00Z',
    updatedAt: '2024-12-30T13:30:00Z',
    size: '1610612736', // 1.5GB
  },
];
