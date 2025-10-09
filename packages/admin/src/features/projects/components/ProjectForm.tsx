import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import Alert from '@mui/material/Alert';

import type { ProjectRequest } from 'shared';
import { Button, Loading } from 'ui-components';

import { useProjectForm } from '../hooks';
import { FormElement, Input, Textarea } from '../../../ui/form';
import { FileUpload, MediaDisplay } from '../../../ui/common';

export default function ProjectForm() {
  const {
    loading,
    project,
    validation,
    mediaList,
    mainMedia,
    handleMainMedia,
    handleMediaList,
    onSubmit,
    onDelete,
  } = useProjectForm();

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
    <form
      onSubmit={handleSubmit((data) => onSubmit(data))}
      className="w-6xl border rounded-md p-10 space-y-8 mx-auto shadow-2xl grid grid-cols-2 gap-5 "
    >
      <div className="flex flex-col gap-3">
        {/* 프로젝트명 */}
        <Input
          label="프로젝트명"
          name="title"
          register={register}
          required={validation.title.required}
          error={!!errors.title}
        />

        {/* 설명 */}
        <Textarea
          label="설명"
          name="description"
          register={register}
          required={validation.description.required}
          error={!!errors.description}
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
      </div>

      {/* 파일 업로드 */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">
          파일 업로드
        </label>
        <div className=" h-full w-full flex justify-center items-center">
          {mediaList && mediaList.length > 0 ? (
            <>
              <MediaDisplay
                mediaList={mediaList}
                handleFileList={handleMediaList}
                mainIdx={mainMedia}
                handleMainIdx={handleMainMedia}
              />
            </>
          ) : (
            <>
              <FileUpload handleFileList={handleMediaList} />
            </>
          )}
        </div>
      </div>

      {/* 버튼 */}

      <div className="flex justify-end gap-2 col-span-2">
        {project && (
          <Button type="button" label="Delete" onClick={onDelete} border />
        )}

        <Button type="submit" label="Submit" />
      </div>
    </form>
  );
}
