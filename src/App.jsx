import React from 'react';
import MyToolbox from './components/MyToolbox';
import HomeSection from './components/HomeSection';
import PortfolioProvider from './provider/PortfolioProvider';
import './styles/App.css';
import Projects from './components/Projects';

export default function App() {
  return (
    <PortfolioProvider>
      <HomeSection />
      <MyToolbox />
      <Projects />
    </PortfolioProvider>
  );
}
