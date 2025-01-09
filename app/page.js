import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/cusor';
import LoadingScreen from '@/components/common/loader';
//import Demos from '@/components/landing/Demos';
//import Footer from '@/components/landing/Footer';
//import Header from '@/components/landing/Header';
//import Marq from '@/components/landing/Marq';
//import Navbar from '@/components/landing/Navbar';
//import Pages from '@/components/landing/Pages';
//import Show from '@/components/landing/Show';
//import Testimonials from '@/components/landing/Testimonials';
import Script from 'next/script';
import Navbar from '@/components/common/Navbar';
import Header from '@/components/home-modern-studio/Header';

import Intro from '@/components/home-modern-studio/Intro';
import Numbers from '@/components/home-modern-studio/Numbers';
import Portfolio from '@/components/home-modern-studio/Portfolio';
import Feat from '@/components/home-modern-studio/Feat';
import Team from '@/components/home-modern-studio/Team';
import Testimonials from '@/components/home-modern-studio/Testimonials';
import Clients from '@/components/common/Clients';
import Blog from '@/components/home-main/Blog';
import Marq2 from '@/components/common/Marq2';
import Footer from '@/components/common/Footer';


export const metadata = {
  title: 'NIDFEST',
  icons: {
    icon: 'https://res.cloudinary.com/dnbnev9lr/image/upload/v1734444342/New_Project__20_-removebg-preview_1_md87x7.png',
    shortcut: 'https://res.cloudinary.com/dnbnev9lr/image/upload/v1734444342/New_Project__20_-removebg-preview_1_md87x7.png',
    other: generateStylesheetObject([
      '/assets/css/plugins.css',
      '/landing-preview/css/preview-style.css',
      '/assets/css/style.css',
      'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
      'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap',
    ]),
  },
};

export default function Home() {
  return (
    <body>
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <Lines />
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Header />
            
            <Intro />
            <Portfolio />
           
          {/* 
           <Clients />
           <Feat />
            <Numbers />
             <Marq2 />
           
            <Team />
            <Testimonials /> */}
           
            < Blog/>
           
            
          </main>
          <Footer />
        </div>
      </div>
      <Script
        src="/assets/js/ScrollTrigger.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/ScrollSmoother.min.js"
        strategy="beforeInteractive"
      />
      <Script strategy="beforeInteractive" src="/assets/js/plugins.js"></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/TweenMax.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/charming.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/countdown.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/gsap.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/splitting.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/isotope.pkgd.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/imgReveal/imagesloaded.pkgd.min.js"
      ></Script>
      {/* {/* <Script src="/assets/js/smoother-script.js" strategy="lazyOnload" /> */}{' '}
      <Script src="/assets/js/scripts.js"></Script>
    </body>
  );
}
