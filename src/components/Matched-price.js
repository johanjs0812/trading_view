import React, { useEffect, useState, useRef } from 'react';
import "../styles/MatchedPrice.css"
import useApi from '@/hooks/ApiUse';
import ListStockInfor from './List-stock-infor';
import { PORT, API, YAHOO, SP500_ENDPOINT, DOWJONES_ENDPOINT } from '@/constants/Api';
import { dowJonesSymbols } from '@/lib/dowJones_symbols';
import { sp500Symbols } from '@/lib/sp500_symbols';
import LoaderStart from './LoadersStart';

const MatchedPrice = ({selectedIndex, onShow, getSymbolExchange }) => {

    const { data, loading, error, updateUrl } = useApi(`${PORT}/${API}/${YAHOO}/${DOWJONES_ENDPOINT}`);
    const [symbols, setSymbols] = useState(dowJonesSymbols);

    useEffect(() => {
        if (selectedIndex === "S&P 500") {
          updateUrl(`${PORT}/${API}/${YAHOO}/${SP500_ENDPOINT}`);
          setSymbols(sp500Symbols);
        } else {
          updateUrl(`${PORT}/${API}/${YAHOO}/${DOWJONES_ENDPOINT}`);
          console.log(`${PORT}/${API}/${YAHOO}/${DOWJONES_ENDPOINT}`);
          setSymbols(dowJonesSymbols);
        }
    }, [selectedIndex, updateUrl]);
    
    if (loading) {
        return < LoaderStart />;
    } else {
        return (
            <>
                <div id="giancach"></div>
                <table id="MatchedPrice" className="proboard banggia-full">
                    
                    <colgroup>
                        <col className="show-on-mobile col-symbol" />
                        <col className="show-on-mobile col-price" />
                        {/* <col className="show-on-mobile col-price" />
                        <col className="show-on-mobile col-price" /> */}
                        <col className="col-vol col-vol-lg" />
                        <col className="col-price" />
                        <col className="col-vol" />
                        <col className="col-price" />
                        <col className="col-vol" />
                        <col className="col-price" />
                        <col className="col-vol" />
                        <col className="col-price" />
                        <col className="col-vol col-vol-sm" />
                        <col className="col-diff" />
                        <col className="col-price" />
                        <col className="col-vol" />
                        <col className="col-price" />
                        <col className="col-vol" />
                        <col className="col-price" />
                        <col className="col-vol" />
                        <col className="col-price" />
                        <col className="col-price" />
                        <col className="col-price" />
                        <col className="col-vol" />
                        <col className="col-vol" />
                        <col className="col-vol col-vol-lg" />

                    </colgroup>

                    <ListStockInfor index={symbols} data={data} onShow={onShow} getSymbolExchange={getSymbolExchange} />
                </table>
            </>
        );
    }
};


export default MatchedPrice;
