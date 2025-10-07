import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import useAboutDetail from '../hooks/useAboutDetail';
import useAboutForm from '../hooks/useAboutForm';

import { Input, Textarea } from '../../../ui/form';
import { BtnAction } from '../../../ui/buttons';

import type { AboutRequest } from 'shared';

export default function AboutForm() {
  const { id } = useParams();

  const { loading, about } = useAboutDetail(id);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AboutRequest>();

  const {
    onSubmit,
    onDelete,

    validation,
  } = useAboutForm();

  useEffect(() => {
    if (about) {
      reset({
        title: about.title,
        content: about.content,
      });
    }
  }, [about, reset]);

  if (loading) return <div>로딩ㅋ</div>;

  return (
    <form
      onSubmit={handleSubmit((data) =>
        onSubmit(data, about?.id ? about.id : null)
      )}
      className="w-4xl border rounded-md  p-6 space-y-6 mx-auto"
    >
      {/* 타이틀명 */}
      <Input
        label="title"
        name="title"
        register={register}
        required={validation.title.required}
      />

      {/* 콘텐트 */}
      <Textarea
        label="설명"
        name="description"
        register={register}
        required={validation.content.required}
      />
      <div className="flex justify-end gap-2">
        <BtnAction type="submit" label="제출" color="blue" />
        {about && (
          <BtnAction
            label="삭제"
            onClick={() => onDelete(about.id)}
            color="red"
          />
        )}
      </div>

      {errors.content && <div>콘텐트 필수값입니다 ^^..</div>}
      {errors.title && <div>제목 필수값입니다 ^^..</div>}

      {about && (
        <div>
          <div className="flex justify-between">
            <div> 생성일 : {about.createdAt}</div>
            <div> 수정일 : {about.updatedAt}</div>
          </div>

          <div>{about.isFeatured ? '🥰' : ''}</div>
        </div>
      )}
    </form>
  );
}
