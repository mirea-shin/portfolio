import React, { useEffect, useState } from 'react';

import { useModal } from '../../../common/modal';
import { getAllProject } from '../api';

import type { Project } from 'shared';

export default function useProjects() {
  const { onOpen } = useModal();

  const [projectList, setProjectList] = useState<null | Project[]>(null);
  const [loading, setLoading] = useState(false);
  const [selectedProject, setSelectedProject] = useState<null | Project>(null);

  const handleProjectDetail = (project: Project) => {
    setSelectedProject(project);
    onOpen();
  };

  const resetSelected = () => setSelectedProject(null);

  const fetchProjectList = async () => {
    try {
      setLoading(true);
      const result = await getAllProject();
      setProjectList(result.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(loading);
    }
  };

  useEffect(() => {
    fetchProjectList();
  }, []);

  return {
    projectList,
    loading,
    handleProjectDetail,
    selectedProject,
    resetSelected,
  };
}
