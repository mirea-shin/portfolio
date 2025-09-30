import React, { useState, useEffect } from 'react';
import type { Project } from 'shared';

export default function useProjectModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<null | Project>(null);

  const handleProjectDetail = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const onCloseModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCloseModal();
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onCloseModal, handleProjectDetail]);

  return {
    isModalOpen,
    setIsModalOpen,
    handleProjectDetail,
    onCloseModal,
    selectedProject,
  };
}
