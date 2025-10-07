import React from 'react';
import styled from 'styled-components';
import { MdOutlineArrowOutward } from 'react-icons/md';

import { ProjectCard, Loading } from 'ui-components';
import { motion, AnimatePresence } from 'framer-motion';

import { useProjects } from '../hooks';
import { Modal } from '../../../common/modal';

const Description = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
`;

const LinkArrow = styled.div`
  color: ${(props) => props.theme.colors.textSecondary};
  transition: transform 0.25s cubic-bezier(0.25, 1, 0.5, 1);
`;

const StatusBadge = styled.div`
  background: ${(props) => props.theme.colors.text};
  color: ${(props) => props.theme.colors.background};
`;

export default function Projects() {
  const {
    projectList,
    loading,
    handleProjectDetail,
    selectedProject,
    resetSelected,
  } = useProjects();

  if (loading) return <Loading />;
  if (!projectList) return <div>서버에 문제 있음!</div>;
  if (projectList.length === 0) return <div>Projects.!!!</div>;

  return (
    <div className="flex justify-center items-center gap-4 ">
      <AnimatePresence>
        {projectList.map((project, idx) => (
          <ProjectCard key={project.id} idx={idx}>
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
                <div className=" flex flex-wrap items-center gap-2">
                  <h1 className="text-2xl ">{project.title}</h1>
                  <LinkArrow className="linkArrow text-2xl">
                    <MdOutlineArrowOutward />
                  </LinkArrow>
                </div>
                <Description>{project.description}</Description>

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

              <div className="flex justify-between text-xs">
                <StatusBadge className="rounded-xl px-2 py-1 flex justify-center items-center">
                  <span>{project.status}</span>
                </StatusBadge>
                <p>
                  {project.startDate} ~
                  {project?.endDate && <> {project.endDate}</>}
                </p>
              </div>
            </div>
          </ProjectCard>
        ))}
      </AnimatePresence>
      {selectedProject && (
        <Modal handleOnClose={resetSelected}>{selectedProject.title}</Modal>
      )}
    </div>
  );
}
