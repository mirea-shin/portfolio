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

      <select {...register('status')} className="border w-full p-2">
        <option value="draft">초안</option>
        <option value="ongoing">진행중</option>
        <option value="completed">완료</option>
      </select>

      <select {...register('projectType')} className="border w-full p-2">
        <option value="personal">개인</option>
        <option value="work">회사</option>
      </select>
      <div>
        <input type="file" multiple />
      </div>

      <input
        type="file"
        accept="image/*,video/*"
        multiple
        {...register('images')}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          const files = event.target.files;
          if (!files) return;

          // if (files.length > 10) {
          //   setError('files', {
          //     message: '최대 10개의 파일만 선택할 수 있습니다',
          //   });
          //   return;
          // } else {
          //   clearErrors('files');
          // }

          const urls = Array.from(files).map((file) =>
            URL.createObjectURL(file)
          );

          console.log(urls);
        }}
      />

      {project && (
        <button
          type="button"
          className="bg-red-500 text-white px-4 py-2 rounded ml-2"
          onClick={onDelete}
        >
          삭제
        </button>
      )}
      <input type="submit" />
    </form>
  );
}
