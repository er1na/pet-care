import React from 'react';

interface InputFieldFrameProps {
  children: React.ReactNode;
}

export default function InputFieldFrame({ children }: InputFieldFrameProps) {
  return (
    <div className="rounded-2xl p-5 bg-white/20 backdrop-blur-md text-white border-1 border-white/30">
      {children}
    </div>
  );
}