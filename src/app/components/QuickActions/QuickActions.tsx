import QuickActionsRecord from './QuickActionsRecord';

export default function QuickActions() {
  return (
    <div className="rounded-3xl bg-blue-400 shadow-md p-6">
      <div className="px-6">
        <h1 className="text-2xl font-bold py-2">
          Quick Actions
        </h1>
        <div className="grid grid-cols-1">
          <QuickActionsRecord />
          <QuickActionsRecord />
          <QuickActionsRecord />
          <QuickActionsRecord />
        </div>
      </div>
    </div>
  );
}