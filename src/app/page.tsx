import Header from './components/Header';
import Calendar from './components/Calendar/Calendar';
import QuickActions from './components/QuickActions/QuickActions';
import RecentHistory from './components/RecentHistory/RecentHistory';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-blue-100 backdrop">
      <div className="max-w-4xl mx-auto p-6 flex flex-col gap-6">
        <Header />
        <Calendar />
        <QuickActions />
        <RecentHistory />
      </div>
    </main>
  );
}