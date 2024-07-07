const ListStockInfor = ({ index, data, onShow, getSymbolExchange }) => {

    let symbols = [];
    let stock = [];

    const filteredData = data ? data.filter(item => item !== null) : [];

    symbols = index;
    stock = filteredData;

    const handleClick = (exchange, symbol) => {
        
        if (exchange === "NasdaqGS") {
            exchange = "NASDAQ";
        }

        const data = `${exchange}:${symbol}`;
        getSymbolExchange(data);
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
                                onClick={() => handleClick(item2.fullExchangeName, item2.symbol)} 
                                className="symbol txt-lime" 
                                id={`${item2.symbol}sym`}
                            >
                                <span className="has-symbol">{item2.symbol}</span>
                            </a>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id={`${item2.symbol}ref`} className="txt-gia-tc">{item2.refPrice}</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id={`${item2.symbol}ceil`} className="txt-gia-tran">{item2.ceilPrice}</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id={`${item2.symbol}floor`} className="txt-gia-san">{item2.floorPrice}</span>
                        </td>
                        <td>
                            <span className="slider-accumulatedVol">
                                <span id={`${item2.symbol}tvol`} className="has-content">{item2.accumulatedVolume}</span>
                            </span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id={`${item2.symbol}bP3`} className="txt-lime">{item2.bidPrice3}</span>
                        </td>
                        <td>
                            <span id={`${item2.symbol}bV3`} className="txt-lime">{item2.bidVolume3}</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id={`${item2.symbol}bP2`} className="txt-lime">{item2.bidPrice2}</span>
                        </td>
                        <td>
                            <span id={`${item2.symbol}bV2`} className="txt-lime">{item2.bidVolume2}</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id={`${item2.symbol}bP1`} className="txt-lime">{item2.bidPrice1}</span>
                        </td>
                        <td>
                            <span id={`${item2.symbol}bV1`} className="txt-lime">{item2.bidVolume1}</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id={`${item2.symbol}matchP`} className="txt-lime">{item2.matchPrice}</span>
                        </td>
                        <td className="cell-highlight">
                            <span id={`${item2.symbol}matchV`} className="txt-lime">{item2.matchVolume}</span>
                        </td>
                        <td className="cell-highlight">
                            <span data-slider-field="changeRaw" className="slider-changeRaw">
                                <span id={`${item2.symbol}change`} className="txt-lime has-content">{item2.change}</span>
                            </span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id={`${item2.symbol}oP1`} className="txt-lime">{item2.offerPrice1}</span>
                        </td>
                        <td>
                            <span id={`${item2.symbol}oV1`} className="txt-lime">{item2.offerVolume1}</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id={`${item2.symbol}oP2`} className="txt-lime">{item2.offerPrice2}</span>
                        </td>
                        <td>
                            <span id={`${item2.symbol}oV2`} className="txt-lime">{item2.offerVolume2}</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id={`${item2.symbol}oP3`} className="txt-lime">{item2.offerPrice3}</span>
                        </td>
                        <td>
                            <span id={`${item2.symbol}oV3`} className="txt-lime">{item2.offerVolume3}</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id={`${item2.symbol}highP`} className="txt-lime">{item2.highPrice}</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id={`${item2.symbol}avgP`} className="txt-lime">{item2.avgPrice}</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id={`${item2.symbol}lowP`} className="txt-red">{item2.lowPrice}</span>
                        </td>

                        <td>
                            <span id={`${item2.symbol}bV4`}></span>
                        </td>
                        <td>
                            <span id={`${item2.symbol}sV4`}></span>
                        </td>

                        <td colSpan="2" data-slider-group="foreign">
                            <div className='flex'>
                                <p id={`${item2.symbol}foreignB`} className="cell-1-2 has-content px-1.5 border-r border-454545 border-solid w-2/4">{item2.foreignBuy}</p>
                                <p id={`${item2.symbol}foreignS`} className="cell-1-2 has-content px-1.5 w-2/4">{item2.foreignSell}</p>
                            </div>
                        </td>
                    </tr>
                    
                    : null;
                })}
            </tbody>
        </>
    );
}

export default ListStockInfor;