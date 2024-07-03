import React from 'react';
import StockMarketSelector from '@/components/Stock-mk-selector';
import StickyTableHeader from '@/components/Sticky-table-header';
import MatchedPrice from '@/components/Matched-price';

const Home = () => {
  return (
    <main>
      
        < StockMarketSelector/>
        < StickyTableHeader/>
        < MatchedPrice />

    </main>
  );
};

export default Home;
