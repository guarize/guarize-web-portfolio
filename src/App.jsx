import React from 'react';
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

export default function App() {
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
