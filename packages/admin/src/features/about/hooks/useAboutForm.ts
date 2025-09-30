import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { postAbout, putAbout, deleteAbout } from '../api';

import type { AboutRequest } from 'shared';

export default function useAboutForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: AboutRequest, id: string | null) => {
    setLoading(true);

    try {
      id ? await putAbout(data, id) : await postAbout(data);
      navigate('/about');
    } catch (err) {
      // todo something
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async (id: string) => {
    setLoading(true);
    try {
      const result = await deleteAbout(id);
      console.log(result.data);
      navigate('/about');
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  const validation = {
    title: {
      required: true,
    },
    content: {
      required: true,
    },
  };

  return {
    onSubmit,
    onDelete,

    validation,
    loading,
  };
}
