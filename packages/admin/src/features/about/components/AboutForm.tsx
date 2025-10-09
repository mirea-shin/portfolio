import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { motion } from 'framer-motion';

import styled from 'styled-components';

import useAboutDetail from '../hooks/useAboutDetail';
import useAboutForm from '../hooks/useAboutForm';
import { Button, Loading } from 'ui-components';

import { Input, Textarea } from '../../../ui/form';

import type { AboutRequest } from 'shared';

const CheckBox = styled(motion.input)`
  border: ${(props) => props.theme.colors.text} 1px solid;
  &:checked {
    background: ${(props) => props.theme.colors.text};
  }
`;

interface Temp {
  isFeatured: boolean;
}
export default function AboutForm() {
  const { id } = useParams();

  const { loading, about } = useAboutDetail(id);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<AboutRequest & Temp>();

  const isFeaturedValue = watch('isFeatured'); // 현재 값 감시

  const {
    onSubmit,
    onDelete,

    validation,
  } = useAboutForm();

  useEffect(() => {
    if (about) {
      reset({
        isFeatured: about.isFeatured,
        title: about.title,
        content: about.content,
      });
    }
  }, [about, reset]);

  if (loading) return <Loading />;

  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit((data) =>
        onSubmit(data, about?.id ? about.id : null)
      )}
      className="w-4xl border rounded-md  p-6 space-y-8 mx-auto shadow-2xl "
    >
      {/* 대표어바웃 */}
      <div className="flex flex-col gap-3 relative">
        <div className="flex items-center gap-2 relative">
          <CheckBox
            type="checkbox"
            id="isFeatured"
            {...register('isFeatured')}
            className={`appearance-none w-5 h-5 rounded transition-all duration-150 ${
              about && about.isFeatured
                ? 'cursor-not-allowed'
                : 'cursor-pointer'
            } `}
            whileTap={{ scale: 0.9 }}
            checked={isFeaturedValue} // controlled
            disabled={isFeaturedValue}
          />
          <label htmlFor="isFeatured" className="text-xl">
            Featured About
          </label>
        </div>
        {!(about && about.isFeatured) && (
          <div className="absolute bottom-6 text-xs left-8">
            <p className=" text-blue-500">
              Feature About 선택 시 기존 About 대체 됩나다.
            </p>
          </div>
        )}

        {about && (
          <div className="flex justify-between">
            <div> 생성일 : {about.createdAt}</div>

            {about.updatedAt && <div> 수정일 : {about.updatedAt}</div>}
          </div>
        )}
      </div>

      {/* 타이틀명 */}
      <Input
        label="Title"
        name="title"
        register={register}
        required={validation.title.required}
        error={!!errors.title}
      />

      {/* 콘텐트 */}
      <Textarea
        label="Content"
        name="content"
        register={register}
        required={validation.content.required}
        error={!!errors.content}
      />

      {/* 버튼 */}
      <div className="flex justify-end gap-2">
        {about && !about.isFeatured && (
          <Button label="Delete" onClick={() => onDelete(about.id)} border />
        )}
        <Button type="submit" label="Submit" />
      </div>
    </form>
  );
}
