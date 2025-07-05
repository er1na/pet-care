import React from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';

export default function Calendar() {
  return (
    <div>
      <div className="p-6 rounded-3xl bg-blue-400 shadow-md flex flex-col justify-center items-center">
        <CalendarHeader />
        <CalendarGrid />
      </div>
    </div>
  );
}