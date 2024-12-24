import { Plan } from '../types/pricing';

export const enterprisePlans: Plan[] = [
  {
    name: 'Starter',
    description: 'Perfect for small teams getting started with AI',
    monthlyPrice: 299,
    annualPrice: 239,
    features: [
      { name: 'Up to 10 team members' },
      { name: 'Basic AI model access' },
      { name: '5 concurrent projects' },
      { name: 'Community support' },
      { name: 'Basic analytics' },
    ],
    cta: 'Start free trial',
  },
  {
    name: 'Professional',
    description: 'Ideal for growing companies scaling AI operations',
    monthlyPrice: 599,
    annualPrice: 479,
    highlighted: true,
    features: [
      { name: 'Up to 25 team members' },
      { name: 'Advanced AI model access' },
      { name: 'Unlimited projects' },
      { name: 'Priority support' },
      { name: 'Advanced analytics' },
      { name: 'Custom integrations' },
    ],
    cta: 'Start free trial',
  },
  {
    name: 'Enterprise',
    description: 'Custom solutions for large organizations',
    monthlyPrice: 1199,
    annualPrice: 959,
    features: [
      { name: 'Unlimited team members' },
      { name: 'Full AI infrastructure access' },
      { name: 'Dedicated support team' },
      { name: 'Custom AI model development' },
      { name: 'Enterprise security features' },
      { name: 'SLA guarantees' },
    ],
    cta: 'Contact sales',
  },
];

export const professionalPlans: Plan[] = [
  {
    name: 'Basic',
    description: 'Essential tools for AI freelancers',
    monthlyPrice: 4.99,
    annualPrice: 47.90, // 4.99 × 12 × 0.8 = 47.90
    features: [
      { name: 'Personal Workspace', description: 'Create and manage your own dedicated workspace for projects.' },
      { name: 'Access to Models', description: 'Utilize a selection of pre-built AI models to accelerate your projects.' },
      { name: 'Access to Datasets', description: 'Gain access to curated datasets to train and refine your AI solutions.' },
      { name: 'Access to Free Tier 1 AI Course', description: 'Enroll in introductory AI courses to enhance your skills.' },
      { name: 'Access to Peers Directory', description: 'Connect with other AI freelancers and professionals in the community.' },
      { name: 'Access to Community Forum', description: 'Participate in discussions, ask questions, and share knowledge with peers.' },
      { name: 'Able to List One Solution', description: 'Showcase one of your AI solutions on the platform to attract clients.' },
      { name: 'Able to Initiate One Project', description: 'Start and manage one AI project at a time within your workspace.' },
      // Additional Features
      { name: 'Limited Storage', description: '10 GB of storage space for your projects and datasets.' },
      { name: 'Basic Support', description: 'Email-based support to assist with any technical or account-related queries.' },
      { name: 'Collaboration Tools', description: 'Basic chat and document sharing functionalities for collaborating with others.' },
      { name: 'Analytics Dashboard', description: 'Access a dashboard with insights into your project performance and engagement metrics.' },
      { name: 'Easy Upgrade Path', description: 'One-click upgrade option to transition to Pro or Elite plans as your needs grow.' },
    ],
    cta: 'Start free trial',
  },
  {
    name: 'Pro',
    description: 'Advanced features for professional developers',
    monthlyPrice: 29.99,
    annualPrice: 287.90, // 29.99 × 12 × 0.8 = 287.90
    highlighted: true,
    features: [
      { name: 'Enhanced Workspace', description: 'Expanded workspace with additional project management tools.' },
      { name: 'Professional AI Tools', description: 'Access to advanced AI models and customization options.' },
      { name: 'Unlimited Projects', description: 'Manage an unlimited number of AI projects simultaneously.' },
      { name: 'Priority Support', description: 'Receive priority email and chat support for faster resolutions.' },
      { name: 'Advanced Analytics', description: 'Detailed analytics and reporting tools to monitor project performance.' },
      { name: 'API Access', description: 'Integrate with third-party applications using our comprehensive APIs.' },
      // Additional Features
      { name: 'Increased Storage', description: '50 GB of storage space for your projects and datasets.' },
      { name: 'Advanced Collaboration Tools', description: 'Enhanced collaboration features including video conferencing.' },
      { name: 'Custom Branding', description: 'Customize your workspace with your brand’s logo and colors.' },
      { name: 'Extended AI Course Access', description: 'Access to additional advanced AI courses and resources.' },
      { name: 'Integration Support', description: 'Assistance with integrating third-party tools and services.' },
      { name: 'Automated Backups', description: 'Automatic backups of your projects to ensure data safety.' },
    ],
    cta: 'Start free trial',
  },
  {
    name: 'Elite',
    description: 'Premium features for AI consultants',
    monthlyPrice: 59.99,
    annualPrice: 575.90, // 59.99 × 12 × 0.8 = 575.90
    features: [
      { name: 'Premium Workspace', description: 'Premium workspace with exclusive project management and collaboration tools.' },
      { name: 'Elite AI Tools Suite', description: 'Access to the full suite of AI tools and custom model development.' },
      { name: 'White-label Solutions', description: 'Offer white-label AI solutions to your clients with complete branding control.' },
      { name: 'Dedicated Support', description: 'A dedicated support manager to assist with your needs and ensure seamless operations.' },
      { name: 'Custom Reporting', description: 'Generate customized reports tailored to your project requirements.' },
      { name: 'Training Resources', description: 'Access to exclusive training materials and webinars to stay ahead in AI.' },
      // Additional Features
      { name: 'Unlimited Storage', description: 'Unlimited storage space for all your projects and datasets.' },
      { name: 'Advanced Security Features', description: 'Enhanced security protocols to protect your data and projects.' },
      { name: 'SLA Guarantees', description: 'Service Level Agreements ensuring high availability and performance.' },
      { name: 'Enterprise Integrations', description: 'Seamless integration with enterprise-level software and tools.' },
      { name: 'Dedicated Account Manager', description: 'Personalized account management for tailored support and services.' },
      { name: 'Custom Development Requests', description: 'Request bespoke AI solutions and features tailored to your specific needs.' },
    ],
    cta: 'Start free trial',
  },
];