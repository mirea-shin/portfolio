import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getAllAbout } from '../api';

import type { About } from 'shared';

// TODO featured 등록

export default function useAbout() {
  const [allAbout, setAllAbout] = useState<About[] | null>();
  const [loading, setLoading] = useState(false);
  const [showSettingBtns, setShowSettingBtns] = useState(false);

  const navigate = useNavigate();

  const handleAboutClick = (id: string) => {
    navigate(`/about/${id}`);
  };
  const handleSettingBtn = () => setShowSettingBtns((prev) => !prev);

  useEffect(() => {
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
    fetchAllAbout();
  }, []);

  return {
    allAbout,
    loading,
    showSettingBtns,
    handleAboutClick,
    handleSettingBtn,
  };
}
