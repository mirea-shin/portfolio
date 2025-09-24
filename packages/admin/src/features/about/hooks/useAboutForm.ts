import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { postAbout, putAbout, deleteAbout } from '../api';

import type { AboutRequest } from 'shared';

export default function useAboutForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: AboutRequest, id?: number) => {
    setLoading(true);

    try {
      if (id) {
        await postAbout(data);
        navigate('/about');
      } else {
        if (!id) return;
        await putAbout(data, id.toString());
      }
    } catch (err) {
      // todo something
    } finally {
      setLoading(false);
    }
  };

  const fetchDeleteAbout = async (id: number) => {
    setLoading(true);
    try {
      const result = await deleteAbout(id);
      console.log(result.data);
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
    fetchDeleteAbout,

    validation,
    loading,
  };
}
