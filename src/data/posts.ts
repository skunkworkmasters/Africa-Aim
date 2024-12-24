// src/data/posts.ts

// Importing local avatar images
import aishaMwangi from '../assets/images/aisha_mwangi.jpg';
import amaraDiouf from '../assets/images/amara_diouf.jpeg';
import davidOwusu from '../assets/images/david_owusu.jpg';
import fatimaHassan from '../assets/images/fatima_hassan.jpg';
import michaelOkonjo from '../assets/images/michael_okonjo.jpg';
import samuelOkonkwo from '../assets/images/samuel_okonkwo.jpg';

export const posts = [
  // Post 1
  {
    id: '1',
    author: {
      id: '1',
      name: 'Aisha Mwangi',
      avatar: aishaMwangi, // Local image import
    },
    content:
      'Just released a new computer vision model for crop disease detection. Check it out on the Models tab! #AI #Agriculture',
    createdAt: '2024-03-10T10:00:00Z',
    likes: 24,
    dislikes: 1,
    tags: ['AI', 'Agriculture'],
    comments: [
      {
        id: '1',
        author: {
          id: '2',
          name: 'Samuel Okonkwo',
          avatar: samuelOkonkwo, // Local image import
        },
        content: 'Amazing work! Looking forward to testing it.',
        createdAt: '2024-03-10T10:30:00Z',
        likes: 5,
        dislikes: 0,
      },
    ],
  },

  // Post 2
  {
    id: '2',
    author: {
      id: '2',
      name: 'Amara Diouf',
      avatar: amaraDiouf, // Local image import
    },
    content:
      'Our latest dataset for urban traffic analysis in Lagos is now available. Perfect for developing smart city solutions! #Datasets #SmartCities #AI',
    createdAt: '2024-04-12T14:15:00Z',
    likes: 28,
    dislikes: 1,
    tags: ['Datasets', 'SmartCities', 'AI'],
    comments: [
      {
        id: '1',
        author: {
          id: '4',
          name: 'Fatima Hassan',
          avatar: fatimaHassan, // Local image import
        },
        content:
          'This dataset will be invaluable for our traffic prediction models. Thanks, Amara!',
        createdAt: '2024-04-12T14:45:00Z',
        likes: 6,
        dislikes: 0,
      },
    ],
  },

  // Post 3
  {
    id: '3',
    author: {
      id: '3',
      name: 'David Owusu',
      avatar: davidOwusu, // Local image import
    },
    content:
      'Enroll in our upcoming course on AI for Healthcare in Accra. Learn to build predictive models that can save lives. #Courses #AIHealthcare #MachineLearning',
    createdAt: '2024-04-15T11:30:00Z',
    likes: 42,
    dislikes: 3,
    tags: ['Courses', 'AIHealthcare', 'MachineLearning'],
    comments: [
      {
        id: '1',
        author: {
          id: '1',
          name: 'Michael Okonjo',
          avatar: michaelOkonjo, // Local image import
        },
        content:
          'Looking forward to it! This is exactly what the industry needs.',
        createdAt: '2024-04-15T12:00:00Z',
        likes: 7,
        dislikes: 0,
      },
      {
        id: '2',
        author: {
          id: '4',
          name: 'Fatima Hassan',
          avatar: fatimaHassan, // Local image import
        },
        content:
          'I’ve enrolled! Excited to deepen my knowledge in AI applications.',
        createdAt: '2024-04-15T12:30:00Z',
        likes: 5,
        dislikes: 0,
      },
    ],
  },

  // Post 4
  {
    id: '4',
    author: {
      id: '4',
      name: 'Fatima Hassan',
      avatar: fatimaHassan, // Local image import
    },
    content:
      'Check out our newly published guide on deploying AI models in production environments. Essential reading for all AI practitioners! #AI #Models #Deployment',
    createdAt: '2024-04-18T16:45:00Z',
    likes: 30,
    dislikes: 2,
    tags: ['AI', 'Models', 'Deployment'],
    comments: [
      {
        id: '1',
        author: {
          id: '2',
          name: 'Amara Diouf',
          avatar: amaraDiouf, // Local image import
        },
        content:
          'Great resource, Fatima! I’ve already started applying some of the techniques.',
        createdAt: '2024-04-18T17:15:00Z',
        likes: 4,
        dislikes: 0,
      },
    ],
  },

  // Post 5
  {
    id: '5',
    author: {
      id: '1',
      name: 'Michael Okonjo',
      avatar: michaelOkonjo, // Local image import
    },
    content:
      'Launching our first AI model competition focused on renewable energy forecasting. Participants can win exciting prizes! #AICompetition #RenewableEnergy #Forecasting',
    createdAt: '2024-04-20T08:00:00Z',
    likes: 50,
    dislikes: 5,
    tags: ['AICompetition', 'RenewableEnergy', 'Forecasting'],
    comments: [
      {
        id: '1',
        author: {
          id: '3',
          name: 'David Owusu',
          avatar: davidOwusu, // Local image import
        },
        content: 'This is a fantastic initiative, Michael! Count me in.',
        createdAt: '2024-04-20T08:30:00Z',
        likes: 10,
        dislikes: 0,
      },
    ],
  },

  // Post 6
  {
    id: '6',
    author: {
      id: '2',
      name: 'Amara Diouf',
      avatar: amaraDiouf, // Local image import
    },
    content:
      'Our team just published a comprehensive dataset on mobile usage patterns in West Africa. Perfect for developing user behavior models. #Datasets #UserBehavior #AI',
    createdAt: '2024-04-22T13:20:00Z',
    likes: 25,
    dislikes: 1,
    tags: ['Datasets', 'UserBehavior', 'AI'],
    comments: [
      {
        id: '1',
        author: {
          id: '4',
          name: 'Fatima Hassan',
          avatar: fatimaHassan, // Local image import
        },
        content:
          'Excellent dataset, Amara! It will greatly aid our research.',
        createdAt: '2024-04-22T13:45:00Z',
        likes: 3,
        dislikes: 0,
      },
    ],
  },

  // Post 7
  {
    id: '7',
    author: {
      id: '3',
      name: 'David Owusu',
      avatar: davidOwusu, // Local image import
    },
    content:
      'Enrolled in the AI for Finance course offered by MediTech Institute. Looking forward to enhancing my financial modeling skills! #Courses #AIFinance #MachineLearning',
    createdAt: '2024-04-25T10:50:00Z',
    likes: 18,
    dislikes: 0,
    tags: ['Courses', 'AIFinance', 'MachineLearning'],
    comments: [
      {
        id: '1',
        author: {
          id: '1',
          name: 'Michael Okonjo',
          avatar: michaelOkonjo, // Local image import
        },
        content: 'Great choice, David! Best of luck with the course.',
        createdAt: '2024-04-25T11:15:00Z',
        likes: 2,
        dislikes: 0,
      },
      {
        id: '2',
        author: {
          id: '2',
          name: 'Amara Diouf',
          avatar: amaraDiouf, // Local image import
        },
        content: 'Hope you find it insightful!',
        createdAt: '2024-04-25T11:30:00Z',
        likes: 1,
        dislikes: 0,
      },
    ],
  },

  // Post 8
  {
    id: '8',
    author: {
      id: '4',
      name: 'Fatima Hassan',
      avatar: fatimaHassan, // Local image import
    },
    content:
      'Our latest AI model for natural language understanding in French is now live. Explore its capabilities in the Models section! #AI #NLP #FrenchLanguage',
    createdAt: '2024-04-28T15:30:00Z',
    likes: 32,
    dislikes: 3,
    tags: ['AI', 'NLP', 'FrenchLanguage'],
    comments: [
      {
        id: '1',
        author: {
          id: '3',
          name: 'David Owusu',
          avatar: davidOwusu, // Local image import
        },
        content: 'Impressive work, Fatima! Can’t wait to test it out.',
        createdAt: '2024-04-28T16:00:00Z',
        likes: 4,
        dislikes: 0,
      },
    ],
  },

  // Post 9
  {
    id: '9',
    author: {
      id: '1',
      name: 'Michael Okonjo',
      avatar: michaelOkonjo, // Local image import
    },
    content:
      'Hosting a webinar on AI Ethics and Responsible AI practices next week. Register now! #Webinar #AIEthics #ResponsibleAI',
    createdAt: '2024-04-30T09:40:00Z',
    likes: 40,
    dislikes: 4,
    tags: ['Webinar', 'AIEthics', 'ResponsibleAI'],
    comments: [
      {
        id: '1',
        author: {
          id: '2',
          name: 'Amara Diouf',
          avatar: amaraDiouf, // Local image import
        },
        content: 'Looking forward to attending! Important topic.',
        createdAt: '2024-04-30T10:10:00Z',
        likes: 3,
        dislikes: 0,
      },
      {
        id: '2',
        author: {
          id: '4',
          name: 'Fatima Hassan',
          avatar: fatimaHassan, // Local image import
        },
        content: 'Great initiative, Michael!',
        createdAt: '2024-04-30T10:30:00Z',
        likes: 2,
        dislikes: 0,
      },
    ],
  },

  // Post 10
  {
    id: '10',
    author: {
      id: '2',
      name: 'Amara Diouf',
      avatar: amaraDiouf, // Local image import
    },
    content:
      'Published a new tutorial on building AI-powered chatbots using TensorFlow. Check it out in the Courses section! #Tutorial #Chatbots #TensorFlow',
    createdAt: '2024-05-02T14:25:00Z',
    likes: 27,
    dislikes: 1,
    tags: ['Tutorial', 'Chatbots', 'TensorFlow'],
    comments: [
      {
        id: '1',
        author: {
          id: '3',
          name: 'David Owusu',
          avatar: davidOwusu, // Local image import
        },
        content: 'Excellent tutorial, Amara! Very helpful.',
        createdAt: '2024-05-02T14:55:00Z',
        likes: 5,
        dislikes: 0,
      },
    ],
  },

  // Add more mock posts here following the same structure...
];
