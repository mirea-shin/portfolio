import React, { useEffect, useState } from 'react';
import { getProjects } from '../api';

import type { Project } from 'shared';

export default function useProjects() {
  const [projectList, setProjectList] = useState<null | Project[]>(null);
  const [loading, setLoading] = useState(false);

  const fetchProjectList = async () => {
    try {
      setLoading(true);
      const result = await getProjects();
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

  return { projectList, loading };
}
