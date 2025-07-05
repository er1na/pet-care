import React from 'react';
import Image from 'next/image';

export default function CalendarHeader() {
  return (
    <div className="flex justify-between items-center w-full px-6">
      <button className="text-2xl font-bold rounded-3xl p-2 bg-white/20 backdrop-blur-md">
        <Image
          src="/chevron-left.svg"
          alt="arrow-left"
          width={24}
          height={24}
          className="filter brightness-0 invert"
        />
      </button>
      <h1 className="text-2xl font-bold">June 2025</h1>
      <button className="text-2xl font-bold rounded-3xl p-2 bg-white/20 backdrop-blur-md">
        <Image
          src="/chevron-right.svg"
          alt="arrow-left"
          width={24}
          height={24}
          className="filter brightness-0 invert"
        />
      </button>
    </div>
  );
}