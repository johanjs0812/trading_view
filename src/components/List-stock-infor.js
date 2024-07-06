const ListStockInfor = ({ data }) => {

    let stock = [];
    const filteredData = data.filter(item => item !== null);
    stock = filteredData;

    console.log('sto', stock)

    return (
        <>
            <tbody id='banggia-khop-lenh-body' className='ui-sortable ui-sortable-disabled'>
                {stock.map((items, index) => (
                    <tr key={index} id={items?.symbol} className="" data-scroll-page="0">
                        <td className="txtl has-tooltip company-tooltip has-symbol">
                            <a className="symbol txt-lime" id={`${items.symbol}sym`}>
                                <span className="has-symbol">{items.symbol}</span>
                            </a>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id={`${items.symbol}ref`} className="txt-gia-tc">{items.refPrice}</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id={`${items.symbol}ceil`} className="txt-gia-tran">{items.ceilPrice}</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id={`${items.symbol}floor`} className="txt-gia-san">{items.floorPrice}</span>
                        </td>
                        <td>
                            <span className="slider-accumulatedVol">
                                <span id={`${items.symbol}tvol`} className="has-content">{items.accumulatedVolume}</span>
                            </span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id={`${items.symbol}bP3`} className="txt-lime">{items.bidPrice3}</span>
                        </td>
                        <td>
                            <span id={`${items.symbol}bV3`} className="txt-lime">{items.bidVolume3}</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id={`${items.symbol}bP2`} className="txt-lime">{items.bidPrice2}</span>
                        </td>
                        <td>
                            <span id={`${items.symbol}bV2`} className="txt-lime">{items.bidVolume2}</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id={`${items.symbol}bP1`} className="txt-lime">{items.bidPrice1}</span>
                        </td>
                        <td>
                            <span id={`${items.symbol}bV1`} className="txt-lime">{items.bidVolume1}</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id={`${items.symbol}matchP`} className="txt-lime">{items.matchPrice}</span>
                        </td>
                        <td className="cell-highlight">
                            <span id={`${items.symbol}matchV`} className="txt-lime">{items.matchVolume}</span>
                        </td>
                        <td className="cell-highlight">
                            <span data-slider-field="changeRaw" className="slider-changeRaw">
                                <span id={`${items.symbol}change`} className="txt-lime has-content">{items.change}</span>
                            </span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id={`${items.symbol}oP1`} className="txt-lime">{items.offerPrice1}</span>
                        </td>
                        <td>
                            <span id={`${items.symbol}oV1`} className="txt-lime">{items.offerVolume1}</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id={`${items.symbol}oP2`} className="txt-lime">{items.offerPrice2}</span>
                        </td>
                        <td>
                            <span id={`${items.symbol}oV2`} className="txt-lime">{items.offerVolume2}</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id={`${items.symbol}oP3`} className="txt-lime">{items.offerPrice3}</span>
                        </td>
                        <td>
                            <span id={`${items.symbol}oV3`} className="txt-lime">{items.offerVolume3}</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id={`${items.symbol}highP`} className="txt-lime">{items.highPrice}</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id={`${items.symbol}avgP`} className="txt-lime">{items.avgPrice}</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id={`${items.symbol}lowP`} className="txt-red">{items.lowPrice}</span>
                        </td>

                        <td>
                            <span id={`${items.symbol}bV4`}></span>
                        </td>
                        <td>
                            <span id={`${items.symbol}sV4`}></span>
                        </td>

                        <td colSpan="2" data-slider-group="foreign">
                            <div className='flex'>
                                <p id={`${items.symbol}foreignB`} className="cell-1-2 has-content px-1.5 border-r border-454545 border-solid w-2/4">{items.foreignBuy}</p>
                                <p id={`${items.symbol}foreignS`} className="cell-1-2 has-content px-1.5 w-2/4">{items.foreignSell}</p>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </>
    );
}

export default ListStockInfor;