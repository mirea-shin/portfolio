import React from 'react';
import { useProjects } from '../hooks';
import useProjectModal from '../hooks/useProjectModal';

export default function Projects() {
  const { projectList, loading } = useProjects();
  const { isModalOpen, handleProjectDetail, onCloseModal, selectedProject } =
    useProjectModal();

  if (loading) return <div>로딩주우웅!</div>;
  if (!projectList) return <div>서버에 문제 있음!</div>;
  if (projectList.length === 0) return <div>Projects.!!!</div>;

  return (
    <div>
      {projectList.map((project) => (
        <div
          className="border"
          key={project.id}
          onClick={() => handleProjectDetail(project)}
        >
          <p>{project.title}</p>
          <p>{project.description}</p>
          <div>
            {project.techStack.map((el, idx) => (
              <p key={idx}>{el}</p>
            ))}
          </div>
          <p>{project.projectType}</p>
          <p>{project.status}</p>
          <div>
            <p>{project.startDate}</p>
            {project?.endDate && <p>{project.endDate}</p>}
          </div>
          <div>
            {project?.githubLink && <p>{project.githubLink}</p>}
            {project?.liveLink && <p>{project.liveLink}</p>}
          </div>

          <div>
            {project?.thumbnail && (
              <div>
                <img src={project?.thumbnail} />
              </div>
            )}
          </div>
        </div>
      ))}

      {isModalOpen && selectedProject && (
        <div className="bg-black text-white">
          {selectedProject.title}

          <button
            onClick={onCloseModal}
            className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}
