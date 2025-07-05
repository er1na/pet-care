import CalendarDayCell from './CalendarDayCell';

const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

export default function CalendarGrid() {
  return (
    <div className="flex items-center justify-between w-full p-6">
      <div className='grid grid-cols-7 w-full gap-4 justify-items-center'>
        {weekDays.map((day) => (
          <div key={day} className="text-center">
            {day}
          </div>
        ))}
        <CalendarDayCell />
        <CalendarDayCell />
        <CalendarDayCell />
        <CalendarDayCell />
        <CalendarDayCell />
        <CalendarDayCell />
        <CalendarDayCell />
        <CalendarDayCell />
        <CalendarDayCell />
        <CalendarDayCell />
        <CalendarDayCell />
      </div>
    </div>
  );
}