import React from 'react';
import MyToolbox from './components/MyToolbox';
import HomeSection from './components/HomeSection';
import PortfolioProvider from './provider/PortfolioProvider';
import Projects from './components/Projects';
import EmailFixed from './components/EmailFixed';
import SocialsFixed from './components/SocialsFixed';
import Footer from './components/Footer';
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
