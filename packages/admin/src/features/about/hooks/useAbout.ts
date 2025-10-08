import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getAllAbout, upadteFeaturedAbout } from '../api';

import type { About } from 'shared';

// TODO featured 등록

export default function useAbout() {
  const [allAbout, setAllAbout] = useState<About[] | null>();
  const [loading, setLoading] = useState(false);
  const [editingFeature, setEditingFeature] = useState(false);

  const navigate = useNavigate();

  const handleAboutClick = (id: string) => {
    navigate(`/about/${id}`);
  };

  const handleSettingBtn = () => setEditingFeature((prev) => !prev);

  const fetchAllAbout = async () => {
    try {
      const result = await getAllAbout();
      if (result.data) {
        setAllAbout(result.data.data);
      }
    } finally {
      setLoading(false);
    }
  };

  const editFeaturedAbout = async (id: string) => {
    try {
      const result = await upadteFeaturedAbout(id);
      if (result) {
        await fetchAllAbout();
        setEditingFeature(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAllAbout();
  }, []);

  return {
    allAbout,
    loading,
    editingFeature,
    handleAboutClick,
    handleSettingBtn,
    editFeaturedAbout,
  };
}
