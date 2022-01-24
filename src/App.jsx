import React, { useEffect } from 'react';
import Aos from 'aos';
import {
  MyToolbox,
  HeroSection,
  Projects,
  EmailFixed,
  SocialsFixed,
  Footer,
} from './components';
import PortfolioProvider from './provider/PortfolioProvider';
import './styles/App.css';
import 'aos/dist/aos.css';

export default function App() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <PortfolioProvider>
      <SocialsFixed />
      <EmailFixed />
      <HeroSection />
      <MyToolbox />
      <Projects />
      <Footer />
    </PortfolioProvider>
  );
}
