import React from 'react';
import StockMarketSelector from '@/components/Stock-mk-selector';
import StickyTableHeader from '@/components/Sticky-table-header';
import MatchedPrice from '@/components/Matched-price';
import MatchedPriceFooter from '@/components/Matched-price-footer';
import StockChartDetail from '@/components/Stock-chart-detail';

const Home = () => {
  return (
    <main>
        < StockMarketSelector/>
        < StickyTableHeader/>
        < MatchedPrice />
        < MatchedPriceFooter />
        < StockChartDetail />
    </main>
  );
};

export default Home;
