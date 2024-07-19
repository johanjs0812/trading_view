import React, { useEffect, useState, useRef } from 'react';

import "../styles/TrendingTickers.css";
import MiniChart from "./Mini-chart";
import RangeBar from "./Range-bar";

import { PORT, API, YAHOO, DOWJONES_ENDPOINT } from '@/constants/Api';
import LoaderStart from './LoadersStart';

import useApi from '@/hooks/ApiUse';

import formatNumberToUSD from '@/helpers/formattoUSD';
import formatNumberINT from '@/helpers/formatNumberINT';
import roundToTwoDecimals from '@/helpers/roundtoTwoPercent';
import { formatDate } from '@/helpers/formatTime';

const TrendingTickers = () => {

    const { data, loading } = useApi(`${PORT}/${API}/${YAHOO}/${DOWJONES_ENDPOINT}`);
    const [top20Data, set20] = useState();

    useEffect(() => {
        const sortedData = data?.sort((a, b) => b.regularMarketVolume - a.regularMarketVolume);
        set20(sortedData?.slice(0, 20));
    }, [data]);

    if (loading) {
        return (
            <>
            < LoaderStart />
            </>
        )
    }

    return(
        <>
            <div id="TrendingTickers">

                <div className="header-select flex items-center mx-auto">
                    <h2 className="font-bold mr-1">
                        Trending Tickers
                    </h2>

                    <i class='bx bx-chevron-down text-lg'></i>
                </div>

                <table className="title-table mx-auto w-full">
                    <thead className="w-full text-xs">
                        <tr className="w-full" style={{height: "42px"}}>
                            <th className="text-left pl-1.5 pr-15px pb-1.5 pt-5px align-middle" style={{width: "10%"}}>
                                Symbol
                                <div className="symbol"></div>
                            </th>
                            <th className="text-left pr-2.5 pb-1.5 pt-5px pl-2.5 align-middle" style={{minWidth: "180px"}}>Name</th>
                            <th className="text-right pl-5 pb-1.5 pt-5px align-middle" style={{width: "8%"}}>Last Price</th>
                            <th className="text-right pl-5 pb-1.5 pt-5px align-middle" style={{minWidth: "100px"}}>Market Time</th>
                            <th className="text-right pl-5 pb-1.5 pt-5px align-middle" style={{width: "8%"}}>Change</th>
                            <th className="text-right pl-5 pb-1.5 pt-5px align-middle" style={{width: "8%"}}>% Change</th>
                            <th className="text-right pl-5 pb-1.5 pt-5px align-middle" style={{width: "8%"}}>Volume</th>
                            <th className="text-right pl-5 pb-1.5 pt-5px align-middle" style={{width: "6.5%"}}>Market Cap</th>
                            <th className="text-right pl-5 pb-1.5 pt-5px align-middle" style={{width: "20%"}}>Intraday High/Low</th>
                            <th className="text-left pr-2.5 pl-5 pb-1.5 pt-5px align-middle" style={{width: "20%"}}>52 Week Range</th>
                            <th className="text-left pr-2.5 pl-5 pb-1.5 pt-5px align-middle" style={{width: "20%"}}>Day Chart</th>
                        </tr>
                    </thead>

                    <tbody className="text-13px">

                        {top20Data?.map((item, index) => (
                            <tr key={index}>
                                <td className="text-left pl-1.5 pr-15px pb-1.5 pt-5px align-middle font-semibold">
                                    {item.symbol}
                                    <div className="symbol"></div>
                                </td>
                                <td className="text-left pr-2.5 pb-1.5 pt-5px pl-2.5 align-middle">{item.longName}</td>
                                <td className="text-right pl-5 pb-1.5 pt-5px align-middle font-semibold">${item.regularMarketPrice}</td>
                                <td className="text-right pl-5 pb-1.5 pt-5px align-middle">{formatDate(item?.regularMarketTime)}</td>
                                
                                <td 
                                    className="text-right pl-5 pb-1.5 pt-5px align-middle font-semibold"
                                    style={{ 
                                        color: item.regularMarketChange === 0 
                                        ? 'var(--TC-color)' 
                                        : item.regularMarketChangePercent < 0 
                                        ? 'var(--gia-giam-color)' 
                                        : 'var(--gia-tang-color)' 
                                    }}
                                >
                                {item.regularMarketChange?.toFixed(2)}
                                </td>

                                <td 
                                    className="text-right pl-5 pb-1.5 pt-5px align-middle font-semibold"
                                    style={{ 
                                        color: item.regularMarketChangePercent === 0 
                                        ? 'var(--TC-color)' 
                                        : item.regularMarketChangePercent < 0 
                                        ? 'var(--gia-giam-color)' 
                                        : 'var(--gia-tang-color)' 
                                    }}
                                >
                                {roundToTwoDecimals(item.regularMarketChangePercent)}
                                </td>

                                <td className="text-right pl-5 pb-1.5 pt-5px align-middle font-semibold">{formatNumberINT(item.regularMarketVolume)}</td>
                                <td className="text-right pl-5 pb-1.5 pt-5px align-middle font-medium">{formatNumberINT(item.marketCap)}</td>
                                <td className="pl-5 pb-1.5 pt-5px align-middle">
                                    <RangeBar 
                                    range={item.regularMarketDayRange} 
                                    change={item.regularMarketChange} 
                                    R2high={item?.Infoby1p[item?.Infoby1p?.length - 1].High}
                                    R2low={item?.Infoby1p[item?.Infoby1p?.length - 1].Low}
                                    />
                                </td>
                                <td className="pr-2.5 pl-5 pb-1.5 pt-5px align-middle">
                                    <RangeBar 
                                    range={item.fiftyTwoWeekRange} 
                                    change={item.regularMarketChange}
                                    R2high={item.regularMarketDayRange?.high}
                                    R2low={item.regularMarketDayRange?.low}
                                    />
                                </td>
                                <td className="text-left pr-2.5 pl-5 pb-1.5 pt-5px align-middle" style={{ height: "39px" }}>
                                    <MiniChart 
                                        symbol={item.symbol} 
                                        fullExchangeName={item.fullExchangeName} 
                                        id={index}
                                    />  
                                </td>
                            </tr>
                        ))}

                    </tbody>

                </table>
            </div>
            <br></br>
        </>
    )

}

export default TrendingTickers;