import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Available from '@/components/Available';
import Novinki from '@/components/Novinki';
import Statistics from '@/components/Statistics';
import DiscountCard from '@/components/DiscountCard';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Available />
      <Novinki />
      <Statistics />
      <DiscountCard />
      <Footer />
    </main>
  );
}

