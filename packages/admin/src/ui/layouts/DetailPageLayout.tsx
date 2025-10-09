import React from 'react';
import type { CSSProperties, ReactNode } from 'react';

interface DetailPageLayoutProps {
  children: ReactNode;
  style?: CSSProperties;
}

export default function DetailPageLayout({
  children,
  style,
}: DetailPageLayoutProps) {
  return (
    <div
      className={`flex-1 w-full flex justify-center items-center py-20`}
      style={{ ...style }}
    >
      {children}
    </div>
  );
}
