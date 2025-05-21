import AboutSection from 'components/homepage/about-section';
import CollectionsSection from 'components/homepage/collections-section';
import LatestArrival from 'components/homepage/latest-arrival-section';
import { Reccomendations } from 'components/homepage/recommendations';
import VacationInfo from 'components/homepage/vacation-info';
import Footer from 'components/layout/footer';

export const metadata = {
  description: 'MAKKiKi〜豊かさ〜公式オンラインショップ',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <VacationInfo />
      <div className="flex flex-col gap-16 px-4 py-16 md:gap-32 md:px-8 md:py-24">
        <AboutSection />
        <CollectionsSection />
        <Reccomendations />
        <LatestArrival />
      </div>
      <Footer />
    </div>
  );
}
