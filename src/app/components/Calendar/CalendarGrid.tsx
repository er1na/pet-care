"use client";

import React from 'react';
import CalendarDayCell from './CalendarDayCell';

interface CalendarGridProps {
  currentDate: Date;
}

const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

export default function CalendarGrid({ currentDate }: CalendarGridProps) {
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);

  const firstDayOfWeek = firstDay.getDay();
  const daysInMonth = lastDay.getDate();

  const calendarDays = [];

  for (let i = 0; i < firstDayOfWeek; i++) {
    calendarDays.push(null);
  }

  // 今月の日付を追加
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  return (
    <div className="flex items-center justify-between w-full p-6">
      <div className='grid grid-cols-7 w-full gap-4 justify-items-center'>
        {weekDays.map((day) => (
          <div key={day} className="text-center text-white font-semibold">
            {day}
          </div>
        ))}
        {calendarDays.map((day, index) => (
          <CalendarDayCell key={index} day={day} />
        ))}
      </div>
    </div>
  );
}