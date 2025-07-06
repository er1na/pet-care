import Header from './components/Header';
import Calendar from './components/Calendar/Calendar';
import QuickActions from './components/QuickActions/QuickActions';
import RecentHistory from './components/RecentHistory/RecentHistory';

export default function HomePage() {
  return (
    <>
      <Header />
      <Calendar />
      <QuickActions />
      <RecentHistory />
    </>
  );
}