import React from 'react';

interface MediaDisplayProps {
  mediaList: File[];
  handleFileList: (files: File[]) => void;
  mainIdx?: number;
  handleMainIdx?: (idx: number) => void;
}

export default function MediaDisplay({
  mediaList,
  handleFileList,
  mainIdx,
  handleMainIdx,
}: MediaDisplayProps) {
  const handleRemove = (index: number) => {
    const newList = mediaList.filter((_, i) => i !== index);
    handleFileList(newList);

    // 대표 이미지가 사라질 경우 처리
    if (handleMainIdx) {
      handleMainIdx(0);
    }
  };

  const handleSetMain = (idx: number, file: File) => {
    if (!handleMainIdx) return;

    // 동영상은 대표 불가
    if (file.type.startsWith('video'))
      return alert('동영상은 대표사진이 될 수 없습니다.');

    if (idx !== null || idx !== undefined) handleMainIdx(idx);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {mediaList.map((file, idx) => {
        const url = URL.createObjectURL(file);
        const isMain = idx === mainIdx;
        const isVideo = file.type.startsWith('video');

        return (
          <div
            key={idx}
            className={`relative border rounded overflow-hidden ${
              isMain ? 'border-4 border-blue-400' : 'border-gray-200'
            }`}
          >
            {isVideo ? (
              <video src={url} className="w-full h-40 object-cover" controls />
            ) : (
              <img
                src={url}
                alt={`upload-${idx}`}
                className="w-full h-40 object-cover cursor-pointer"
                onClick={() => handleSetMain(idx, file)}
              />
            )}

            {/* 대표 표시 */}
            {isMain && (
              <span className="absolute top-1 left-1 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                대표
              </span>
            )}

            {/* 삭제 버튼 */}
            <button
              type="button"
              onClick={() => handleRemove(idx)}
              className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs cursor-pointer"
            >
              ✕
            </button>

            {/* 순서 변경 버튼 */}
            {/* <div className="absolute bottom-1 right-1 flex gap-1">
              <button
                onClick={() => moveItem(idx, idx - 1)}
                className="bg-gray-200 px-1 rounded text-xs"
              >
                ↑
              </button>
              <button
                onClick={() => moveItem(idx, idx + 1)}
                className="bg-gray-200 px-1 rounded text-xs"
              >
                ↓
              </button>
            </div> */}
          </div>
        );
      })}
    </div>
  );
}
