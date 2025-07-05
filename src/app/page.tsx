import Header from './components/Header';
import Calendar from './components/Calendar/Calendar';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-blue-100 backdrop">
      <div className="p-6 flex flex-col gap-6">
        <Header />
        <Calendar />
      </div>
    </main>
  );
}