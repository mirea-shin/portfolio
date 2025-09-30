import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import type { ProjectRequest } from 'shared';

import { useProjectForm } from '../hooks';

export default function ProjectForm() {
  const { loading, project, validation, onSubmit, onDelete } = useProjectForm();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProjectRequest>();

  useEffect(() => {
    if (project) {
      const { title, description, startDate, projectType, status } = project;

      reset({
        title,
        description,
        startDate,
        projectType,
        status,

        endDate: project.endDate || undefined,
        liveLink: project.liveLink || undefined,
        githubLink: project.githubLink || undefined,

        images: project.images || [],
        thumbnail: project.thumbnail || undefined,
      });
    }
  }, [project, reset]);

  if (loading) return <div> 로딩중,,,</div>;

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <input {...register('title')} className="border" />
      <textarea
        {...register('description', { ...validation.description })}
        className="border"
      />

      <div>
        <input {...register('startDate')} className="border" type="date" />
        <input {...register('endDate')} className="border" type="date" />
      </div>

      <div>
        <input {...register('githubLink')} className="border" />
        <input {...register('liveLink')} className="border" />
      </div>

      <div>
        <input type="file" />
      </div>

      <button type="button" onClick={onDelete}>
        삭제!!
      </button>
      <input type="submit" />
    </form>
  );
}
