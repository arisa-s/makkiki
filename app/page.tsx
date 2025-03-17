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
    <div className="flex flex-col gap-12 py-12">
      <AboutSection />
      <CollectionsSection />
      <Reccomendations />
      <LatestArrival />
      <Footer />
    </div>
  );
}
