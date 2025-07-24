import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MiddleOne from './components/MiddleOne';
import MiddleTwo from './components/MiddleTwo';
import Bottom from './components/Bottom';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <MiddleOne />
      <MiddleTwo />
      <Bottom/>
    </main>
  );
}
