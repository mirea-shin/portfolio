import React from 'react';
import { useNavigate } from 'react-router-dom';

import { IoMdAdd } from 'react-icons/io';

interface BtnAddProps {
  path: string;
}

export default function BtnAdd({ path }: BtnAddProps) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="cursor-pointer text-5xl rounded-full transition delay-150 duration-300 ease-in-out  hover:scale-110 hover:text-gray-500 ..."
      onClick={() => {
        navigate(path);
      }}
    >
      <IoMdAdd />
    </button>
  );
}
