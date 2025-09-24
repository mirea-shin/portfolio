import React, { useEffect, useState } from 'react';

import { getAbout } from '../api';
import type { About } from 'shared';

export default function useAboutDetail(id: string | undefined) {
  const [about, setAbout] = useState<About | null>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    if (id !== 'new') {
      // edit
      const fetchAbout = async (id: string) => {
        try {
          const result = await getAbout(id);
          if (result.data) {
            setAbout(result.data.data);
          }
        } finally {
          setLoading(false);
        }
      };
      fetchAbout(id);
    }
  }, [id]);

  return {
    loading,
    about,
  };
}
