
import Countdown from '@/components/countdown';
import AddToHomeScreen from '@/components/AddToHomeScreen';
import Footer from '@/components/Footer';
import PreparationBar from '@/components/PreparationBar';
import StudyTips from '@/components/StudyTips';
import Image from 'next/image';

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center pt-8 px-4 sm:px-6 lg:px-8"
    >
      <header className="w-full p-4 pb-8 flex justify-center pt-4 sm:pt-6 md:pt-8">
        <div className="flex gap-4">
          <AddToHomeScreen />
        </div>
      </header>
      <Image
        src="/background.jpg"
        alt="Success Behind 9As"
        width={200}
        height={200}
        className="mb-8 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64"
        unoptimized
      />
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">2025(2026) O/L Countdown</h1>
      <PreparationBar />
      <Countdown />
      <StudyTips />
      <Footer />
    </div>
  );
}
