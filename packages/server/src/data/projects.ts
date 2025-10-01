import { Project, ProjectRequest } from 'shared';

let FAKE_PROJECTS: Project[] = [
  {
    id: '1',
    title: '포트폴리오 사이트',
    description:
      '모노레포 구조로 구현한 풀스택 포트폴리오 프로젝트입니다.\n\nReact, TypeScript, Express를 활용하여 개발했으며,\n관리자 페이지를 통해 콘텐츠를 관리할 수 있습니다.',
    techStack: ['React', 'TypeScript', 'Express', 'Tailwind CSS'],
    startDate: '2025-01-01',
    endDate: '2025-03-01',
    projectType: 'personal',
    status: 'completed',
    githubLink: 'https://github.com/username/portfolio',
    liveLink: 'https://portfolio.example.com',
    images: [
      'https://via.placeholder.com/800x600/3B82F6/FFFFFF?text=Image+1',
      'https://via.placeholder.com/800x600/10B981/FFFFFF?text=Image+2',
      'https://via.placeholder.com/800x600/F59E0B/FFFFFF?text=Image+3',
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'E-Commerce 플랫폼',
    description: '온라인 쇼핑몰 프로젝트',
    techStack: ['Next.js', 'Prisma', 'PostgreSQL'],
    startDate: '2024-06-01',
    projectType: 'work',
    status: 'ongoing',
    images: [
      'https://via.placeholder.com/800x600/EF4444/FFFFFF?text=E-Commerce',
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export const findAll = () => FAKE_PROJECTS;

export const findById = (id: string) =>
  FAKE_PROJECTS.find((project) => project.id === id);

export const create = (parsedData: ProjectRequest): Project => {
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

export const update = (id: string, parsedData: ProjectRequest) => {
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
