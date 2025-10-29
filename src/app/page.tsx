
import Countdown from '@/components/countdown';
import DailyReminderButton from '@/components/DailyReminderButton';
import PWAInstallButton from '@/components/PWAInstallButton';
import AddToHomeScreen from '@/components/AddToHomeScreen';
import ThemeToggle from '@/components/ThemeToggle';
import Footer from '@/components/Footer';
import PreparationBar from '@/components/PreparationBar';
import StudyTips from '@/components/StudyTips';
import Image from 'next/image';

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center pt-16"
    >
      <header className="w-full p-4 pb-8 flex justify-center">
        <div className="flex gap-4">
          <ThemeToggle />
          <DailyReminderButton />
          <PWAInstallButton />
          <AddToHomeScreen />
        </div>
      </header>
      <Image
        src="/background.jpg"
        alt="Success Behind 9As"
        width={200}
        height={200}
        className="mb-8"
      />
      <h1 className="text-5xl font-bold mb-4">2026 O/L Countdown</h1>
      <PreparationBar />
      <Countdown />
      <StudyTips />
      <Footer />
    </div>
  );
}
