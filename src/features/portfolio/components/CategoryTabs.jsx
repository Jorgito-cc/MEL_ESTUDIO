import React from 'react';
import { CATEGORIES_LIST } from '../data/portfolioData';
import '../styles/portfolio.css';

export const CategoryTabs = ({ currentCategory, onSelectCategory }) => {
  return (
    <div className="portfolio-tabs" role="tablist">
      {CATEGORIES_LIST.map((cat) => {
        const isActive = currentCategory === cat.id;
        return (
          <button
            key={cat.id}
            role="tab"
            aria-selected={isActive}
            className={`portfolio-tab-btn ${isActive ? 'portfolio-tab-btn--active' : ''}`}
            onClick={() => onSelectCategory(cat.id)}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
};
