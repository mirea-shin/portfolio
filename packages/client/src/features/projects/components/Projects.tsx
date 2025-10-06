import React from 'react';
import styled from 'styled-components';

import { useProjects } from '../hooks';

import { Modal } from '../../../common/modal';

import { ProjectCard, LinkBtn } from 'ui-components';

export default function Projects() {
  const {
    projectList,
    loading,
    handleProjectDetail,
    selectedProject,
    resetSelected,
  } = useProjects();

  if (loading) return <div>로딩주우웅!</div>;
  if (!projectList) return <div>서버에 문제 있음!</div>;
  if (projectList.length === 0) return <div>Projects.!!!</div>;

  return (
    <div className="flex justify-center items-center gap-4 ">
      {projectList.map((project) => (
        <ProjectCard key={project.id}>
          <div
            onClick={() => handleProjectDetail(project)}
            className="h-full flex flex-col flex-wrap justify-between"
          >
            {project?.thumbnail && (
              <div>
                <img src={project?.thumbnail} />
              </div>
            )}
            <div className="flex flex-col justify-between flex-1 my-3">
              <h1 className="text-2xl">{project.title}</h1>

              <p>{project.description}</p>

              <div className="flex ">
                {project.techStack.map((el, idx) => (
                  <p
                    key={idx}
                    className={`text-xs mx-0.5 ${idx === 0 && 'mr-0.5'}`}
                  >
                    {el}{' '}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <p>{project.status === 'completed' ? '' : project.status}</p>
              <p>
                {project.startDate} ~
                {project?.endDate && <> {project.endDate}</>}
              </p>
            </div>
          </div>
        </ProjectCard>
      ))}

      {selectedProject && (
        <Modal handleOnClose={resetSelected}>{selectedProject.title}</Modal>
      )}
    </div>
  );
}
