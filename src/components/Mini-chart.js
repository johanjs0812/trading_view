import React, { useEffect } from 'react';

const MiniChart = () => {
  useEffect(() => {

    const scriptId = 'tradingview-widget-script';
    const existingScript = document.getElementById(scriptId);

    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        symbol: "FX:EURUSD",
        width: "100%",
        height: "100%",
        locale: "en",
        dateRange: "1D",
        colorTheme: "dark",
        isTransparent: false,
        autosize: false,
        largeChartUrl: "",
        chartOnly: true,
        noTimeScale: true,
        hideSideToolbar: true,
        hideTopToolbar: true
      });

      document.getElementById('tradingview-widget-container').appendChild(script);

      const label = document.querySelector('span.label-dzbd7lyV.snap-dzbd7lyV.end-dzbd7lyV');
      if (label) {
        label.style.display = 'none';
      }
    }

  }, []);

  return (
    <div className="tradingview-widget-container" id="tradingview-widget-container" style={{maxHeight: "39px"}}>
      <div className="tradingview-widget-container__widget">
      </div>
    </div>
  );
};

export default MiniChart;
