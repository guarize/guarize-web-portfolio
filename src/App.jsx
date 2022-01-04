import React from 'react';
import MyToolbox from './components/MyToolbox';
import HomeSection from './components/HomeSection';
import PortfolioProvider from './provider/PortfolioProvider';
import Projects from './components/Projects';
import EmailFixed from './components/EmailFixed';
import SocialsFixed from './components/SocialsFixed';
import './styles/App.css';

export default function App() {
  return (
    <PortfolioProvider>
      <SocialsFixed />
      <EmailFixed />
      <HomeSection />
      <MyToolbox />
      <Projects />
    </PortfolioProvider>
  );
}
