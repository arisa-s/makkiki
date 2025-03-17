import AboutSection from 'components/homepage/about-section';
import CollectionsSection from 'components/homepage/collections-section';
import LatestArrival from 'components/homepage/latest-arrival-section';
import { Reccomendations } from 'components/homepage/recommendations';
import Footer from 'components/layout/footer';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
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
