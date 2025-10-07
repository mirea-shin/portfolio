import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import type { ProjectRequest } from 'shared';
import { Button, Loading } from 'ui-components';

import { useProjectForm } from '../hooks';
import { FormElement, Input, Textarea } from '../../../ui/form';

export default function ProjectForm() {
  const { loading, project, validation, onSubmit, onDelete } = useProjectForm();

  const {
    register,
    handleSubmit,
    reset,
    watch,
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

  if (loading) return <Loading />;

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      {/* 프로젝트명 */}
      <Input
        label="프로젝트명"
        name="title"
        register={register}
        required={validation.title.required}
      />

      {/* 설명 */}
      <Textarea
        label="설명"
        name="description"
        register={register}
        required={validation.description.required}
      />

      {/* 상태 및 날짜 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <FormElement name="status" label="상태">
            <select
              id="status"
              {...register('status')}
              className="border rounded w-full p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            >
              <option value="draft">초안</option>
              <option value="ongoing">진행중</option>
              <option value="completed">완료</option>
            </select>
          </FormElement>
        </div>

        {watch('status') === 'completed' && (
          <div className="space-y-4">
            <Input
              label="시작날짜"
              name="startDate"
              register={register}
              required
              type="date"
            />
            <Input
              label="종료날짜"
              name="endDate"
              register={register}
              required
              type="date"
            />
          </div>
        )}
        {watch('status') === 'ongoing' && (
          <div>
            <Input
              label="시작날짜"
              name="startDate"
              register={register}
              required
              type="date"
            />
          </div>
        )}
      </div>

      {/* URL 입력 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input label="깃헙URL" name="githubLink" register={register} />
        <Input label="라이브URL" name="liveLink" register={register} />
      </div>

      {/* 파일 업로드 */}
      <div className="space-y-2">
        <label className="block mb-1 font-medium text-gray-700">
          파일 업로드
        </label>
        <input
          type="file"
          multiple
          {...register('images')}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const files = event.target.files;
            if (!files) return;

            const urls = Array.from(files).map((file) =>
              URL.createObjectURL(file)
            );
            console.log(urls);
          }}
          className="border p-2 w-full rounded"
        />
      </div>

      {/* 버튼 */}

      <div className="flex justify-end gap-2">
        {project && (
          <Button type="button" label="Delete" onClick={onDelete} border />
        )}

        <Button type="submit" label="Submit" />
      </div>
    </form>
  );
}
