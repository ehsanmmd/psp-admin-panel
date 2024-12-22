import Script from 'next/script';
import 'react-toastify/dist/ReactToastify.css';

import './globals.css';
import { SiteProvider } from './context/siteContext';
import { Navbar } from '@/app/components/shared/Navbar';

type LayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <SiteProvider>
      <html>
        <head>
          {/* Google Tag Manager Script */}
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NMQR3K9C');`}
          </Script>
        </head>

        <body className="bg-neutral-200">
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-NMQR3K9C"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          <Navbar />
          {children}
        </body>
      </html>
    </SiteProvider>
  );
};

export default RootLayout;
