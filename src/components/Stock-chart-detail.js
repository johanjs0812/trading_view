import React, { useEffect, useState, useRef } from 'react';

import "../styles/StockChartDetail.css";
import Link from 'next/link';
import CandleStickChart from "./Candlestick-chart";
import DeepAndNews from "./Deep-and-news";
import OrderBook from "./Order-book";

import roundToTwoDecimals from "@/helpers/roundtoTwoPercent";
import roundToUSD from "@/helpers/roundtoTwoUSD";
import formatNumberToUSD from "@/helpers/formattoUSD";
import formatNumberINT from "@/helpers/formatNumberINT";
import calculateAveragePrice from "@/helpers/calculateAveragePrice";
import getLastVolumePrice from "@/helpers/getLastVolumePrice";
import calculateTransactionValue from "@/helpers/calculateTransactionValue";
import convertToPercentage from '@/helpers/convertToPercentage';
import calculateKLtoKLTBPercentage from '@/helpers/calculateKLtoKLTBPercentage';

import { PORT, API, Y_FIN, DOWJONES_DESCRIPTION_ENPOINT } from "@/constants/Api";
import useApi from '@/hooks/ApiUse';

import Loaders from './Loaders';


const StockChartDetail = ({onHide, SymbolExchange, SymbolResponse}) => {

    const initialSelectedIndex = SymbolResponse?.symbol || 'AAPL';
    const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);
    const { data, loading, error, updateUrl } = useApi(`${PORT}/${API}/${Y_FIN}/${DOWJONES_DESCRIPTION_ENPOINT}?ticker=${initialSelectedIndex}`);

    useEffect(() => {
        if (selectedIndex !== initialSelectedIndex) {
            updateUrl(`${PORT}/${API}/${Y_FIN}/${DOWJONES_DESCRIPTION_ENPOINT}?ticker=${selectedIndex}`);
        }
    }, [selectedIndex, updateUrl, initialSelectedIndex]);

    useEffect(() => {
        setSelectedIndex(SymbolResponse.symbol);
    }, [SymbolResponse.symbol]);

    if (loading || !data) {
        return(
            <>
            <div id="StockChartDetail">
                <section className="skylight-wrapper stock-details">
                    <div className="skylight-dialog">
                        < Loaders/>
                    </div>
                </section>
            </div>   
            </>
        )
    }
    else{
        // console.log(data)

        return(
            <>
                <div id="StockChartDetail">
    
                    <section className="skylight-wrapper stock-details">
    
                        <div className="skylight-dialog">
    
                            <div onClick={onHide} className="skylight-close-button text-right font-semibold">
                                <i class='bx bx-x' ></i>
                            </div>
    
                            <div className="flex items-center justify-between px-2.5 w-full mb-3">
                                <div className="flex items-center gap-15px">
                                    <h2 className="font-semibold text-base">{SymbolResponse.symbol} - {SymbolResponse.longName}</h2>
                                    <div className="rounded flex items-center cursor-pointer gap-1 bg-brand-shadow fire-btn-uudai border-main-color mx-2.5">
                                        <i class='bx bxs-hot color-main'></i>
                                        <u className="text-sm font-semibold">Ưu đãi lãi suất theo danh mục</u>
                                    </div>
                                </div>
                                <div className="flex items-center gap-15px">
                                    <Link href='#'><u className="text-xs mx-2.5">Xem phân tích chi tiết</u></Link>
                                    <div className="flex ">
                                        <div className="bg-eee px-12px py-2px">
                                            <input className="add-ip-cp " type="text" />
                                        </div>
                                        <button className="bg-main-color text-xs text-white h-27px w-75px rounded-r">Thêm mã</button>
                                    </div>
                                </div>
                            </div>
    
                            <div className="infor-top-table">
                                <table>
                                    <thead>
                                        <tr style={{ height: '54px' }}>
                                            <th>Ngành</th>
                                            <th><span>Tổng KL</span></th>
                                            <th><span>% KL / KLTB <br /> 10 phiên</span></th>
                                            <th><span>Tổng GT</span></th>
                                            <th style={{ width: '15%' }}>Vốn hóa thị trường</th>
                                            <th style={{ width: '5%' }}><span>Giá <br /> khớp</span></th>
                                            <th style={{ width: '5%' }}>KL</th>
                                            <th style={{ width: '5%' }}>%</th>
                                            <th>P/B</th>
                                            <th>P/E</th>
                                            <th>BVPS</th>
                                            <th><span>EPS 4 quý</span></th>
                                            <th>ROE</th>
                                            <th>ROA</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><span>{data?.industry}</span></td>
                                            <td><span>{formatNumberINT(SymbolResponse.regularMarketVolume)}</span></td>
                                            <td><span>{ calculateKLtoKLTBPercentage(SymbolResponse.regularMarketVolume, data?.averageVolume10days)}</span></td>
                                            <td><span>{calculateTransactionValue(SymbolResponse.regularMarketPrice, SymbolResponse.regularMarketVolume)}</span></td>
                                            <td className="cell-highlight"><span>{"$" + formatNumberToUSD(SymbolResponse.marketCap)}</span></td>
                                            <td className="txt-lime cell-highlight has-tooltip tooltip-bottom">
                                                <span>{roundToUSD(SymbolResponse.regularMarketPrice)}</span>
                                            </td>
                                            <td className="txt-lime cell-highlight"><span>{getLastVolumePrice(SymbolResponse.Infoby1p)}</span></td>
                                            <td className="txt-lime cell-highlight"><span>{roundToTwoDecimals(SymbolResponse.regularMarketChangePercent)}</span></td>
                                            <td><span>{SymbolResponse.priceToBook.toFixed(2)}</span></td>
                                            <td><span>{SymbolResponse.forwardPE.toFixed(2)}</span></td>
                                            <td><span>{SymbolResponse.bookValue.toFixed(2)}</span></td>
                                            <td><span>{SymbolResponse.epsTrailingTwelveMonths}</span></td>
                                            <td><span>{convertToPercentage(data?.returnOnEquity)}</span></td>
                                            <td><span>{convertToPercentage(data?.returnOnAssets)}</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
    
                            <div id="chart-deep-market-orderbook" className="flex">
                                < CandleStickChart SymbolExchange={SymbolExchange} />
                                < DeepAndNews SymbolResponse={SymbolResponse} />
                                < OrderBook SymbolResponse={SymbolResponse} />
                            </div>
    
                        </div>
    
                    </section>
    
                </div>     
            </>
        )
    }
    

}

export default StockChartDetail;
