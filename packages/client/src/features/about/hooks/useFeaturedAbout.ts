import { useState, useEffect } from 'react';
import { getFeaturedAbout } from '../api';

import type { About } from 'shared';

export default function useFeaturedAbout() {
  const [featuredAbout, setFeaturedAbout] = useState<About | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const result = await getFeaturedAbout();
        if (result.data) {
          setFeaturedAbout(result.data.data);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchAbout();
  }, []);

  return { featuredAbout, loading };
}
