import React, { useEffect, useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import type { Project, ProjectRequest } from 'shared';

import { getProject, postProject, putProject, deleteProject } from '../api';

export default function useProjectForm() {
  const navigate = useNavigate();

  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(false);

  const validation = {
    title: {
      required: true,
    },
    description: {
      required: true,
    },
  };

  const fetchProject = async (id: string) => {
    try {
      const result = await getProject(id);
      if (result.data) {
        setProject(result.data.data);
      }
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data: ProjectRequest) => {
    try {
      setLoading(true);
      if (!id) {
        const result = await postProject(data);
        console.log(result);
      } else {
        const result = await putProject(data, id);
      }
      // navigate('/projects');
    } catch (err) {
      console.error('errorr');
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    if (!project?.id) return;

    if (!confirm('정말 삭제하시겠습니까?')) return;

    setLoading(true);
    try {
      await deleteProject(project.id);
      navigate('/projects');
    } catch (err) {
      console.error('Failed to delete project:', err);
      // setError('프로젝트 삭제에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id && id !== 'new') {
      fetchProject(id);
    }
  }, [id]);

  return { loading, project, validation, onSubmit, onDelete };
}
