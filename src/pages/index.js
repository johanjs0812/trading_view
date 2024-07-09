import React, { useState } from 'react';
import StockMarketSelector from '@/components/Stock-mk-selector';
import StickyTableHeader from '@/components/Sticky-table-header';
import MatchedPrice from '@/components/Matched-price';
import MatchedPriceFooter from '@/components/Matched-price-footer';
import StockChartDetail from '@/components/Stock-chart-detail';

const Home = () => {

  const [selectedIndex, setSelectedIndex] = useState('Dow Jones');
  const [showStockDetail, setStockDetail] = useState(false);
  const [SymbolExchange, setData] = useState("NASDAQ:AAPL");
  const [SymbolResponse, setRes] = useState({});

  const handleButtonClick = () => {
    setStockDetail(true);
  };

  const handleHideButtonClick = () => {
    setStockDetail(false);
  };

  const getSymbolExchange = (SymbolExchange, SymbolResponse) => {
    setData(SymbolExchange);
    setRes(SymbolResponse);
  };

  return (
    <main>
        < StockMarketSelector selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        < StickyTableHeader/>
        < MatchedPrice selectedIndex={selectedIndex} onShow={handleButtonClick} getSymbolExchange={getSymbolExchange}  />
        < MatchedPriceFooter />
        { showStockDetail && < StockChartDetail onHide={handleHideButtonClick} SymbolExchange={SymbolExchange} SymbolResponse={SymbolResponse} /> }
    </main>
  );
};

export default Home;
