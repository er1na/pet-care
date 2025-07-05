import React from 'react';
import Image from 'next/image';

interface CalendarHeaderProps {
  currentDate: Date;
  onPreviousMonth: () => void;
  onNextMonth: () => void;
}

export default function CalendarHeader({ currentDate, onPreviousMonth, onNextMonth }: CalendarHeaderProps) {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const monthName = monthNames[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  return (
    <div className="flex justify-between items-center w-full px-6">
      <button
        className="text-2xl font-bold rounded-3xl p-2 bg-white/20 backdrop-blur-md"
        onClick={onPreviousMonth}
      >
        <Image
          src="/chevron-left.svg"
          alt="arrow-left"
          width={24}
          height={24}
          className="filter brightness-0 invert"
        />
      </button>
      <h1 className="text-2xl font-bold text-white">{monthName} {year}</h1>
      <button
        className="text-2xl font-bold rounded-3xl p-2 bg-white/20 backdrop-blur-md"
        onClick={onNextMonth}
      >
        <Image
          src="/chevron-right.svg"
          alt="arrow-right"
          width={24}
          height={24}
          className="filter brightness-0 invert"
        />
      </button>
    </div>
  );
}