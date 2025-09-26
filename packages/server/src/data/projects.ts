export interface ProjectRequestTEST {
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

// Project 타입도 옵셔널 필드를 유지
export type Project = ProjectRequestTEST & {
  id: string;
  createdAt: string;
  updatedAt: string;
};

let FAKE_PROJECTS: Project[] = [
  {
    id: '1',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: 'string',
    description: 'string',
    techStack: ['React'],
    startDate: '2025-09-21',
    projectType: 'personal',
    status: 'draft',
    githubLink: 'http://google.com', // 있을 수도 있고 없어도 됨
    endDate: '2025-09-03',
    liveLink: 'http://google.com',
    images: ['http'],
  },
];

export const findAll = () => FAKE_PROJECTS;

export const findById = (id: string) =>
  FAKE_PROJECTS.find((project) => project.id === id);

export const create = (parsedData: ProjectRequestTEST): Project => {
  const newProject: Project = {
    ...parsedData,
    id: (FAKE_PROJECTS.length + 1).toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    // 옵셔널 필드는 undefined 그대로 유지 가능
  };

  FAKE_PROJECTS.push(newProject);

  return newProject;
};

export const update = (id: string, parsedData: ProjectRequestTEST) => {
  let updatedProject;

  FAKE_PROJECTS = FAKE_PROJECTS.map((project) => {
    if (project.id === id) {
      updatedProject = {
        ...project,
        ...parsedData,
        updatedAt: new Date().toISOString(),
      };
      return updatedProject;
    } else {
      return project;
    }
  });

  return updatedProject;
};

export const remove = (id: string) => {
  FAKE_PROJECTS = FAKE_PROJECTS.filter((project) => project.id !== id);
};
