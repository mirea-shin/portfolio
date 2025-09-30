import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllProject } from '../api';

import type { Project } from 'shared';

export default function useProjects() {
  const navigate = useNavigate();

  const [projectList, setProjectList] = useState<null | Project[]>(null);
  const [loading, setLoading] = useState(false);

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

  const handleProjectClick = (id: string) => {
    navigate(`/projects/${id}`);
  };

  return { projectList, loading, handleProjectClick };
}
