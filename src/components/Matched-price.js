import Link from 'next/link';
import "../styles/MatchedPrice.css"

const MatchedPrice = () => {

    return(
        <>   
            <div id='giancach'></div>
            <table id='MatchedPrice' className='proboard banggia-full'>

                <colgroup>
                    <col className="show-on-mobile col-symbol"/>
                    <col className="show-on-mobile col-price"/>
                    <col className="show-on-mobile col-price"/>
                    <col className="show-on-mobile col-price"/>
                    <col className="col-vol col-vol-lg"/>
                    <col className="col-price"/>
                    <col className="col-vol"/>
                    <col className="col-price"/>
                    <col className="col-vol"/>
                    <col className="col-price"/>
                    <col className="col-vol"/>
                    <col className="col-price"/>
                    <col className="col-vol col-vol-sm"/>
                    <col className="col-diff"/>
                    <col className="col-price"/>
                    <col className="col-vol"/>
                    <col className="col-price"/>
                    <col className="col-vol"/>
                    <col className="col-price"/>
                    <col className="col-vol"/>
                    <col className="col-price"/>
                    <col className="col-price"/>
                    <col className="col-price"/>
                    <col className="col-vol col-vol-lg"/>
                    <col className="col-vol"/>
                    <col className="col-vol"/>
                </colgroup>

                <tbody id='banggia-khop-lenh-body' className='ui-sortable ui-sortable-disabled'>
                    
                    <tr id="ACB" className="" data-scroll-page="0">
                        <td className="txtl has-tooltip company-tooltip has-symbol">
                            <a className="symbol txt-lime" id="ACBsym"><span className="has-symbol">ACB</span></a>          
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight" >
                            <span id="ACBref" className="txt-gia-tc">24.05</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBceil" className="txt-gia-tran">25.70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBfloor" className="txt-gia-san">22.40</span>
                        </td>
                        <td >
                            <span  className="slider-accumulatedVol">
                                <span id="ACBtvol" className="has-content">5,848,80</span>
                            </span>
                            {/* <span className="slider-accumulatedVal" >
                                <span id="ACBtval" className="has-content">141,321</span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP3" className="txt-lime">24.15</span>
                        </td>
                        <td>
                            <span id="ACBbV3" className="txt-lime">1,006,80</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP2" className="txt-lime">24.20</span>
                        </td>
                        <td>
                            <span id="ACBbV2" className="txt-lime">166,40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP1" className="txt-lime">24.25</span>
                        </td>
                        <td>
                            <span id="ACBbV1" className="txt-lime">82,40</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBmatchP" className="txt-lime">24.25</span>
                        </td>
                        <td className="cell-highlight">
                            <span id="ACBmatchV" className="txt-lime">170,60</span>
                        </td>
                        <td className="cell-highlight">
                            <span data-slider-field="changeRaw" className="slider-changeRaw">
                                <span id="ACBchange" className="txt-lime has-content">0.20</span>
                            </span>
                            {/* <span className="slidable slider-changePercent">
                                <span id="ACBpercent" className="txt-lime has-content">
                                    0.8<small>%</small>                   
                                </span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP1" className="txt-lime">24.30</span>
                        </td>
                        <td>
                            <span id="ACBoV1" className="txt-lime">187,70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP2" className="txt-lime">24.35</span>
                        </td>
                        <td>
                            <span id="ACBoV2" className="txt-lime">154,90</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP3" className="txt-lime">24.40</span>
                        </td>
                        <td>
                            <span id="ACBoV3" className="txt-lime">434,20</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBhighP" className="txt-lime">24.40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBavgP" className="txt-lime">24.16</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBlowP" className="txt-red">23.95</span>
                        </td>

                        <td>
                            <span id="ACBbV4"></span>
                        </td>
                        <td>
                            <span id="ACBsV4"></span>
                        </td>

                        <td colspan="2" data-slider-group="foreign">
                            <div className='flex'>
                                <p id="ACBforeignB" className="cell-1-2 has-content px-1.5 border-r border-454545 border-solid w-2/4">580,00</p>
                                <p id="ACBforeignS" className="cell-1-2 has-content px-1.5 w-2/4">580,00</p>
                            </div>
                        </td>
                    </tr>

                    <tr id="ACB" className="" data-scroll-page="0">
                        <td className="txtl has-tooltip company-tooltip has-symbol">
                            <a className="symbol txt-lime" id="ACBsym"><span className="has-symbol">ACB</span></a>          
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight" >
                            <span id="ACBref" className="txt-gia-tc">24.05</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBceil" className="txt-gia-tran">25.70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBfloor" className="txt-gia-san">22.40</span>
                        </td>
                        <td >
                            <span  className="slider-accumulatedVol">
                                <span id="ACBtvol" className="has-content">5,848,80</span>
                            </span>
                            {/* <span className="slider-accumulatedVal" >
                                <span id="ACBtval" className="has-content">141,321</span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP3" className="txt-lime">24.15</span>
                        </td>
                        <td>
                            <span id="ACBbV3" className="txt-lime">1,006,80</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP2" className="txt-lime">24.20</span>
                        </td>
                        <td>
                            <span id="ACBbV2" className="txt-lime">166,40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP1" className="txt-lime">24.25</span>
                        </td>
                        <td>
                            <span id="ACBbV1" className="txt-lime">82,40</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBmatchP" className="txt-lime">24.25</span>
                        </td>
                        <td className="cell-highlight">
                            <span id="ACBmatchV" className="txt-lime">170,60</span>
                        </td>
                        <td className="cell-highlight">
                            <span data-slider-field="changeRaw" className="slider-changeRaw">
                                <span id="ACBchange" className="txt-lime has-content">0.20</span>
                            </span>
                            {/* <span className="slidable slider-changePercent">
                                <span id="ACBpercent" className="txt-lime has-content">
                                    0.8<small>%</small>                   
                                </span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP1" className="txt-lime">24.30</span>
                        </td>
                        <td>
                            <span id="ACBoV1" className="txt-lime">187,70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP2" className="txt-lime">24.35</span>
                        </td>
                        <td>
                            <span id="ACBoV2" className="txt-lime">154,90</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP3" className="txt-lime">24.40</span>
                        </td>
                        <td>
                            <span id="ACBoV3" className="txt-lime">434,20</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBhighP" className="txt-lime">24.40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBavgP" className="txt-lime">24.16</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBlowP" className="txt-red">23.95</span>
                        </td>

                        <td>
                            <span id="ACBbV4"></span>
                        </td>
                        <td>
                            <span id="ACBsV4"></span>
                        </td>

                        <td colspan="2" data-slider-group="foreign">
                            <div className='flex'>
                                <p id="ACBforeignB" className="cell-1-2 has-content px-1.5 border-r border-454545 border-solid w-2/4">580,00</p>
                                <p id="ACBforeignS" className="cell-1-2 has-content px-1.5 w-2/4">580,00</p>
                            </div>
                        </td>
                    </tr>

                    <tr id="ACB" className="" data-scroll-page="0">
                        <td className="txtl has-tooltip company-tooltip has-symbol">
                            <a className="symbol txt-lime" id="ACBsym"><span className="has-symbol">ACB</span></a>          
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight" >
                            <span id="ACBref" className="txt-gia-tc">24.05</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBceil" className="txt-gia-tran">25.70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBfloor" className="txt-gia-san">22.40</span>
                        </td>
                        <td >
                            <span  className="slider-accumulatedVol">
                                <span id="ACBtvol" className="has-content">5,848,80</span>
                            </span>
                            {/* <span className="slider-accumulatedVal" >
                                <span id="ACBtval" className="has-content">141,321</span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP3" className="txt-lime">24.15</span>
                        </td>
                        <td>
                            <span id="ACBbV3" className="txt-lime">1,006,80</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP2" className="txt-lime">24.20</span>
                        </td>
                        <td>
                            <span id="ACBbV2" className="txt-lime">166,40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP1" className="txt-lime">24.25</span>
                        </td>
                        <td>
                            <span id="ACBbV1" className="txt-lime">82,40</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBmatchP" className="txt-lime">24.25</span>
                        </td>
                        <td className="cell-highlight">
                            <span id="ACBmatchV" className="txt-lime">170,60</span>
                        </td>
                        <td className="cell-highlight">
                            <span data-slider-field="changeRaw" className="slider-changeRaw">
                                <span id="ACBchange" className="txt-lime has-content">0.20</span>
                            </span>
                            {/* <span className="slidable slider-changePercent">
                                <span id="ACBpercent" className="txt-lime has-content">
                                    0.8<small>%</small>                   
                                </span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP1" className="txt-lime">24.30</span>
                        </td>
                        <td>
                            <span id="ACBoV1" className="txt-lime">187,70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP2" className="txt-lime">24.35</span>
                        </td>
                        <td>
                            <span id="ACBoV2" className="txt-lime">154,90</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP3" className="txt-lime">24.40</span>
                        </td>
                        <td>
                            <span id="ACBoV3" className="txt-lime">434,20</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBhighP" className="txt-lime">24.40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBavgP" className="txt-lime">24.16</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBlowP" className="txt-red">23.95</span>
                        </td>

                        <td>
                            <span id="ACBbV4"></span>
                        </td>
                        <td>
                            <span id="ACBsV4"></span>
                        </td>

                        <td colspan="2" data-slider-group="foreign">
                            <div className='flex'>
                                <p id="ACBforeignB" className="cell-1-2 has-content px-1.5 border-r border-454545 border-solid w-2/4">580,00</p>
                                <p id="ACBforeignS" className="cell-1-2 has-content px-1.5 w-2/4">580,00</p>
                            </div>
                        </td>
                    </tr>

                    <tr id="ACB" className="" data-scroll-page="0">
                        <td className="txtl has-tooltip company-tooltip has-symbol">
                            <a className="symbol txt-lime" id="ACBsym"><span className="has-symbol">ACB</span></a>          
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight" >
                            <span id="ACBref" className="txt-gia-tc">24.05</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBceil" className="txt-gia-tran">25.70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBfloor" className="txt-gia-san">22.40</span>
                        </td>
                        <td >
                            <span  className="slider-accumulatedVol">
                                <span id="ACBtvol" className="has-content">5,848,80</span>
                            </span>
                            {/* <span className="slider-accumulatedVal" >
                                <span id="ACBtval" className="has-content">141,321</span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP3" className="txt-lime">24.15</span>
                        </td>
                        <td>
                            <span id="ACBbV3" className="txt-lime">1,006,80</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP2" className="txt-lime">24.20</span>
                        </td>
                        <td>
                            <span id="ACBbV2" className="txt-lime">166,40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP1" className="txt-lime">24.25</span>
                        </td>
                        <td>
                            <span id="ACBbV1" className="txt-lime">82,40</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBmatchP" className="txt-lime">24.25</span>
                        </td>
                        <td className="cell-highlight">
                            <span id="ACBmatchV" className="txt-lime">170,60</span>
                        </td>
                        <td className="cell-highlight">
                            <span data-slider-field="changeRaw" className="slider-changeRaw">
                                <span id="ACBchange" className="txt-lime has-content">0.20</span>
                            </span>
                            {/* <span className="slidable slider-changePercent">
                                <span id="ACBpercent" className="txt-lime has-content">
                                    0.8<small>%</small>                   
                                </span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP1" className="txt-lime">24.30</span>
                        </td>
                        <td>
                            <span id="ACBoV1" className="txt-lime">187,70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP2" className="txt-lime">24.35</span>
                        </td>
                        <td>
                            <span id="ACBoV2" className="txt-lime">154,90</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP3" className="txt-lime">24.40</span>
                        </td>
                        <td>
                            <span id="ACBoV3" className="txt-lime">434,20</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBhighP" className="txt-lime">24.40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBavgP" className="txt-lime">24.16</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBlowP" className="txt-red">23.95</span>
                        </td>

                        <td>
                            <span id="ACBbV4"></span>
                        </td>
                        <td>
                            <span id="ACBsV4"></span>
                        </td>

                        <td colspan="2" data-slider-group="foreign">
                            <div className='flex'>
                                <p id="ACBforeignB" className="cell-1-2 has-content px-1.5 border-r border-454545 border-solid w-2/4">580,00</p>
                                <p id="ACBforeignS" className="cell-1-2 has-content px-1.5 w-2/4">580,00</p>
                            </div>
                        </td>
                    </tr>

                    <tr id="ACB" className="" data-scroll-page="0">
                        <td className="txtl has-tooltip company-tooltip has-symbol">
                            <a className="symbol txt-lime" id="ACBsym"><span className="has-symbol">ACB</span></a>          
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight" >
                            <span id="ACBref" className="txt-gia-tc">24.05</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBceil" className="txt-gia-tran">25.70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBfloor" className="txt-gia-san">22.40</span>
                        </td>
                        <td >
                            <span  className="slider-accumulatedVol">
                                <span id="ACBtvol" className="has-content">5,848,80</span>
                            </span>
                            {/* <span className="slider-accumulatedVal" >
                                <span id="ACBtval" className="has-content">141,321</span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP3" className="txt-lime">24.15</span>
                        </td>
                        <td>
                            <span id="ACBbV3" className="txt-lime">1,006,80</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP2" className="txt-lime">24.20</span>
                        </td>
                        <td>
                            <span id="ACBbV2" className="txt-lime">166,40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP1" className="txt-lime">24.25</span>
                        </td>
                        <td>
                            <span id="ACBbV1" className="txt-lime">82,40</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBmatchP" className="txt-lime">24.25</span>
                        </td>
                        <td className="cell-highlight">
                            <span id="ACBmatchV" className="txt-lime">170,60</span>
                        </td>
                        <td className="cell-highlight">
                            <span data-slider-field="changeRaw" className="slider-changeRaw">
                                <span id="ACBchange" className="txt-lime has-content">0.20</span>
                            </span>
                            {/* <span className="slidable slider-changePercent">
                                <span id="ACBpercent" className="txt-lime has-content">
                                    0.8<small>%</small>                   
                                </span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP1" className="txt-lime">24.30</span>
                        </td>
                        <td>
                            <span id="ACBoV1" className="txt-lime">187,70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP2" className="txt-lime">24.35</span>
                        </td>
                        <td>
                            <span id="ACBoV2" className="txt-lime">154,90</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP3" className="txt-lime">24.40</span>
                        </td>
                        <td>
                            <span id="ACBoV3" className="txt-lime">434,20</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBhighP" className="txt-lime">24.40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBavgP" className="txt-lime">24.16</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBlowP" className="txt-red">23.95</span>
                        </td>

                        <td>
                            <span id="ACBbV4"></span>
                        </td>
                        <td>
                            <span id="ACBsV4"></span>
                        </td>

                        <td colspan="2" data-slider-group="foreign">
                            <div className='flex'>
                                <p id="ACBforeignB" className="cell-1-2 has-content px-1.5 border-r border-454545 border-solid w-2/4">580,00</p>
                                <p id="ACBforeignS" className="cell-1-2 has-content px-1.5 w-2/4">580,00</p>
                            </div>
                        </td>
                    </tr>

                    <tr id="ACB" className="" data-scroll-page="0">
                        <td className="txtl has-tooltip company-tooltip has-symbol">
                            <a className="symbol txt-lime" id="ACBsym"><span className="has-symbol">ACB</span></a>          
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight" >
                            <span id="ACBref" className="txt-gia-tc">24.05</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBceil" className="txt-gia-tran">25.70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBfloor" className="txt-gia-san">22.40</span>
                        </td>
                        <td >
                            <span  className="slider-accumulatedVol">
                                <span id="ACBtvol" className="has-content">5,848,80</span>
                            </span>
                            {/* <span className="slider-accumulatedVal" >
                                <span id="ACBtval" className="has-content">141,321</span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP3" className="txt-lime">24.15</span>
                        </td>
                        <td>
                            <span id="ACBbV3" className="txt-lime">1,006,80</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP2" className="txt-lime">24.20</span>
                        </td>
                        <td>
                            <span id="ACBbV2" className="txt-lime">166,40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP1" className="txt-lime">24.25</span>
                        </td>
                        <td>
                            <span id="ACBbV1" className="txt-lime">82,40</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBmatchP" className="txt-lime">24.25</span>
                        </td>
                        <td className="cell-highlight">
                            <span id="ACBmatchV" className="txt-lime">170,60</span>
                        </td>
                        <td className="cell-highlight">
                            <span data-slider-field="changeRaw" className="slider-changeRaw">
                                <span id="ACBchange" className="txt-lime has-content">0.20</span>
                            </span>
                            {/* <span className="slidable slider-changePercent">
                                <span id="ACBpercent" className="txt-lime has-content">
                                    0.8<small>%</small>                   
                                </span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP1" className="txt-lime">24.30</span>
                        </td>
                        <td>
                            <span id="ACBoV1" className="txt-lime">187,70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP2" className="txt-lime">24.35</span>
                        </td>
                        <td>
                            <span id="ACBoV2" className="txt-lime">154,90</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP3" className="txt-lime">24.40</span>
                        </td>
                        <td>
                            <span id="ACBoV3" className="txt-lime">434,20</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBhighP" className="txt-lime">24.40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBavgP" className="txt-lime">24.16</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBlowP" className="txt-red">23.95</span>
                        </td>

                        <td>
                            <span id="ACBbV4"></span>
                        </td>
                        <td>
                            <span id="ACBsV4"></span>
                        </td>

                        <td colspan="2" data-slider-group="foreign">
                            <div className='flex'>
                                <p id="ACBforeignB" className="cell-1-2 has-content px-1.5 border-r border-454545 border-solid w-2/4">580,00</p>
                                <p id="ACBforeignS" className="cell-1-2 has-content px-1.5 w-2/4">580,00</p>
                            </div>
                        </td>
                    </tr>

                    <tr id="ACB" className="" data-scroll-page="0">
                        <td className="txtl has-tooltip company-tooltip has-symbol">
                            <a className="symbol txt-lime" id="ACBsym"><span className="has-symbol">ACB</span></a>          
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight" >
                            <span id="ACBref" className="txt-gia-tc">24.05</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBceil" className="txt-gia-tran">25.70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBfloor" className="txt-gia-san">22.40</span>
                        </td>
                        <td >
                            <span  className="slider-accumulatedVol">
                                <span id="ACBtvol" className="has-content">5,848,80</span>
                            </span>
                            {/* <span className="slider-accumulatedVal" >
                                <span id="ACBtval" className="has-content">141,321</span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP3" className="txt-lime">24.15</span>
                        </td>
                        <td>
                            <span id="ACBbV3" className="txt-lime">1,006,80</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP2" className="txt-lime">24.20</span>
                        </td>
                        <td>
                            <span id="ACBbV2" className="txt-lime">166,40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP1" className="txt-lime">24.25</span>
                        </td>
                        <td>
                            <span id="ACBbV1" className="txt-lime">82,40</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBmatchP" className="txt-lime">24.25</span>
                        </td>
                        <td className="cell-highlight">
                            <span id="ACBmatchV" className="txt-lime">170,60</span>
                        </td>
                        <td className="cell-highlight">
                            <span data-slider-field="changeRaw" className="slider-changeRaw">
                                <span id="ACBchange" className="txt-lime has-content">0.20</span>
                            </span>
                            {/* <span className="slidable slider-changePercent">
                                <span id="ACBpercent" className="txt-lime has-content">
                                    0.8<small>%</small>                   
                                </span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP1" className="txt-lime">24.30</span>
                        </td>
                        <td>
                            <span id="ACBoV1" className="txt-lime">187,70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP2" className="txt-lime">24.35</span>
                        </td>
                        <td>
                            <span id="ACBoV2" className="txt-lime">154,90</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP3" className="txt-lime">24.40</span>
                        </td>
                        <td>
                            <span id="ACBoV3" className="txt-lime">434,20</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBhighP" className="txt-lime">24.40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBavgP" className="txt-lime">24.16</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBlowP" className="txt-red">23.95</span>
                        </td>

                        <td>
                            <span id="ACBbV4"></span>
                        </td>
                        <td>
                            <span id="ACBsV4"></span>
                        </td>

                        <td colspan="2" data-slider-group="foreign">
                            <div className='flex'>
                                <p id="ACBforeignB" className="cell-1-2 has-content px-1.5 border-r border-454545 border-solid w-2/4">580,00</p>
                                <p id="ACBforeignS" className="cell-1-2 has-content px-1.5 w-2/4">580,00</p>
                            </div>
                        </td>
                    </tr>

                    <tr id="ACB" className="" data-scroll-page="0">
                        <td className="txtl has-tooltip company-tooltip has-symbol">
                            <a className="symbol txt-lime" id="ACBsym"><span className="has-symbol">ACB</span></a>          
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight" >
                            <span id="ACBref" className="txt-gia-tc">24.05</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBceil" className="txt-gia-tran">25.70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBfloor" className="txt-gia-san">22.40</span>
                        </td>
                        <td >
                            <span  className="slider-accumulatedVol">
                                <span id="ACBtvol" className="has-content">5,848,80</span>
                            </span>
                            {/* <span className="slider-accumulatedVal" >
                                <span id="ACBtval" className="has-content">141,321</span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP3" className="txt-lime">24.15</span>
                        </td>
                        <td>
                            <span id="ACBbV3" className="txt-lime">1,006,80</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP2" className="txt-lime">24.20</span>
                        </td>
                        <td>
                            <span id="ACBbV2" className="txt-lime">166,40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP1" className="txt-lime">24.25</span>
                        </td>
                        <td>
                            <span id="ACBbV1" className="txt-lime">82,40</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBmatchP" className="txt-lime">24.25</span>
                        </td>
                        <td className="cell-highlight">
                            <span id="ACBmatchV" className="txt-lime">170,60</span>
                        </td>
                        <td className="cell-highlight">
                            <span data-slider-field="changeRaw" className="slider-changeRaw">
                                <span id="ACBchange" className="txt-lime has-content">0.20</span>
                            </span>
                            {/* <span className="slidable slider-changePercent">
                                <span id="ACBpercent" className="txt-lime has-content">
                                    0.8<small>%</small>                   
                                </span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP1" className="txt-lime">24.30</span>
                        </td>
                        <td>
                            <span id="ACBoV1" className="txt-lime">187,70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP2" className="txt-lime">24.35</span>
                        </td>
                        <td>
                            <span id="ACBoV2" className="txt-lime">154,90</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP3" className="txt-lime">24.40</span>
                        </td>
                        <td>
                            <span id="ACBoV3" className="txt-lime">434,20</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBhighP" className="txt-lime">24.40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBavgP" className="txt-lime">24.16</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBlowP" className="txt-red">23.95</span>
                        </td>

                        <td>
                            <span id="ACBbV4"></span>
                        </td>
                        <td>
                            <span id="ACBsV4"></span>
                        </td>

                        <td colspan="2" data-slider-group="foreign">
                            <div className='flex'>
                                <p id="ACBforeignB" className="cell-1-2 has-content px-1.5 border-r border-454545 border-solid w-2/4">580,00</p>
                                <p id="ACBforeignS" className="cell-1-2 has-content px-1.5 w-2/4">580,00</p>
                            </div>
                        </td>
                    </tr>

                    <tr id="ACB" className="" data-scroll-page="0">
                        <td className="txtl has-tooltip company-tooltip has-symbol">
                            <a className="symbol txt-lime" id="ACBsym"><span className="has-symbol">ACB</span></a>          
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight" >
                            <span id="ACBref" className="txt-gia-tc">24.05</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBceil" className="txt-gia-tran">25.70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBfloor" className="txt-gia-san">22.40</span>
                        </td>
                        <td >
                            <span  className="slider-accumulatedVol">
                                <span id="ACBtvol" className="has-content">5,848,80</span>
                            </span>
                            {/* <span className="slider-accumulatedVal" >
                                <span id="ACBtval" className="has-content">141,321</span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP3" className="txt-lime">24.15</span>
                        </td>
                        <td>
                            <span id="ACBbV3" className="txt-lime">1,006,80</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP2" className="txt-lime">24.20</span>
                        </td>
                        <td>
                            <span id="ACBbV2" className="txt-lime">166,40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP1" className="txt-lime">24.25</span>
                        </td>
                        <td>
                            <span id="ACBbV1" className="txt-lime">82,40</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBmatchP" className="txt-lime">24.25</span>
                        </td>
                        <td className="cell-highlight">
                            <span id="ACBmatchV" className="txt-lime">170,60</span>
                        </td>
                        <td className="cell-highlight">
                            <span data-slider-field="changeRaw" className="slider-changeRaw">
                                <span id="ACBchange" className="txt-lime has-content">0.20</span>
                            </span>
                            {/* <span className="slidable slider-changePercent">
                                <span id="ACBpercent" className="txt-lime has-content">
                                    0.8<small>%</small>                   
                                </span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP1" className="txt-lime">24.30</span>
                        </td>
                        <td>
                            <span id="ACBoV1" className="txt-lime">187,70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP2" className="txt-lime">24.35</span>
                        </td>
                        <td>
                            <span id="ACBoV2" className="txt-lime">154,90</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP3" className="txt-lime">24.40</span>
                        </td>
                        <td>
                            <span id="ACBoV3" className="txt-lime">434,20</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBhighP" className="txt-lime">24.40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBavgP" className="txt-lime">24.16</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBlowP" className="txt-red">23.95</span>
                        </td>

                        <td>
                            <span id="ACBbV4"></span>
                        </td>
                        <td>
                            <span id="ACBsV4"></span>
                        </td>

                        <td colspan="2" data-slider-group="foreign">
                            <div className='flex'>
                                <p id="ACBforeignB" className="cell-1-2 has-content px-1.5 border-r border-454545 border-solid w-2/4">580,00</p>
                                <p id="ACBforeignS" className="cell-1-2 has-content px-1.5 w-2/4">580,00</p>
                            </div>
                        </td>
                    </tr>

                    <tr id="ACB" className="" data-scroll-page="0">
                        <td className="txtl has-tooltip company-tooltip has-symbol">
                            <a className="symbol txt-lime" id="ACBsym"><span className="has-symbol">ACB</span></a>          
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight" >
                            <span id="ACBref" className="txt-gia-tc">24.05</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBceil" className="txt-gia-tran">25.70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBfloor" className="txt-gia-san">22.40</span>
                        </td>
                        <td >
                            <span  className="slider-accumulatedVol">
                                <span id="ACBtvol" className="has-content">5,848,80</span>
                            </span>
                            {/* <span className="slider-accumulatedVal" >
                                <span id="ACBtval" className="has-content">141,321</span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP3" className="txt-lime">24.15</span>
                        </td>
                        <td>
                            <span id="ACBbV3" className="txt-lime">1,006,80</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP2" className="txt-lime">24.20</span>
                        </td>
                        <td>
                            <span id="ACBbV2" className="txt-lime">166,40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP1" className="txt-lime">24.25</span>
                        </td>
                        <td>
                            <span id="ACBbV1" className="txt-lime">82,40</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBmatchP" className="txt-lime">24.25</span>
                        </td>
                        <td className="cell-highlight">
                            <span id="ACBmatchV" className="txt-lime">170,60</span>
                        </td>
                        <td className="cell-highlight">
                            <span data-slider-field="changeRaw" className="slider-changeRaw">
                                <span id="ACBchange" className="txt-lime has-content">0.20</span>
                            </span>
                            {/* <span className="slidable slider-changePercent">
                                <span id="ACBpercent" className="txt-lime has-content">
                                    0.8<small>%</small>                   
                                </span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP1" className="txt-lime">24.30</span>
                        </td>
                        <td>
                            <span id="ACBoV1" className="txt-lime">187,70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP2" className="txt-lime">24.35</span>
                        </td>
                        <td>
                            <span id="ACBoV2" className="txt-lime">154,90</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP3" className="txt-lime">24.40</span>
                        </td>
                        <td>
                            <span id="ACBoV3" className="txt-lime">434,20</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBhighP" className="txt-lime">24.40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBavgP" className="txt-lime">24.16</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBlowP" className="txt-red">23.95</span>
                        </td>

                        <td>
                            <span id="ACBbV4"></span>
                        </td>
                        <td>
                            <span id="ACBsV4"></span>
                        </td>

                        <td colspan="2" data-slider-group="foreign">
                            <div className='flex'>
                                <p id="ACBforeignB" className="cell-1-2 has-content px-1.5 border-r border-454545 border-solid w-2/4">580,00</p>
                                <p id="ACBforeignS" className="cell-1-2 has-content px-1.5 w-2/4">580,00</p>
                            </div>
                        </td>
                    </tr>

                    <tr id="ACB" className="" data-scroll-page="0">
                        <td className="txtl has-tooltip company-tooltip has-symbol">
                            <a className="symbol txt-lime" id="ACBsym"><span className="has-symbol">ACB</span></a>          
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight" >
                            <span id="ACBref" className="txt-gia-tc">24.05</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBceil" className="txt-gia-tran">25.70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBfloor" className="txt-gia-san">22.40</span>
                        </td>
                        <td >
                            <span  className="slider-accumulatedVol">
                                <span id="ACBtvol" className="has-content">5,848,80</span>
                            </span>
                            {/* <span className="slider-accumulatedVal" >
                                <span id="ACBtval" className="has-content">141,321</span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP3" className="txt-lime">24.15</span>
                        </td>
                        <td>
                            <span id="ACBbV3" className="txt-lime">1,006,80</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP2" className="txt-lime">24.20</span>
                        </td>
                        <td>
                            <span id="ACBbV2" className="txt-lime">166,40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP1" className="txt-lime">24.25</span>
                        </td>
                        <td>
                            <span id="ACBbV1" className="txt-lime">82,40</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBmatchP" className="txt-lime">24.25</span>
                        </td>
                        <td className="cell-highlight">
                            <span id="ACBmatchV" className="txt-lime">170,60</span>
                        </td>
                        <td className="cell-highlight">
                            <span data-slider-field="changeRaw" className="slider-changeRaw">
                                <span id="ACBchange" className="txt-lime has-content">0.20</span>
                            </span>
                            {/* <span className="slidable slider-changePercent">
                                <span id="ACBpercent" className="txt-lime has-content">
                                    0.8<small>%</small>                   
                                </span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP1" className="txt-lime">24.30</span>
                        </td>
                        <td>
                            <span id="ACBoV1" className="txt-lime">187,70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP2" className="txt-lime">24.35</span>
                        </td>
                        <td>
                            <span id="ACBoV2" className="txt-lime">154,90</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP3" className="txt-lime">24.40</span>
                        </td>
                        <td>
                            <span id="ACBoV3" className="txt-lime">434,20</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBhighP" className="txt-lime">24.40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBavgP" className="txt-lime">24.16</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBlowP" className="txt-red">23.95</span>
                        </td>

                        <td>
                            <span id="ACBbV4"></span>
                        </td>
                        <td>
                            <span id="ACBsV4"></span>
                        </td>

                        <td colspan="2" data-slider-group="foreign">
                            <div className='flex'>
                                <p id="ACBforeignB" className="cell-1-2 has-content px-1.5 border-r border-454545 border-solid w-2/4">580,00</p>
                                <p id="ACBforeignS" className="cell-1-2 has-content px-1.5 w-2/4">580,00</p>
                            </div>
                        </td>
                    </tr>

                    <tr id="ACB" className="" data-scroll-page="0">
                        <td className="txtl has-tooltip company-tooltip has-symbol">
                            <a className="symbol txt-lime" id="ACBsym"><span className="has-symbol">ACB</span></a>          
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight" >
                            <span id="ACBref" className="txt-gia-tc">24.05</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBceil" className="txt-gia-tran">25.70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBfloor" className="txt-gia-san">22.40</span>
                        </td>
                        <td >
                            <span  className="slider-accumulatedVol">
                                <span id="ACBtvol" className="has-content">5,848,80</span>
                            </span>
                            {/* <span className="slider-accumulatedVal" >
                                <span id="ACBtval" className="has-content">141,321</span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP3" className="txt-lime">24.15</span>
                        </td>
                        <td>
                            <span id="ACBbV3" className="txt-lime">1,006,80</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP2" className="txt-lime">24.20</span>
                        </td>
                        <td>
                            <span id="ACBbV2" className="txt-lime">166,40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP1" className="txt-lime">24.25</span>
                        </td>
                        <td>
                            <span id="ACBbV1" className="txt-lime">82,40</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBmatchP" className="txt-lime">24.25</span>
                        </td>
                        <td className="cell-highlight">
                            <span id="ACBmatchV" className="txt-lime">170,60</span>
                        </td>
                        <td className="cell-highlight">
                            <span data-slider-field="changeRaw" className="slider-changeRaw">
                                <span id="ACBchange" className="txt-lime has-content">0.20</span>
                            </span>
                            {/* <span className="slidable slider-changePercent">
                                <span id="ACBpercent" className="txt-lime has-content">
                                    0.8<small>%</small>                   
                                </span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP1" className="txt-lime">24.30</span>
                        </td>
                        <td>
                            <span id="ACBoV1" className="txt-lime">187,70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP2" className="txt-lime">24.35</span>
                        </td>
                        <td>
                            <span id="ACBoV2" className="txt-lime">154,90</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP3" className="txt-lime">24.40</span>
                        </td>
                        <td>
                            <span id="ACBoV3" className="txt-lime">434,20</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBhighP" className="txt-lime">24.40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBavgP" className="txt-lime">24.16</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBlowP" className="txt-red">23.95</span>
                        </td>

                        <td>
                            <span id="ACBbV4"></span>
                        </td>
                        <td>
                            <span id="ACBsV4"></span>
                        </td>

                        <td colspan="2" data-slider-group="foreign">
                            <div className='flex'>
                                <p id="ACBforeignB" className="cell-1-2 has-content px-1.5 border-r border-454545 border-solid w-2/4">580,00</p>
                                <p id="ACBforeignS" className="cell-1-2 has-content px-1.5 w-2/4">580,00</p>
                            </div>
                        </td>
                    </tr>

                    <tr id="ACB" className="" data-scroll-page="0">
                        <td className="txtl has-tooltip company-tooltip has-symbol">
                            <a className="symbol txt-lime" id="ACBsym"><span className="has-symbol">ACB</span></a>          
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight" >
                            <span id="ACBref" className="txt-gia-tc">24.05</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBceil" className="txt-gia-tran">25.70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBfloor" className="txt-gia-san">22.40</span>
                        </td>
                        <td >
                            <span  className="slider-accumulatedVol">
                                <span id="ACBtvol" className="has-content">5,848,80</span>
                            </span>
                            {/* <span className="slider-accumulatedVal" >
                                <span id="ACBtval" className="has-content">141,321</span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP3" className="txt-lime">24.15</span>
                        </td>
                        <td>
                            <span id="ACBbV3" className="txt-lime">1,006,80</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP2" className="txt-lime">24.20</span>
                        </td>
                        <td>
                            <span id="ACBbV2" className="txt-lime">166,40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP1" className="txt-lime">24.25</span>
                        </td>
                        <td>
                            <span id="ACBbV1" className="txt-lime">82,40</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBmatchP" className="txt-lime">24.25</span>
                        </td>
                        <td className="cell-highlight">
                            <span id="ACBmatchV" className="txt-lime">170,60</span>
                        </td>
                        <td className="cell-highlight">
                            <span data-slider-field="changeRaw" className="slider-changeRaw">
                                <span id="ACBchange" className="txt-lime has-content">0.20</span>
                            </span>
                            {/* <span className="slidable slider-changePercent">
                                <span id="ACBpercent" className="txt-lime has-content">
                                    0.8<small>%</small>                   
                                </span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP1" className="txt-lime">24.30</span>
                        </td>
                        <td>
                            <span id="ACBoV1" className="txt-lime">187,70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP2" className="txt-lime">24.35</span>
                        </td>
                        <td>
                            <span id="ACBoV2" className="txt-lime">154,90</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP3" className="txt-lime">24.40</span>
                        </td>
                        <td>
                            <span id="ACBoV3" className="txt-lime">434,20</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBhighP" className="txt-lime">24.40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBavgP" className="txt-lime">24.16</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBlowP" className="txt-red">23.95</span>
                        </td>

                        <td>
                            <span id="ACBbV4"></span>
                        </td>
                        <td>
                            <span id="ACBsV4"></span>
                        </td>

                        <td colspan="2" data-slider-group="foreign">
                            <div className='flex'>
                                <p id="ACBforeignB" className="cell-1-2 has-content px-1.5 border-r border-454545 border-solid w-2/4">580,00</p>
                                <p id="ACBforeignS" className="cell-1-2 has-content px-1.5 w-2/4">580,00</p>
                            </div>
                        </td>
                    </tr>

                    <tr id="ACB" className="" data-scroll-page="0">
                        <td className="txtl has-tooltip company-tooltip has-symbol">
                            <a className="symbol txt-lime" id="ACBsym"><span className="has-symbol">ACB</span></a>          
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight" >
                            <span id="ACBref" className="txt-gia-tc">24.05</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBceil" className="txt-gia-tran">25.70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBfloor" className="txt-gia-san">22.40</span>
                        </td>
                        <td >
                            <span  className="slider-accumulatedVol">
                                <span id="ACBtvol" className="has-content">5,848,80</span>
                            </span>
                            {/* <span className="slider-accumulatedVal" >
                                <span id="ACBtval" className="has-content">141,321</span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP3" className="txt-lime">24.15</span>
                        </td>
                        <td>
                            <span id="ACBbV3" className="txt-lime">1,006,80</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP2" className="txt-lime">24.20</span>
                        </td>
                        <td>
                            <span id="ACBbV2" className="txt-lime">166,40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP1" className="txt-lime">24.25</span>
                        </td>
                        <td>
                            <span id="ACBbV1" className="txt-lime">82,40</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBmatchP" className="txt-lime">24.25</span>
                        </td>
                        <td className="cell-highlight">
                            <span id="ACBmatchV" className="txt-lime">170,60</span>
                        </td>
                        <td className="cell-highlight">
                            <span data-slider-field="changeRaw" className="slider-changeRaw">
                                <span id="ACBchange" className="txt-lime has-content">0.20</span>
                            </span>
                            {/* <span className="slidable slider-changePercent">
                                <span id="ACBpercent" className="txt-lime has-content">
                                    0.8<small>%</small>                   
                                </span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP1" className="txt-lime">24.30</span>
                        </td>
                        <td>
                            <span id="ACBoV1" className="txt-lime">187,70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP2" className="txt-lime">24.35</span>
                        </td>
                        <td>
                            <span id="ACBoV2" className="txt-lime">154,90</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP3" className="txt-lime">24.40</span>
                        </td>
                        <td>
                            <span id="ACBoV3" className="txt-lime">434,20</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBhighP" className="txt-lime">24.40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBavgP" className="txt-lime">24.16</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBlowP" className="txt-red">23.95</span>
                        </td>

                        <td>
                            <span id="ACBbV4"></span>
                        </td>
                        <td>
                            <span id="ACBsV4"></span>
                        </td>

                        <td colspan="2" data-slider-group="foreign">
                            <div className='flex'>
                                <p id="ACBforeignB" className="cell-1-2 has-content px-1.5 border-r border-454545 border-solid w-2/4">580,00</p>
                                <p id="ACBforeignS" className="cell-1-2 has-content px-1.5 w-2/4">580,00</p>
                            </div>
                        </td>
                    </tr>

                    <tr id="ACB" className="" data-scroll-page="0">
                        <td className="txtl has-tooltip company-tooltip has-symbol">
                            <a className="symbol txt-lime" id="ACBsym"><span className="has-symbol">ACB</span></a>          
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight" >
                            <span id="ACBref" className="txt-gia-tc">24.05</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBceil" className="txt-gia-tran">25.70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBfloor" className="txt-gia-san">22.40</span>
                        </td>
                        <td >
                            <span  className="slider-accumulatedVol">
                                <span id="ACBtvol" className="has-content">5,848,80</span>
                            </span>
                            {/* <span className="slider-accumulatedVal" >
                                <span id="ACBtval" className="has-content">141,321</span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP3" className="txt-lime">24.15</span>
                        </td>
                        <td>
                            <span id="ACBbV3" className="txt-lime">1,006,80</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP2" className="txt-lime">24.20</span>
                        </td>
                        <td>
                            <span id="ACBbV2" className="txt-lime">166,40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP1" className="txt-lime">24.25</span>
                        </td>
                        <td>
                            <span id="ACBbV1" className="txt-lime">82,40</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBmatchP" className="txt-lime">24.25</span>
                        </td>
                        <td className="cell-highlight">
                            <span id="ACBmatchV" className="txt-lime">170,60</span>
                        </td>
                        <td className="cell-highlight">
                            <span data-slider-field="changeRaw" className="slider-changeRaw">
                                <span id="ACBchange" className="txt-lime has-content">0.20</span>
                            </span>
                            {/* <span className="slidable slider-changePercent">
                                <span id="ACBpercent" className="txt-lime has-content">
                                    0.8<small>%</small>                   
                                </span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP1" className="txt-lime">24.30</span>
                        </td>
                        <td>
                            <span id="ACBoV1" className="txt-lime">187,70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP2" className="txt-lime">24.35</span>
                        </td>
                        <td>
                            <span id="ACBoV2" className="txt-lime">154,90</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP3" className="txt-lime">24.40</span>
                        </td>
                        <td>
                            <span id="ACBoV3" className="txt-lime">434,20</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBhighP" className="txt-lime">24.40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBavgP" className="txt-lime">24.16</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBlowP" className="txt-red">23.95</span>
                        </td>

                        <td>
                            <span id="ACBbV4"></span>
                        </td>
                        <td>
                            <span id="ACBsV4"></span>
                        </td>

                        <td colspan="2" data-slider-group="foreign">
                            <div className='flex'>
                                <p id="ACBforeignB" className="cell-1-2 has-content px-1.5 border-r border-454545 border-solid w-2/4">580,00</p>
                                <p id="ACBforeignS" className="cell-1-2 has-content px-1.5 w-2/4">580,00</p>
                            </div>
                        </td>
                    </tr>

                    <tr id="ACB" className="" data-scroll-page="0">
                        <td className="txtl has-tooltip company-tooltip has-symbol">
                            <a className="symbol txt-lime" id="ACBsym"><span className="has-symbol">ACB</span></a>          
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight" >
                            <span id="ACBref" className="txt-gia-tc">24.05</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBceil" className="txt-gia-tran">25.70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBfloor" className="txt-gia-san">22.40</span>
                        </td>
                        <td >
                            <span  className="slider-accumulatedVol">
                                <span id="ACBtvol" className="has-content">5,848,80</span>
                            </span>
                            {/* <span className="slider-accumulatedVal" >
                                <span id="ACBtval" className="has-content">141,321</span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP3" className="txt-lime">24.15</span>
                        </td>
                        <td>
                            <span id="ACBbV3" className="txt-lime">1,006,80</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP2" className="txt-lime">24.20</span>
                        </td>
                        <td>
                            <span id="ACBbV2" className="txt-lime">166,40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP1" className="txt-lime">24.25</span>
                        </td>
                        <td>
                            <span id="ACBbV1" className="txt-lime">82,40</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBmatchP" className="txt-lime">24.25</span>
                        </td>
                        <td className="cell-highlight">
                            <span id="ACBmatchV" className="txt-lime">170,60</span>
                        </td>
                        <td className="cell-highlight">
                            <span data-slider-field="changeRaw" className="slider-changeRaw">
                                <span id="ACBchange" className="txt-lime has-content">0.20</span>
                            </span>
                            {/* <span className="slidable slider-changePercent">
                                <span id="ACBpercent" className="txt-lime has-content">
                                    0.8<small>%</small>                   
                                </span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP1" className="txt-lime">24.30</span>
                        </td>
                        <td>
                            <span id="ACBoV1" className="txt-lime">187,70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP2" className="txt-lime">24.35</span>
                        </td>
                        <td>
                            <span id="ACBoV2" className="txt-lime">154,90</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP3" className="txt-lime">24.40</span>
                        </td>
                        <td>
                            <span id="ACBoV3" className="txt-lime">434,20</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBhighP" className="txt-lime">24.40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBavgP" className="txt-lime">24.16</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBlowP" className="txt-red">23.95</span>
                        </td>

                        <td>
                            <span id="ACBbV4"></span>
                        </td>
                        <td>
                            <span id="ACBsV4"></span>
                        </td>

                        <td colspan="2" data-slider-group="foreign">
                            <div className='flex'>
                                <p id="ACBforeignB" className="cell-1-2 has-content px-1.5 border-r border-454545 border-solid w-2/4">580,00</p>
                                <p id="ACBforeignS" className="cell-1-2 has-content px-1.5 w-2/4">580,00</p>
                            </div>
                        </td>
                    </tr>

                    <tr id="ACB" className="" data-scroll-page="0">
                        <td className="txtl has-tooltip company-tooltip has-symbol">
                            <a className="symbol txt-lime" id="ACBsym"><span className="has-symbol">ACB</span></a>          
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight" >
                            <span id="ACBref" className="txt-gia-tc">24.05</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBceil" className="txt-gia-tran">25.70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBfloor" className="txt-gia-san">22.40</span>
                        </td>
                        <td >
                            <span  className="slider-accumulatedVol">
                                <span id="ACBtvol" className="has-content">5,848,80</span>
                            </span>
                            {/* <span className="slider-accumulatedVal" >
                                <span id="ACBtval" className="has-content">141,321</span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP3" className="txt-lime">24.15</span>
                        </td>
                        <td>
                            <span id="ACBbV3" className="txt-lime">1,006,80</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP2" className="txt-lime">24.20</span>
                        </td>
                        <td>
                            <span id="ACBbV2" className="txt-lime">166,40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP1" className="txt-lime">24.25</span>
                        </td>
                        <td>
                            <span id="ACBbV1" className="txt-lime">82,40</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBmatchP" className="txt-lime">24.25</span>
                        </td>
                        <td className="cell-highlight">
                            <span id="ACBmatchV" className="txt-lime">170,60</span>
                        </td>
                        <td className="cell-highlight">
                            <span data-slider-field="changeRaw" className="slider-changeRaw">
                                <span id="ACBchange" className="txt-lime has-content">0.20</span>
                            </span>
                            {/* <span className="slidable slider-changePercent">
                                <span id="ACBpercent" className="txt-lime has-content">
                                    0.8<small>%</small>                   
                                </span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP1" className="txt-lime">24.30</span>
                        </td>
                        <td>
                            <span id="ACBoV1" className="txt-lime">187,70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP2" className="txt-lime">24.35</span>
                        </td>
                        <td>
                            <span id="ACBoV2" className="txt-lime">154,90</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP3" className="txt-lime">24.40</span>
                        </td>
                        <td>
                            <span id="ACBoV3" className="txt-lime">434,20</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBhighP" className="txt-lime">24.40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBavgP" className="txt-lime">24.16</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBlowP" className="txt-red">23.95</span>
                        </td>

                        <td>
                            <span id="ACBbV4"></span>
                        </td>
                        <td>
                            <span id="ACBsV4"></span>
                        </td>

                        <td colspan="2" data-slider-group="foreign">
                            <div className='flex'>
                                <p id="ACBforeignB" className="cell-1-2 has-content px-1.5 border-r border-454545 border-solid w-2/4">580,00</p>
                                <p id="ACBforeignS" className="cell-1-2 has-content px-1.5 w-2/4">580,00</p>
                            </div>
                        </td>
                    </tr>

                    <tr id="ACB" className="" data-scroll-page="0">
                        <td className="txtl has-tooltip company-tooltip has-symbol">
                            <a className="symbol txt-lime" id="ACBsym"><span className="has-symbol">ACB</span></a>          
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight" >
                            <span id="ACBref" className="txt-gia-tc">24.05</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBceil" className="txt-gia-tran">25.70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBfloor" className="txt-gia-san">22.40</span>
                        </td>
                        <td >
                            <span  className="slider-accumulatedVol">
                                <span id="ACBtvol" className="has-content">5,848,80</span>
                            </span>
                            {/* <span className="slider-accumulatedVal" >
                                <span id="ACBtval" className="has-content">141,321</span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP3" className="txt-lime">24.15</span>
                        </td>
                        <td>
                            <span id="ACBbV3" className="txt-lime">1,006,80</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP2" className="txt-lime">24.20</span>
                        </td>
                        <td>
                            <span id="ACBbV2" className="txt-lime">166,40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP1" className="txt-lime">24.25</span>
                        </td>
                        <td>
                            <span id="ACBbV1" className="txt-lime">82,40</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBmatchP" className="txt-lime">24.25</span>
                        </td>
                        <td className="cell-highlight">
                            <span id="ACBmatchV" className="txt-lime">170,60</span>
                        </td>
                        <td className="cell-highlight">
                            <span data-slider-field="changeRaw" className="slider-changeRaw">
                                <span id="ACBchange" className="txt-lime has-content">0.20</span>
                            </span>
                            {/* <span className="slidable slider-changePercent">
                                <span id="ACBpercent" className="txt-lime has-content">
                                    0.8<small>%</small>                   
                                </span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP1" className="txt-lime">24.30</span>
                        </td>
                        <td>
                            <span id="ACBoV1" className="txt-lime">187,70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP2" className="txt-lime">24.35</span>
                        </td>
                        <td>
                            <span id="ACBoV2" className="txt-lime">154,90</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP3" className="txt-lime">24.40</span>
                        </td>
                        <td>
                            <span id="ACBoV3" className="txt-lime">434,20</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBhighP" className="txt-lime">24.40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBavgP" className="txt-lime">24.16</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBlowP" className="txt-red">23.95</span>
                        </td>

                        <td>
                            <span id="ACBbV4"></span>
                        </td>
                        <td>
                            <span id="ACBsV4"></span>
                        </td>

                        <td colspan="2" data-slider-group="foreign">
                            <div className='flex'>
                                <p id="ACBforeignB" className="cell-1-2 has-content px-1.5 border-r border-454545 border-solid w-2/4">580,00</p>
                                <p id="ACBforeignS" className="cell-1-2 has-content px-1.5 w-2/4">580,00</p>
                            </div>
                        </td>
                    </tr>

                    <tr id="ACB" className="" data-scroll-page="0">
                        <td className="txtl has-tooltip company-tooltip has-symbol">
                            <a className="symbol txt-lime" id="ACBsym"><span className="has-symbol">ACB</span></a>          
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight" >
                            <span id="ACBref" className="txt-gia-tc">24.05</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBceil" className="txt-gia-tran">25.70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBfloor" className="txt-gia-san">22.40</span>
                        </td>
                        <td >
                            <span  className="slider-accumulatedVol">
                                <span id="ACBtvol" className="has-content">5,848,80</span>
                            </span>
                            {/* <span className="slider-accumulatedVal" >
                                <span id="ACBtval" className="has-content">141,321</span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP3" className="txt-lime">24.15</span>
                        </td>
                        <td>
                            <span id="ACBbV3" className="txt-lime">1,006,80</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP2" className="txt-lime">24.20</span>
                        </td>
                        <td>
                            <span id="ACBbV2" className="txt-lime">166,40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP1" className="txt-lime">24.25</span>
                        </td>
                        <td>
                            <span id="ACBbV1" className="txt-lime">82,40</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBmatchP" className="txt-lime">24.25</span>
                        </td>
                        <td className="cell-highlight">
                            <span id="ACBmatchV" className="txt-lime">170,60</span>
                        </td>
                        <td className="cell-highlight">
                            <span data-slider-field="changeRaw" className="slider-changeRaw">
                                <span id="ACBchange" className="txt-lime has-content">0.20</span>
                            </span>
                            {/* <span className="slidable slider-changePercent">
                                <span id="ACBpercent" className="txt-lime has-content">
                                    0.8<small>%</small>                   
                                </span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP1" className="txt-lime">24.30</span>
                        </td>
                        <td>
                            <span id="ACBoV1" className="txt-lime">187,70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP2" className="txt-lime">24.35</span>
                        </td>
                        <td>
                            <span id="ACBoV2" className="txt-lime">154,90</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP3" className="txt-lime">24.40</span>
                        </td>
                        <td>
                            <span id="ACBoV3" className="txt-lime">434,20</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBhighP" className="txt-lime">24.40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBavgP" className="txt-lime">24.16</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBlowP" className="txt-red">23.95</span>
                        </td>

                        <td>
                            <span id="ACBbV4"></span>
                        </td>
                        <td>
                            <span id="ACBsV4"></span>
                        </td>

                        <td colspan="2" data-slider-group="foreign">
                            <div className='flex'>
                                <p id="ACBforeignB" className="cell-1-2 has-content px-1.5 border-r border-454545 border-solid w-2/4">580,00</p>
                                <p id="ACBforeignS" className="cell-1-2 has-content px-1.5 w-2/4">580,00</p>
                            </div>
                        </td>
                    </tr>

                    <tr id="ACB" className="" data-scroll-page="0">
                        <td className="txtl has-tooltip company-tooltip has-symbol">
                            <a className="symbol txt-lime" id="ACBsym"><span className="has-symbol">ACB</span></a>          
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight" >
                            <span id="ACBref" className="txt-gia-tc">24.05</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBceil" className="txt-gia-tran">25.70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBfloor" className="txt-gia-san">22.40</span>
                        </td>
                        <td >
                            <span  className="slider-accumulatedVol">
                                <span id="ACBtvol" className="has-content">5,848,80</span>
                            </span>
                            {/* <span className="slider-accumulatedVal" >
                                <span id="ACBtval" className="has-content">141,321</span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP3" className="txt-lime">24.15</span>
                        </td>
                        <td>
                            <span id="ACBbV3" className="txt-lime">1,006,80</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP2" className="txt-lime">24.20</span>
                        </td>
                        <td>
                            <span id="ACBbV2" className="txt-lime">166,40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP1" className="txt-lime">24.25</span>
                        </td>
                        <td>
                            <span id="ACBbV1" className="txt-lime">82,40</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBmatchP" className="txt-lime">24.25</span>
                        </td>
                        <td className="cell-highlight">
                            <span id="ACBmatchV" className="txt-lime">170,60</span>
                        </td>
                        <td className="cell-highlight">
                            <span data-slider-field="changeRaw" className="slider-changeRaw">
                                <span id="ACBchange" className="txt-lime has-content">0.20</span>
                            </span>
                            {/* <span className="slidable slider-changePercent">
                                <span id="ACBpercent" className="txt-lime has-content">
                                    0.8<small>%</small>                   
                                </span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP1" className="txt-lime">24.30</span>
                        </td>
                        <td>
                            <span id="ACBoV1" className="txt-lime">187,70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP2" className="txt-lime">24.35</span>
                        </td>
                        <td>
                            <span id="ACBoV2" className="txt-lime">154,90</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP3" className="txt-lime">24.40</span>
                        </td>
                        <td>
                            <span id="ACBoV3" className="txt-lime">434,20</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBhighP" className="txt-lime">24.40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBavgP" className="txt-lime">24.16</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBlowP" className="txt-red">23.95</span>
                        </td>

                        <td>
                            <span id="ACBbV4"></span>
                        </td>
                        <td>
                            <span id="ACBsV4"></span>
                        </td>

                        <td colspan="2" data-slider-group="foreign">
                            <div className='flex'>
                                <p id="ACBforeignB" className="cell-1-2 has-content px-1.5 border-r border-454545 border-solid w-2/4">580,00</p>
                                <p id="ACBforeignS" className="cell-1-2 has-content px-1.5 w-2/4">580,00</p>
                            </div>
                        </td>
                    </tr>

                    <tr id="ACB" className="" data-scroll-page="0">
                        <td className="txtl has-tooltip company-tooltip has-symbol">
                            <a className="symbol txt-lime" id="ACBsym"><span className="has-symbol">ACB</span></a>          
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight" >
                            <span id="ACBref" className="txt-gia-tc">24.05</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBceil" className="txt-gia-tran">25.70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBfloor" className="txt-gia-san">22.40</span>
                        </td>
                        <td >
                            <span  className="slider-accumulatedVol">
                                <span id="ACBtvol" className="has-content">5,848,80</span>
                            </span>
                            {/* <span className="slider-accumulatedVal" >
                                <span id="ACBtval" className="has-content">141,321</span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP3" className="txt-lime">24.15</span>
                        </td>
                        <td>
                            <span id="ACBbV3" className="txt-lime">1,006,80</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP2" className="txt-lime">24.20</span>
                        </td>
                        <td>
                            <span id="ACBbV2" className="txt-lime">166,40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP1" className="txt-lime">24.25</span>
                        </td>
                        <td>
                            <span id="ACBbV1" className="txt-lime">82,40</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBmatchP" className="txt-lime">24.25</span>
                        </td>
                        <td className="cell-highlight">
                            <span id="ACBmatchV" className="txt-lime">170,60</span>
                        </td>
                        <td className="cell-highlight">
                            <span data-slider-field="changeRaw" className="slider-changeRaw">
                                <span id="ACBchange" className="txt-lime has-content">0.20</span>
                            </span>
                            {/* <span className="slidable slider-changePercent">
                                <span id="ACBpercent" className="txt-lime has-content">
                                    0.8<small>%</small>                   
                                </span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP1" className="txt-lime">24.30</span>
                        </td>
                        <td>
                            <span id="ACBoV1" className="txt-lime">187,70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP2" className="txt-lime">24.35</span>
                        </td>
                        <td>
                            <span id="ACBoV2" className="txt-lime">154,90</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP3" className="txt-lime">24.40</span>
                        </td>
                        <td>
                            <span id="ACBoV3" className="txt-lime">434,20</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBhighP" className="txt-lime">24.40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBavgP" className="txt-lime">24.16</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBlowP" className="txt-red">23.95</span>
                        </td>

                        <td>
                            <span id="ACBbV4"></span>
                        </td>
                        <td>
                            <span id="ACBsV4"></span>
                        </td>

                        <td colspan="2" data-slider-group="foreign">
                            <div className='flex'>
                                <p id="ACBforeignB" className="cell-1-2 has-content px-1.5 border-r border-454545 border-solid w-2/4">580,00</p>
                                <p id="ACBforeignS" className="cell-1-2 has-content px-1.5 w-2/4">580,00</p>
                            </div>
                        </td>
                    </tr>

                    <tr id="ACB" className="" data-scroll-page="0">
                        <td className="txtl has-tooltip company-tooltip has-symbol">
                            <a className="symbol txt-lime" id="ACBsym"><span className="has-symbol">ACB</span></a>          
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight" >
                            <span id="ACBref" className="txt-gia-tc">24.05</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBceil" className="txt-gia-tran">25.70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBfloor" className="txt-gia-san">22.40</span>
                        </td>
                        <td >
                            <span  className="slider-accumulatedVol">
                                <span id="ACBtvol" className="has-content">5,848,80</span>
                            </span>
                            {/* <span className="slider-accumulatedVal" >
                                <span id="ACBtval" className="has-content">141,321</span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP3" className="txt-lime">24.15</span>
                        </td>
                        <td>
                            <span id="ACBbV3" className="txt-lime">1,006,80</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP2" className="txt-lime">24.20</span>
                        </td>
                        <td>
                            <span id="ACBbV2" className="txt-lime">166,40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP1" className="txt-lime">24.25</span>
                        </td>
                        <td>
                            <span id="ACBbV1" className="txt-lime">82,40</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBmatchP" className="txt-lime">24.25</span>
                        </td>
                        <td className="cell-highlight">
                            <span id="ACBmatchV" className="txt-lime">170,60</span>
                        </td>
                        <td className="cell-highlight">
                            <span data-slider-field="changeRaw" className="slider-changeRaw">
                                <span id="ACBchange" className="txt-lime has-content">0.20</span>
                            </span>
                            {/* <span className="slidable slider-changePercent">
                                <span id="ACBpercent" className="txt-lime has-content">
                                    0.8<small>%</small>                   
                                </span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP1" className="txt-lime">24.30</span>
                        </td>
                        <td>
                            <span id="ACBoV1" className="txt-lime">187,70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP2" className="txt-lime">24.35</span>
                        </td>
                        <td>
                            <span id="ACBoV2" className="txt-lime">154,90</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP3" className="txt-lime">24.40</span>
                        </td>
                        <td>
                            <span id="ACBoV3" className="txt-lime">434,20</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBhighP" className="txt-lime">24.40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBavgP" className="txt-lime">24.16</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBlowP" className="txt-red">23.95</span>
                        </td>

                        <td>
                            <span id="ACBbV4"></span>
                        </td>
                        <td>
                            <span id="ACBsV4"></span>
                        </td>

                        <td colspan="2" data-slider-group="foreign">
                            <div className='flex'>
                                <p id="ACBforeignB" className="cell-1-2 has-content px-1.5 border-r border-454545 border-solid w-2/4">580,00</p>
                                <p id="ACBforeignS" className="cell-1-2 has-content px-1.5 w-2/4">580,00</p>
                            </div>
                        </td>
                    </tr>

                    <tr id="ACB" className="" data-scroll-page="0">
                        <td className="txtl has-tooltip company-tooltip has-symbol">
                            <a className="symbol txt-lime" id="ACBsym"><span className="has-symbol">ACB</span></a>          
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight" >
                            <span id="ACBref" className="txt-gia-tc">24.05</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBceil" className="txt-gia-tran">25.70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBfloor" className="txt-gia-san">22.40</span>
                        </td>
                        <td >
                            <span  className="slider-accumulatedVol">
                                <span id="ACBtvol" className="has-content">5,848,80</span>
                            </span>
                            {/* <span className="slider-accumulatedVal" >
                                <span id="ACBtval" className="has-content">141,321</span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP3" className="txt-lime">24.15</span>
                        </td>
                        <td>
                            <span id="ACBbV3" className="txt-lime">1,006,80</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP2" className="txt-lime">24.20</span>
                        </td>
                        <td>
                            <span id="ACBbV2" className="txt-lime">166,40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP1" className="txt-lime">24.25</span>
                        </td>
                        <td>
                            <span id="ACBbV1" className="txt-lime">82,40</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBmatchP" className="txt-lime">24.25</span>
                        </td>
                        <td className="cell-highlight">
                            <span id="ACBmatchV" className="txt-lime">170,60</span>
                        </td>
                        <td className="cell-highlight">
                            <span data-slider-field="changeRaw" className="slider-changeRaw">
                                <span id="ACBchange" className="txt-lime has-content">0.20</span>
                            </span>
                            {/* <span className="slidable slider-changePercent">
                                <span id="ACBpercent" className="txt-lime has-content">
                                    0.8<small>%</small>                   
                                </span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP1" className="txt-lime">24.30</span>
                        </td>
                        <td>
                            <span id="ACBoV1" className="txt-lime">187,70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP2" className="txt-lime">24.35</span>
                        </td>
                        <td>
                            <span id="ACBoV2" className="txt-lime">154,90</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP3" className="txt-lime">24.40</span>
                        </td>
                        <td>
                            <span id="ACBoV3" className="txt-lime">434,20</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBhighP" className="txt-lime">24.40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBavgP" className="txt-lime">24.16</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBlowP" className="txt-red">23.95</span>
                        </td>

                        <td>
                            <span id="ACBbV4"></span>
                        </td>
                        <td>
                            <span id="ACBsV4"></span>
                        </td>

                        <td colspan="2" data-slider-group="foreign">
                            <div className='flex'>
                                <p id="ACBforeignB" className="cell-1-2 has-content px-1.5 border-r border-454545 border-solid w-2/4">580,00</p>
                                <p id="ACBforeignS" className="cell-1-2 has-content px-1.5 w-2/4">580,00</p>
                            </div>
                        </td>
                    </tr>

                    <tr id="ACB" className="" data-scroll-page="0">
                        <td className="txtl has-tooltip company-tooltip has-symbol">
                            <a className="symbol txt-lime" id="ACBsym"><span className="has-symbol">ACB</span></a>          
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight" >
                            <span id="ACBref" className="txt-gia-tc">24.05</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBceil" className="txt-gia-tran">25.70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBfloor" className="txt-gia-san">22.40</span>
                        </td>
                        <td >
                            <span  className="slider-accumulatedVol">
                                <span id="ACBtvol" className="has-content">5,848,80</span>
                            </span>
                            {/* <span className="slider-accumulatedVal" >
                                <span id="ACBtval" className="has-content">141,321</span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP3" className="txt-lime">24.15</span>
                        </td>
                        <td>
                            <span id="ACBbV3" className="txt-lime">1,006,80</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP2" className="txt-lime">24.20</span>
                        </td>
                        <td>
                            <span id="ACBbV2" className="txt-lime">166,40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP1" className="txt-lime">24.25</span>
                        </td>
                        <td>
                            <span id="ACBbV1" className="txt-lime">82,40</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBmatchP" className="txt-lime">24.25</span>
                        </td>
                        <td className="cell-highlight">
                            <span id="ACBmatchV" className="txt-lime">170,60</span>
                        </td>
                        <td className="cell-highlight">
                            <span data-slider-field="changeRaw" className="slider-changeRaw">
                                <span id="ACBchange" className="txt-lime has-content">0.20</span>
                            </span>
                            {/* <span className="slidable slider-changePercent">
                                <span id="ACBpercent" className="txt-lime has-content">
                                    0.8<small>%</small>                   
                                </span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP1" className="txt-lime">24.30</span>
                        </td>
                        <td>
                            <span id="ACBoV1" className="txt-lime">187,70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP2" className="txt-lime">24.35</span>
                        </td>
                        <td>
                            <span id="ACBoV2" className="txt-lime">154,90</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP3" className="txt-lime">24.40</span>
                        </td>
                        <td>
                            <span id="ACBoV3" className="txt-lime">434,20</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBhighP" className="txt-lime">24.40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBavgP" className="txt-lime">24.16</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBlowP" className="txt-red">23.95</span>
                        </td>

                        <td>
                            <span id="ACBbV4"></span>
                        </td>
                        <td>
                            <span id="ACBsV4"></span>
                        </td>

                        <td colspan="2" data-slider-group="foreign">
                            <div className='flex'>
                                <p id="ACBforeignB" className="cell-1-2 has-content px-1.5 border-r border-454545 border-solid w-2/4">580,00</p>
                                <p id="ACBforeignS" className="cell-1-2 has-content px-1.5 w-2/4">580,00</p>
                            </div>
                        </td>
                    </tr>

                    <tr id="ACB" className="" data-scroll-page="0">
                        <td className="txtl has-tooltip company-tooltip has-symbol">
                            <a className="symbol txt-lime" id="ACBsym"><span className="has-symbol">ACB</span></a>          
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight" >
                            <span id="ACBref" className="txt-gia-tc">24.05</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBceil" className="txt-gia-tran">25.70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBfloor" className="txt-gia-san">22.40</span>
                        </td>
                        <td >
                            <span  className="slider-accumulatedVol">
                                <span id="ACBtvol" className="has-content">5,848,80</span>
                            </span>
                            {/* <span className="slider-accumulatedVal" >
                                <span id="ACBtval" className="has-content">141,321</span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP3" className="txt-lime">24.15</span>
                        </td>
                        <td>
                            <span id="ACBbV3" className="txt-lime">1,006,80</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP2" className="txt-lime">24.20</span>
                        </td>
                        <td>
                            <span id="ACBbV2" className="txt-lime">166,40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom sell">
                            <span id="ACBbP1" className="txt-lime">24.25</span>
                        </td>
                        <td>
                            <span id="ACBbV1" className="txt-lime">82,40</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBmatchP" className="txt-lime">24.25</span>
                        </td>
                        <td className="cell-highlight">
                            <span id="ACBmatchV" className="txt-lime">170,60</span>
                        </td>
                        <td className="cell-highlight">
                            <span data-slider-field="changeRaw" className="slider-changeRaw">
                                <span id="ACBchange" className="txt-lime has-content">0.20</span>
                            </span>
                            {/* <span className="slidable slider-changePercent">
                                <span id="ACBpercent" className="txt-lime has-content">
                                    0.8<small>%</small>                   
                                </span>
                            </span> */}
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP1" className="txt-lime">24.30</span>
                        </td>
                        <td>
                            <span id="ACBoV1" className="txt-lime">187,70</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP2" className="txt-lime">24.35</span>
                        </td>
                        <td>
                            <span id="ACBoV2" className="txt-lime">154,90</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom">
                            <span id="ACBoP3" className="txt-lime">24.40</span>
                        </td>
                        <td>
                            <span id="ACBoV3" className="txt-lime">434,20</span>
                        </td>

                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell">
                            <span id="ACBhighP" className="txt-lime">24.40</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBavgP" className="txt-lime">24.16</span>
                        </td>
                        <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight">
                            <span id="ACBlowP" className="txt-red">23.95</span>
                        </td>

                        <td>
                            <span id="ACBbV4"></span>
                        </td>
                        <td>
                            <span id="ACBsV4"></span>
                        </td>

                        <td colspan="2" data-slider-group="foreign">
                            <div className='flex'>
                                <p id="ACBforeignB" className="cell-1-2 has-content px-1.5 border-r border-454545 border-solid w-2/4">580,00</p>
                                <p id="ACBforeignS" className="cell-1-2 has-content px-1.5 w-2/4">580,00</p>
                            </div>
                        </td>
                    </tr>

                </tbody>

            </table>
        </>
    )

}

export default MatchedPrice;
