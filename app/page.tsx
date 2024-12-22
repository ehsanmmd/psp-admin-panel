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
    <main className="h-[90vh] flex justify-center items-center">
      <h1 className="text-[100px] font-semibold text-neutral-600">
        Admin Panel
      </h1>
    </main>
  );
}
