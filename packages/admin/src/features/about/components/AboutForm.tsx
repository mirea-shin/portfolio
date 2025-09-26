import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import useAboutDetail from '../hooks/useAboutDetail';
import useAboutForm from '../hooks/useAboutForm';

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
    fetchDeleteAbout,

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
    <div>
      <form
        onSubmit={handleSubmit((data) =>
          onSubmit(data, about?.id ? about.id : null)
        )}
      >
        <input {...register('title')} className="border" />
        <textarea
          {...register('content', { ...validation.content })}
          className="border"
        />
        <input type="submit" />
        {errors.content && <div>콘텐트 필수값입니다 ^^..</div>}
        {errors.title && <div>제목 필수값입니다 ^^..</div>}

        {about && (
          <div>
            <div> {about.createdAt}</div>
            <div> {about.updatedAt}</div>

            <div>{about.isFeatured ? '🥰' : ''}</div>
            <button onClick={() => fetchDeleteAbout(about.id)} type="button">
              삭제
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
