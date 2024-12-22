import dynamic from 'next/dynamic';

// import { LandingWhyUs } from '@/app/components/landing/WhyUs';
// import { LandingTrustedCompanies } from '@/app/components/landing/TrustedCompanies';
// import { LandingVideoSection } from '@/app/components/landing/VideoSection';
// import { LandingLoginAdmin } from '@/app/components/landing/LoginAdmin';

// const DynamicHero = dynamic(() => import('@/app/components/landing/Hero'));
// const DynamicFAQs = dynamic(() => import('@/app/components/landing/FAQs'));
// const DynamicAboutAccounting = dynamic(
//   () => import('@/app/components/landing/AboutAccounting'),
// );

export default function Home() {
  return (
    <main>
      {/* <DynamicHero />
      <LandingWhyUs />
      <LandingTrustedCompanies />
      <LandingVideoSection />
      <LandingLoginAdmin />
      <DynamicFAQs />
      <DynamicAboutAccounting /> */}
    </main>
  );
}
