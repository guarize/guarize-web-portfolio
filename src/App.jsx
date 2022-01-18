import React from 'react';
import {
  MyToolbox,
  HomeSection,
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
      <HomeSection />
      <MyToolbox />
      <Projects />
      <Footer />
    </PortfolioProvider>
  );
}
