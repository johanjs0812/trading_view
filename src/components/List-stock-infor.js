import roundToTwoDecimals from "@/helpers/roundtoTwoPercent";
import roundToUSD from "@/helpers/roundtoTwoUSD";
import formatNumberToUSD from "@/helpers/formattoUSD";
import formatNumberINT from "@/helpers/formatNumberINT";
import calculateAveragePrice from "@/helpers/calculateAveragePrice";
import getLastVolumePrice from "@/helpers/getLastVolumePrice";
import getNthTrade from "@/helpers/getNthTrade";
import compareAndAddClass from "@/helpers/compareAndAddClass";
import isNegativeNumber from "@/helpers/isNegativeNumber";

const ListStockInfor = ({ index, data, onShow, getSymbolExchange }) => {

    let symbols = [];
    let stock = [];

    const filteredData = data ? data.filter(item => item !== null) : [];

    symbols = index;
    stock = filteredData;

    const handleClick = (exchange, symbol, data) => {
        
        if (exchange === "NasdaqGS") {
            exchange = "NASDAQ";
        }

        const es = `${exchange}:${symbol}`;
        getSymbolExchange(es, data);
        onShow();
    };
    
    
    return (
        <>
            <tbody id='banggia-khop-lenh-body' className='ui-sortable ui-sortable-disabled'>

                {symbols.map((item1, index) => {
                    const item2 = stock.find(item => item.symbol === item1);
                    return item2 ? 
                        
                    <tr key={index} id={item2.symbol} className="" data-scroll-page="0">

                        <td className="txtl has-tooltip company-tooltip has-symbol">
                            <a 
                                onClick={() => handleClick(item2.fullExchangeName, item2.symbol, item2)} 
                                className="symbol txt-lime" 
                                id={`${item2.symbol}sym`}
                            >
                                <span className="has-symbol">{item2.symbol}</span>
                            </a>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight" style={{width:"9.75%"}}>
                            <span id={`${item2.symbol}ref`} className="has-content">{"$" + formatNumberToUSD(item2.marketCap)}</span>
                        </td>
                        {/* <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id={`${item2.symbol}ceil`} className="txt-gia-tran">{item2.ceilPrice}</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id={`${item2.symbol}floor`} className="txt-gia-san">{item2.floorPrice}</span>
                        </td> */}
                        
                        <td>
                            <span className="slider-accumulatedVol">
                                <span id={`${item2.symbol}tvol`} 
                                className={`has-content ${isNegativeNumber(item2.fiftyTwoWeekChangePercent)}`}
                                
                                >
                                    {roundToTwoDecimals(item2.fiftyTwoWeekChangePercent)}
                                </span>
                            </span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id={`${item2.symbol}bP3`}                                 
                                className={`${compareAndAddClass(
                                    getNthTrade(item2.Infoby1p, "buy", 3, "Close"), 
                                    item2.regularMarketPreviousClose, 
                                    "txt-red", 
                                    "txt-gia-tc", 
                                    "txt-lime"
                                )}`} 
                            >
                                {getNthTrade(item2.Infoby1p, "buy", 3, "Close")}
                            </span>
                        </td>
                        <td>
                            <span id={`${item2.symbol}bV3`}                                 
                                className={`${compareAndAddClass(
                                    getNthTrade(item2.Infoby1p, "buy", 3, "Close"), 
                                    item2.regularMarketPreviousClose, 
                                    "txt-red", 
                                    "txt-gia-tc", 
                                    "txt-lime"
                                )}`} 
                            >
                            {getNthTrade(item2.Infoby1p, "buy", 3, "Volume")}
                            </span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id={`${item2.symbol}bP2`}                                
                                className={`${compareAndAddClass(
                                    getNthTrade(item2.Infoby1p, "buy", 2, "Close"), 
                                    item2.regularMarketPreviousClose, 
                                    "txt-red", 
                                    "txt-gia-tc", 
                                    "txt-lime"
                                )}`} 
                            >
                                {getNthTrade(item2.Infoby1p, "buy", 2, "Close")}
                            </span>
                        </td>
                        <td>
                            <span id={`${item2.symbol}bV2`}                      
                                className={`${compareAndAddClass(
                                    getNthTrade(item2.Infoby1p, "buy", 2, "Close"), 
                                    item2.regularMarketPreviousClose, 
                                    "txt-red", 
                                    "txt-gia-tc", 
                                    "txt-lime"
                                )}`}  
                            >{getNthTrade(item2.Infoby1p, "buy", 2, "Volume")}</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id={`${item2.symbol}bP1`}                        
                                className={`${compareAndAddClass(
                                    getNthTrade(item2.Infoby1p, "buy", 1, "Close"), 
                                    item2.regularMarketPreviousClose, 
                                    "txt-red", 
                                    "txt-gia-tc", 
                                    "txt-lime"
                                )}`}                             
                            >
                                {getNthTrade(item2.Infoby1p, "buy", 1, "Close")}
                            </span>
                        </td>
                        <td>
                            <span id={`${item2.symbol}bV1`}                          
                                className={`${compareAndAddClass(
                                    getNthTrade(item2.Infoby1p, "buy", 1, "Close"), 
                                    item2.regularMarketPreviousClose, 
                                    "txt-red", 
                                    "txt-gia-tc", 
                                    "txt-lime"
                                )}`}                            
                            >
                                {getNthTrade(item2.Infoby1p, "buy", 1, "Volume")}
                            </span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id={`${item2.symbol}matchP`} 
                                className={`has-content ${compareAndAddClass(
                                    item2.regularMarketPrice, 
                                    item2.regularMarketPreviousClose, 
                                    "txt-red", 
                                    "txt-gia-tc", 
                                    "txt-lime"
                                )}`} 
                            >
                                {roundToUSD(item2.regularMarketPrice)}
                            </span>
                        </td>
                        <td className="cell-highlight">
                            <span id={`${item2.symbol}matchV`}        
                                className={`has-content ${compareAndAddClass(
                                    item2.regularMarketPrice, 
                                    item2.regularMarketPreviousClose, 
                                    "txt-red", 
                                    "txt-gia-tc", 
                                    "txt-lime"
                                )}`}                     
                            >{ getLastVolumePrice(item2.Infoby1p)}</span>
                        </td>
                        <td className="cell-highlight">
                            <span className="slider-changeRaw">
                                <span id={`${item2.symbol}change`} 
                                    className={`has-content ${compareAndAddClass(
                                        item2.regularMarketPrice, 
                                        item2.regularMarketPreviousClose, 
                                        "txt-red", 
                                        "txt-gia-tc", 
                                        "txt-lime"
                                    )}`}  
                                >{roundToTwoDecimals(item2.regularMarketChangePercent)}</span>
                            </span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id={`${item2.symbol}oP1`} 
                                className={`${compareAndAddClass(
                                    getNthTrade(item2.Infoby1p, "sell", 1, "Close"), 
                                    item2.regularMarketPreviousClose, 
                                    "txt-red", 
                                    "txt-gia-tc", 
                                    "txt-lime"
                                )}`} 
                            >
                                {getNthTrade(item2.Infoby1p, "sell", 1, "Close")}
                            </span>
                        </td>
                        <td>
                            <span id={`${item2.symbol}oV1`} 
                                className={`${compareAndAddClass(
                                    getNthTrade(item2.Infoby1p, "sell", 1, "Close"), 
                                    item2.regularMarketPreviousClose, 
                                    "txt-red", 
                                    "txt-gia-tc", 
                                    "txt-lime"
                                )}`} 
                            >
                                {getNthTrade(item2.Infoby1p, "sell", 1, "Volume")}
                            </span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id={`${item2.symbol}oP2`} 
                                className={`${compareAndAddClass(
                                    getNthTrade(item2.Infoby1p, "sell", 2, "Close"), 
                                    item2.regularMarketPreviousClose, 
                                    "txt-red", 
                                    "txt-gia-tc", 
                                    "txt-lime"
                                )}`} 
                            >
                                {getNthTrade(item2.Infoby1p, "sell", 2, "Close")}
                            </span>
                        </td>
                        <td>
                            <span id={`${item2.symbol}oV2`} 
                                className={`${compareAndAddClass(
                                    getNthTrade(item2.Infoby1p, "sell", 2, "Close"), 
                                    item2.regularMarketPreviousClose, 
                                    "txt-red", 
                                    "txt-gia-tc", 
                                    "txt-lime"
                                )}`} 
                            >
                                {getNthTrade(item2.Infoby1p, "sell", 2, "Volume")}
                            </span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id={`${item2.symbol}oP3`}                                 
                                className={`${compareAndAddClass(
                                    getNthTrade(item2.Infoby1p, "sell", 3, "Close"), 
                                    item2.regularMarketPreviousClose, 
                                    "txt-red", 
                                    "txt-gia-tc", 
                                    "txt-lime"
                                )}`}  
                            >
                                {getNthTrade(item2.Infoby1p, "sell", 3, "Close")}
                            </span>
                        </td>
                        <td>
                            <span id={`${item2.symbol}oV3`} 
                                className={`${compareAndAddClass(
                                    getNthTrade(item2.Infoby1p, "sell", 3, "Close"), 
                                    item2.regularMarketPreviousClose, 
                                    "txt-red", 
                                    "txt-gia-tc", 
                                    "txt-lime"
                                )}`}  
                            >{getNthTrade(item2.Infoby1p, "sell", 3, "Volume")}</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id={`${item2.symbol}highP`} 
                                className={`${compareAndAddClass(
                                    item2.regularMarketDayRange.high, 
                                    item2.regularMarketPreviousClose, 
                                    "txt-red", 
                                    "txt-gia-tc", 
                                    "txt-lime"
                                )}`}  
                            >{roundToUSD(item2.regularMarketDayRange.high)}</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id={`${item2.symbol}avgP`} 
                                className={`${compareAndAddClass(
                                    calculateAveragePrice(item2.regularMarketOpen, item2.regularMarketPrice, item2.regularMarketDayHigh, item2.regularMarketDayLow), 
                                    item2.regularMarketPreviousClose, 
                                    "txt-red", 
                                    "txt-gia-tc", 
                                    "txt-lime"
                                )}`}  
                            >{
                                calculateAveragePrice(item2.regularMarketOpen, item2.regularMarketPrice, 
                                                    item2.regularMarketDayHigh, item2.regularMarketDayLow)
                            }</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id={`${item2.symbol}lowP`}                             
                                className={`${compareAndAddClass(
                                    item2.regularMarketDayRange.low, 
                                    item2.regularMarketPreviousClose, 
                                    "txt-red", 
                                    "txt-gia-tc", 
                                    "txt-lime"
                                )}`}     
                            >{roundToUSD(item2.regularMarketDayRange.low)}</span>
                        </td>

                        <td style={{width: "4.5%"}} className="cell-highlight txt-gia-tc">
                            <span id={`${item2.symbol}bV4`}>{roundToUSD(item2.regularMarketPreviousClose)}</span>
                        </td>
                        <td style={{width: "4.45%"}}     
                            className={`cell-highlight ${compareAndAddClass(
                                item2.regularMarketOpen, 
                                item2.regularMarketPreviousClose, 
                                "txt-red", 
                                "txt-gia-tc", 
                                "txt-lime"
                            )}`}     
                        >
                            <span id={`${item2.symbol}sV4`}>
                                {roundToUSD(item2.regularMarketOpen)}
                            </span>
                        </td>

                        <td style={{ width: "7.3%" }} 

                        >
                            <span>
                                {formatNumberINT(item2.regularMarketVolume)}
                            </span>
                        </td>
                    </tr>
                    
                    : null;
                })}
            </tbody>
        </>
    );
}

export default ListStockInfor;