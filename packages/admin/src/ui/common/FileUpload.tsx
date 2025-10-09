import React, { useRef } from 'react';

import styled from 'styled-components';

import { MdOutlineAddPhotoAlternate } from 'react-icons/md';

const UploadBtn = styled.button`
  &:hover {
    border: 1px solid red;
    padding: 2rem;
    border-radius: 50%;
  }
`;

interface FileUploadProps {
  handleFileList: (files: File[]) => void;
}

export default function FileUpload({ handleFileList }: FileUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];

    handleFileList(files);
  };

  return (
    <div className="space-y-4">
      <UploadBtn onClick={() => fileInputRef.current?.click()} type="button">
        <MdOutlineAddPhotoAlternate className="text-9xl cursor-pointer" />
        <input
          type="file"
          accept="image/*,video/*"
          multiple
          className="hidden"
          onChange={handleFileSelect}
          ref={fileInputRef}
        />
      </UploadBtn>
    </div>
  );
}
