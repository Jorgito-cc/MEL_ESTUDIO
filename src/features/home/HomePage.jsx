import React from 'react';
import { Hero } from './components/Hero';
import { CategoryCards } from './components/CategoryCards';
import { HomeServices } from './components/HomeServices';
import { HomeAbout } from './components/HomeAbout';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <CategoryCards />
      <HomeServices />
      <HomeAbout />
    </>
  );
};
