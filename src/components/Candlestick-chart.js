import React, { useEffect, useRef, memo } from 'react';
import "../styles/CandleStickChart.css";

const CandleStickChart = ({ SymbolExchange }) => {
  
    const container = useRef();

    useEffect(() => {
        if (container.current) {
            container.current.innerHTML = '';
        }

        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.type = "text/javascript";
        script.async = true;

        console.log('xxx', SymbolExchange)

        const symbol = SymbolExchange || "NASDAQ:AAPL";

        script.innerHTML = `
          {
            "width": "100%",
            "height": "100%",
            "symbol": "${symbol}",
            "timezone": "Etc/UTC",
            "theme": "light",
            "style": "1",
            "locale": "en",
            "withdateranges": true,
            "range": "YTD",
            "hide_side_toolbar": false,
            "allow_symbol_change": true,
            "calendar": false,
            "studies": [
              "Volume@tv-basicstudies"
            ],
            "support_host": "https://www.tradingview.com"
          }`;

        container.current.appendChild(script);
    }, [SymbolExchange]);

    return (
        <div id='CandleStickChart'>
            <div className="tradingview-widget-container" ref={container}>
                <div className="tradingview-widget-container__widget"></div>
            </div>
        </div>
    );
}

export default memo(CandleStickChart);
