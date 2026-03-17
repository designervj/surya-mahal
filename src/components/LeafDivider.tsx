import React from 'react';

export const LeafDivider = () => (
  <div className="flex items-center justify-center gap-3 my-12 opacity-50">
    <div className="h-px w-16 bg-gray-500"></div>
    <svg width="32" height="16" viewBox="0 0 32 16" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-600">
      <path d="M16 16C16 16 20 8 32 8C20 8 16 0 16 0C16 0 12 8 0 8C12 8 16 16 16 16Z" fill="currentColor" opacity="0.2"/>
      <path d="M16 16C16 16 20 8 32 8C20 8 16 0 16 0C16 0 12 8 0 8C12 8 16 16 16 16Z" />
    </svg>
    <div className="h-px w-16 bg-gray-500"></div>
  </div>
);
