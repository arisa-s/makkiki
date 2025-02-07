import CollectionsSection from 'components/homepage/collections-section';
import HomepageHero from 'components/homepage/homepage-hero';
import LatestArrival from 'components/homepage/latest-arrival-section';
import { Reccomendations } from 'components/homepage/recommendations';
import Footer from 'components/layout/footer';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <HomepageHero />
      {/* <NewsBanner text="新着：イタリアのお洒落おばあちゃんのマストアイテムであるグラスホルダー、多数入荷しました！" /> */}
      <Reccomendations />
      <CollectionsSection />
      <LatestArrival />
      <Footer />
    </>
  );
}
