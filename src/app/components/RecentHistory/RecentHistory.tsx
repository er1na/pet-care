import RecentHistoryTab from "./RecentHistoryTab";
import RecentHistoryRecord from "./RecentHistoryRecord";

export default function RecentHistory() {
  return (
    <div className="rounded-3xl bg-blue-400 shadow-md p-6">
      <div className="px-6">
        <h1 className="text-2xl font-bold py-2">
          Recent History
        </h1>
        <div className="py-2 flex flex-col gap-4">
          <RecentHistoryTab />
          <RecentHistoryRecord />
        </div>
      </div>
    </div>
  );
}