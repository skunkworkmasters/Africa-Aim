import { Model } from '../types/hub';

export const models: Model[] = [
  // Existing Models (Updated to follow naming convention)
  {
    id: '1',
    name: 'AgricultureAI/Green1-V1.0-70B',
    owner: 'TechFarm Solutions',
    description: 'Green1-V1.0-70B is a proprietary Computer Vision model for crop disease detection and yield prediction. Trained on diverse African crop datasets based on Kenya western highlands around Lake Victoria. You may contact us for contract on the use of this model.',
    type: 'Computer Vision',
    industry: 'Agriculture',
    language: 'English',
    country: 'Kenya',
    downloads: 21,
    likes: 15,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-02-20T15:30:00Z',
    huggingfaceUrl: 'https://huggingface.co/techfarm/agrivision',
  },
  {
    id: '2',
    name: 'EducationAI/SwahiliNLP-V1.0-50B',
    owner: 'Language AI Lab',
    description: 'SwahiliNLP-V1.0-50B is a Natural Language Processing model for Swahili text analysis, sentiment detection, and translation. Developed to enhance educational tools in Tanzania.',
    type: 'NLP',
    industry: 'Education',
    language: 'Swahili',
    country: 'Tanzania',
    downloads: 856,
    likes: 124,
    createdAt: '2024-01-20T08:00:00Z',
    updatedAt: '2024-02-25T14:30:00Z',
    huggingfaceUrl: 'https://huggingface.co/language-ai/swahili-nlp',
  },
  {
    id: '3',
    name: 'HealthcareAI/HealthDiagnose-V1.0-60B',
    owner: 'MediTech Africa',
    description: 'HealthDiagnose-V1.0-60B is a Multimodal AI model trained on African healthcare data for disease detection and risk assessment. Focused on improving healthcare outcomes in Nigeria.',
    type: 'Multimodal',
    industry: 'Healthcare',
    language: 'English',
    country: 'Nigeria',
    downloads: 567,
    likes: 78,
    createdAt: '2024-02-01T09:00:00Z',
    updatedAt: '2024-03-01T16:45:00Z',
    huggingfaceUrl: 'https://huggingface.co/meditech/health-diagnose',
  },

  // New Models (id:4 to id:23)

  // Healthcare
  {
    id: '4',
    name: 'HealthcareAI/MediPredict-V2.0-80B',
    owner: 'HealthAI Solutions',
    description: 'MediPredict-V2.0-80B is an advanced Predictive Analytics model for predicting patient outcomes and optimizing treatment plans. Trained on comprehensive healthcare datasets from Johannesburg, South Africa.',
    type: 'Predictive Analytics',
    industry: 'Healthcare',
    language: 'English',
    country: 'South Africa',
    downloads: 432,
    likes: 67,
    createdAt: '2024-03-10T11:00:00Z',
    updatedAt: '2024-04-15T12:30:00Z',
    huggingfaceUrl: 'https://huggingface.co/healthai/medipredict',
  },
  {
    id: '5',
    name: 'HealthcareAI/PharmaAssistNLP-V1.0-55B',
    owner: 'BioTech Innovators',
    description: 'PharmaAssistNLP-V1.0-55B is a Natural Language Processing model designed for pharmaceutical data analysis and drug discovery. Developed using datasets from Cairo, Egypt.',
    type: 'NLP',
    industry: 'Healthcare',
    language: 'Arabic',
    country: 'Egypt',
    downloads: 389,
    likes: 54,
    createdAt: '2024-03-18T10:30:00Z',
    updatedAt: '2024-04-20T14:00:00Z',
    huggingfaceUrl: 'https://huggingface.co/biotech/pharmaassist-nlp',
  },

  // Finance
  {
    id: '6',
    name: 'FinanceAI/FinSecureML-V1.0-65B',
    owner: 'SecureFin Technologies',
    description: 'FinSecureML-V1.0-65B is a Machine Learning model for fraud detection and risk assessment in financial transactions. Trained on data from Lagos, Nigeria.',
    type: 'Machine Learning',
    industry: 'Finance',
    language: 'English',
    country: 'Nigeria',
    downloads: 654,
    likes: 98,
    createdAt: '2024-04-05T09:15:00Z',
    updatedAt: '2024-05-10T13:45:00Z',
    huggingfaceUrl: 'https://huggingface.co/securefin/finsecurml',
  },
  {
    id: '7',
    name: 'FinanceAI/FinTrendAnalyzer-V1.0-70B',
    owner: 'AlphaFinance Labs',
    description: 'FinTrendAnalyzer-V1.0-70B is an AI model for market trend analysis and investment forecasting, utilizing financial data from Nairobi, Kenya.',
    type: 'Predictive Analytics',
    industry: 'Finance',
    language: 'English',
    country: 'Kenya',
    downloads: 512,
    likes: 83,
    createdAt: '2024-04-12T14:20:00Z',
    updatedAt: '2024-05-18T16:00:00Z',
    huggingfaceUrl: 'https://huggingface.co/alphafinance/fintrendanalyzer',
  },

  // Education
  {
    id: '8',
    name: 'EducationAI/EduTutorAI-V1.0-60B',
    owner: 'SmartEdu Tech',
    description: 'EduTutorAI-V1.0-60B is an Adaptive Learning model designed to provide personalized learning experiences for students. Developed using educational data from Accra, Ghana.',
    type: 'Adaptive Learning',
    industry: 'Education',
    language: 'English',
    country: 'Ghana',
    downloads: 789,
    likes: 120,
    createdAt: '2024-05-01T08:45:00Z',
    updatedAt: '2024-06-05T10:30:00Z',
    huggingfaceUrl: 'https://huggingface.co/smartedu/edututor-ai',
  },
  {
    id: '9',
    name: 'EducationAI/LearnSwahiliNLP-V1.0-50B',
    owner: 'Language Learning Labs',
    description: 'LearnSwahiliNLP-V1.0-50B is a Natural Language Processing model aimed at enhancing Swahili language learning through interactive tools and assessments.',
    type: 'NLP',
    industry: 'Education',
    language: 'Swahili',
    country: 'Tanzania',
    downloads: 634,
    likes: 95,
    createdAt: '2024-05-10T11:30:00Z',
    updatedAt: '2024-06-15T12:00:00Z',
    huggingfaceUrl: 'https://huggingface.co/language-labs/learnswahili-nlp',
  },

  // Manufacturing
  {
    id: '10',
    name: 'ManufacturingAI/ManuOptAI-V1.0-75B',
    owner: 'FactoryTech Solutions',
    description: 'ManuOptAI-V1.0-75B is an Optimization model for manufacturing processes, aimed at reducing waste and increasing efficiency. Trained on datasets from Addis Ababa, Ethiopia.',
    type: 'Optimization',
    industry: 'Manufacturing',
    language: 'English',
    country: 'Ethiopia',
    downloads: 298,
    likes: 47,
    createdAt: '2024-05-20T10:00:00Z',
    updatedAt: '2024-06-25T14:30:00Z',
    huggingfaceUrl: 'https://huggingface.co/factorytech/manuopt-ai',
  },
  {
    id: '11',
    name: 'ManufacturingAI/AutoQualityCV-V1.0-80B',
    owner: 'PrecisionManufacture Ltd.',
    description: 'AutoQualityCV-V1.0-80B is a Computer Vision model for automated quality inspection in automotive manufacturing. Developed using data from Johannesburg, South Africa.',
    type: 'Computer Vision',
    industry: 'Manufacturing',
    language: 'English',
    country: 'South Africa',
    downloads: 412,
    likes: 64,
    createdAt: '2024-06-01T09:50:00Z',
    updatedAt: '2024-07-05T15:00:00Z',
    huggingfaceUrl: 'https://huggingface.co/precisionmanufacture/autoquality-cv',
  },

  // Retail
  {
    id: '12',
    name: 'RetailAI/RetailInsightML-V1.0-65B',
    owner: 'ShopSmart Analytics',
    description: 'RetailInsightML-V1.0-65B is a Machine Learning model for customer behavior analysis and inventory management in retail stores. Trained on data from Cairo, Egypt.',
    type: 'Machine Learning',
    industry: 'Retail',
    language: 'Arabic',
    country: 'Egypt',
    downloads: 378,
    likes: 52,
    createdAt: '2024-06-10T13:20:00Z',
    updatedAt: '2024-07-15T17:45:00Z',
    huggingfaceUrl: 'https://huggingface.co/shopsmart/retailinsight-ml',
  },
  {
    id: '13',
    name: 'RetailAI/FashionTrendAI-V1.0-70B',
    owner: 'StyleTech Innovations',
    description: 'FashionTrendAI-V1.0-70B is an AI model for predicting fashion trends and optimizing supply chains in the retail industry. Developed using datasets from Lagos, Nigeria.',
    type: 'Predictive Analytics',
    industry: 'Retail',
    language: 'English',
    country: 'Nigeria',
    downloads: 459,
    likes: 88,
    createdAt: '2024-06-18T12:10:00Z',
    updatedAt: '2024-07-20T16:00:00Z',
    huggingfaceUrl: 'https://huggingface.co/styletech/fashiontrend-ai',
  },

  // Transportation
  {
    id: '14',
    name: 'TransportationAI/TransRouteOptimizer-V1.0-85B',
    owner: 'MoveSmart Technologies',
    description: 'TransRouteOptimizer-V1.0-85B is an Optimization model designed to optimize public transportation routes and schedules. Trained on transportation data from Nairobi, Kenya.',
    type: 'Optimization',
    industry: 'Transportation',
    language: 'English',
    country: 'Kenya',
    downloads: 321,
    likes: 59,
    createdAt: '2024-07-01T10:30:00Z',
    updatedAt: '2024-08-05T14:15:00Z',
    huggingfaceUrl: 'https://huggingface.co/movesmart/transroute-optimizer',
  },
  {
    id: '15',
    name: 'TransportationAI/LogiTrackAI-V1.0-75B',
    owner: 'LogiTech Solutions',
    description: 'LogiTrackAI-V1.0-75B is a Predictive Maintenance model for logistics and transportation fleets, aimed at reducing downtime and maintenance costs. Developed using data from Cairo, Egypt.',
    type: 'Predictive Maintenance',
    industry: 'Transportation',
    language: 'Arabic',
    country: 'Egypt',
    downloads: 276,
    likes: 40,
    createdAt: '2024-07-10T09:00:00Z',
    updatedAt: '2024-08-15T13:45:00Z',
    huggingfaceUrl: 'https://huggingface.co/logitech/logitrack-ai',
  },

  // Insurance
  {
    id: '16',
    name: 'InsuranceAI/InsureRiskML-V1.0-70B',
    owner: 'SafeGuard Analytics',
    description: 'InsureRiskML-V1.0-70B is a Machine Learning model for assessing insurance risks and optimizing policy pricing. Trained on insurance data from Accra, Ghana.',
    type: 'Risk Assessment',
    industry: 'Insurance',
    language: 'English',
    country: 'Ghana',
    downloads: 389,
    likes: 73,
    createdAt: '2024-07-20T11:15:00Z',
    updatedAt: '2024-08-25T15:30:00Z',
    huggingfaceUrl: 'https://huggingface.co/safeguard/insurerisksml',
  },
  {
    id: '17',
    name: 'InsuranceAI/ClaimAssistNLP-V1.0-60B',
    owner: 'InsureTech Labs',
    description: 'ClaimAssistNLP-V1.0-60B is a Natural Language Processing model designed to automate and streamline insurance claim processing. Developed using datasets from Lagos, Nigeria.',
    type: 'NLP',
    industry: 'Insurance',
    language: 'English',
    country: 'Nigeria',
    downloads: 298,
    likes: 65,
    createdAt: '2024-08-01T10:45:00Z',
    updatedAt: '2024-09-05T14:00:00Z',
    huggingfaceUrl: 'https://huggingface.co/insuretech/claimassist-nlp',
  },

  // Telecom
  {
    id: '18',
    name: 'TelecomAI/TeleConnectAI-V1.0-90B',
    owner: 'Telecom Innovators',
    description: 'TeleConnectAI-V1.0-90B is a Network Optimization model for optimizing network performance and managing customer service operations in the telecommunications industry. Trained on telecom data from Johannesburg, South Africa.',
    type: 'Network Optimization',
    industry: 'Telecom',
    language: 'English',
    country: 'South Africa',
    downloads: 456,
    likes: 82,
    createdAt: '2024-08-10T09:30:00Z',
    updatedAt: '2024-09-15T13:00:00Z',
    huggingfaceUrl: 'https://huggingface.co/telecominnovators/teleconnect-ai',
  },
  {
    id: '19',
    name: 'TelecomAI/CallCenterNLP-V1.0-55B',
    owner: 'SupportAI Solutions',
    description: 'CallCenterNLP-V1.0-55B is a Natural Language Processing model designed to enhance customer support in call centers through sentiment analysis and automated responses. Developed using data from Nairobi, Kenya.',
    type: 'NLP',
    industry: 'Telecom',
    language: 'Swahili',
    country: 'Kenya',
    downloads: 312,
    likes: 55,
    createdAt: '2024-08-20T12:00:00Z',
    updatedAt: '2024-09-25T16:15:00Z',
    huggingfaceUrl: 'https://huggingface.co/supportai/callcenternlp',
  },

  // Water
  {
    id: '20',
    name: 'WaterAI/AquaMonitorCV-V1.0-65B',
    owner: 'WaterTech Solutions',
    description: 'AquaMonitorCV-V1.0-65B is a Computer Vision model for monitoring water quality and detecting contaminants in real-time. Trained on water samples from Dakar, Senegal.',
    type: 'Computer Vision',
    industry: 'Water',
    language: 'French',
    country: 'Senegal',
    downloads: 189,
    likes: 34,
    createdAt: '2024-09-01T08:30:00Z',
    updatedAt: '2024-10-05T11:45:00Z',
    huggingfaceUrl: 'https://huggingface.co/watertech/aquamonitor-cv',
  },
  {
    id: '21',
    name: 'WaterAI/HydroPredictML-V1.0-70B',
    owner: 'HydroAnalytics Ltd.',
    description: 'HydroPredictML-V1.0-70B is a Predictive Analytics model for predicting water demand and optimizing distribution in urban areas. Developed using data from Cairo, Egypt.',
    type: 'Predictive Analytics',
    industry: 'Water',
    language: 'Arabic',
    country: 'Egypt',
    downloads: 245,
    likes: 48,
    createdAt: '2024-09-10T10:00:00Z',
    updatedAt: '2024-10-15T14:30:00Z',
    huggingfaceUrl: 'https://huggingface.co/hydroanalytics/hydropredict-ml',
  },

  // Mining
  {
    id: '22',
    name: 'MiningAI/MineSafeAI-V1.0-80B',
    owner: 'SafeMining Technologies',
    description: 'MineSafeAI-V1.0-80B is a Safety Monitoring model for monitoring mining operations and ensuring worker safety through real-time data analysis. Trained on mining site data from Lusaka, Zambia.',
    type: 'Safety Monitoring',
    industry: 'Mining',
    language: 'English',
    country: 'Zambia',
    downloads: 278,
    likes: 61,
    createdAt: '2024-09-20T11:20:00Z',
    updatedAt: '2024-10-25T16:50:00Z',
    huggingfaceUrl: 'https://huggingface.co/safemining/minesafe-ai',
  },
  {
    id: '23',
    name: 'MiningAI/OreDetectCV-V1.0-75B',
    owner: 'GeoMining AI',
    description: 'OreDetectCV-V1.0-75B is a Computer Vision model designed to identify and classify ore deposits in mining exploration. Developed using datasets from Johannesburg, South Africa.',
    type: 'Computer Vision',
    industry: 'Mining',
    language: 'English',
    country: 'South Africa',
    downloads: 198,
    likes: 39,
    createdAt: '2024-10-01T09:15:00Z',
    updatedAt: '2024-11-05T13:30:00Z',
    huggingfaceUrl: 'https://huggingface.co/geomining/oredetect-cv',
  },

  // Infrastructure
  {
    id: '24',
    name: 'InfrastructureAI/InfraBuildAI-V1.0-85B',
    owner: 'BuildSmart Technologies',
    description: 'InfraBuildAI-V1.0-85B is a Project Management model for optimizing construction project management and resource allocation. Trained on datasets from Nairobi, Kenya.',
    type: 'Project Management',
    industry: 'Infrastructure',
    language: 'English',
    country: 'Kenya',
    downloads: 210,
    likes: 50,
    createdAt: '2024-10-10T10:00:00Z',
    updatedAt: '2024-11-15T14:30:00Z',
    huggingfaceUrl: 'https://huggingface.co/buildsmart/infra-build-ai',
  },
  {
    id: '25',
    name: 'InfrastructureAI/UrbanFlowML-V1.0-80B',
    owner: 'CityAnalytics Ltd.',
    description: 'UrbanFlowML-V1.0-80B is a Predictive Analytics model for analyzing urban traffic patterns and optimizing infrastructure planning. Developed using data from Cairo, Egypt.',
    type: 'Predictive Analytics',
    industry: 'Infrastructure',
    language: 'Arabic',
    country: 'Egypt',
    downloads: 230,
    likes: 55,
    createdAt: '2024-10-20T12:00:00Z',
    updatedAt: '2024-11-25T16:15:00Z',
    huggingfaceUrl: 'https://huggingface.co/cityanalytics/urbanflowml',
  },
  {
    id: '26',
    name: 'InfrastructureAI/EnergyGridAI-V1.0-90B',
    owner: 'PowerTech Solutions',
    description: 'EnergyGridAI-V1.0-90B is a Predictive Maintenance model for enhancing energy grid management and predicting outages. Trained on energy data from Johannesburg, South Africa.',
    type: 'Predictive Maintenance',
    industry: 'Infrastructure',
    language: 'English',
    country: 'South Africa',
    downloads: 220,
    likes: 60,
    createdAt: '2024-11-01T09:00:00Z',
    updatedAt: '2024-12-05T13:30:00Z',
    huggingfaceUrl: 'https://huggingface.co/powertech/energygrid-ai',
  },
];