interface CalendarDayCellProps {
  day: number | null;
}

export default function CalendarDayCell({ day }: CalendarDayCellProps) {
  return (
    <div>
      <button className="w-20 h-20 rounded-xl bg-white/20 backdrop-blur-md text-white">
        {day || ''}
      </button>
    </div>
  );
}