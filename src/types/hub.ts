export type TabType = 'models' | 'datasets' | 'community' | 'forum';

export interface Model {
  id: string;
  name: string;
  owner: string;
  description: string;
  type: string;
  industry: string;
  language: string;
  country: string;
  downloads: number;
  likes: number;
  createdAt: string;
  updatedAt: string;
  huggingfaceUrl?: string;
}

export interface Dataset {
  id: string;
  name: string;
  owner: string;
  description: string;
  type: string;
  format: string;
  industry: string;
  language: string;
  country: string;
  downloads: number;
  likes: number;
  createdAt: string;
  updatedAt: string;
  size: string;
}

export interface ModelFilters {
  types: string[];
  industry: string;
  language: string;
  country: string;
}

export interface DatasetFilters {
  types: string[];
  formats: string[];
  industry: string;
  size: string;
  language: string;
}

export interface Post {
  id: string;
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  content: string;
  createdAt: string;
  likes: number;
  dislikes: number;
  tags: string[];
  image?: string;
  comments: Comment[];
}

export interface Comment {
  id: string;
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  content: string;
  createdAt: string;
  likes: number;
  dislikes: number;
  replies?: Comment[];
}

export interface ActiveUser {
  id: string;
  name: string;
  avatar: string;
  activity: string;
  lastActive: string;
}

export interface FollowedUser {
  id: string;
  name: string;
  avatar: string;
  title: string;
  lastPost: string;
}
