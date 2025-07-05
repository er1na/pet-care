import React from 'react';

export default function Header() {
  return (
    <div>
      <div className="rounded-3xl p-6 bg-blue-400 flex flex-col shadow-md items-center justify-center">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          PetCare Pro
        </h1>
        <p className="text-sm mt-2">愛するペットの健康を記録しましょう</p>

        <div className="mt-4 flex gap-2 flex-wrap">
          <button className="px-4 py-1 rounded-full bg-white/20 backdrop-blur-md text-white">🐶 ポチ</button>
          <button className="px-4 py-1 rounded-full bg-white/20 backdrop-blur-md text-white">🐱 ミケ</button>
          <button className="px-4 py-1 rounded-full bg-white/30 text-white">+ New Pet</button>
        </div>
      </div>
    </div>

  );
}