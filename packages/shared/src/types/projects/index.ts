export interface ProjectRequest {
  title: string;
  description: string;
  techStack: string[];
  startDate: string;
  projectType: 'personal' | 'work';
  status: 'draft' | 'completed' | 'ongoing';

  githubLink?: string;
  endDate?: string;
  liveLink?: string;
  thumbnail?: string;
  images?: string[];
}

export interface Project extends ProjectRequest {
  id: string;
  createdAt: string;
  updatedAt?: string;
}
