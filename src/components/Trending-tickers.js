import "../styles/TrendingTickers.css";
import MiniChart from "./Mini-chart";
import RangeBar from "./Range-bar";

const TrendingTickers = () => {

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
                        <tr>
                            <td className="text-left pl-1.5 pr-15px pb-1.5 pt-5px align-middle font-semibold">
                                BTC-USD
                                <div className="symbol"></div>
                            </td>
                            <td className="text-left pr-2.5 pb-1.5 pt-5px pl-2.5 align-middle">Bitcoin USD</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle font-semibold" >54,525.59</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle" >6:09AM UTC</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle font-semibold" >-4,308.80</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle font-semibold" >-7.32%</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle font-semibold" >51.165B</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle font-medium" >1.075T</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle">< RangeBar/></td>
                            <td className="text-left pr-2.5 pl-5 pb-1.5 pt-5px align-middle" >< RangeBar/></td>
                            <td className="text-left pr-2.5 pl-5 pb-1.5 pt-5px align-middle"  style={{height:"39px"}}> < MiniChart /> </td>
                        </tr>

                        <tr>
                            <td className="text-left pl-1.5 pr-15px pb-1.5 pt-5px align-middle font-semibold">
                                BTC-USD
                                <div className="symbol"></div>
                            </td>
                            <td className="text-left pr-2.5 pb-1.5 pt-5px pl-2.5 align-middle">Bitcoin USD</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle font-semibold" >54,525.59</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle" >6:09AM UTC</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle font-semibold" >-4,308.80</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle font-semibold" >-7.32%</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle font-semibold" >51.165B</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle font-medium" >1.075T</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle">< RangeBar/></td>
                            <td className="text-left pr-2.5 pl-5 pb-1.5 pt-5px align-middle" >< RangeBar/></td>
                            <td className="text-left pr-2.5 pl-5 pb-1.5 pt-5px align-middle"  style={{height:"39px"}}> < MiniChart /> </td>
                        </tr>

                        <tr>
                            <td className="text-left pl-1.5 pr-15px pb-1.5 pt-5px align-middle font-semibold">
                                BTC-USD
                                <div className="symbol"></div>
                            </td>
                            <td className="text-left pr-2.5 pb-1.5 pt-5px pl-2.5 align-middle">Bitcoin USD</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle font-semibold" >54,525.59</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle" >6:09AM UTC</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle font-semibold" >-4,308.80</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle font-semibold" >-7.32%</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle font-semibold" >51.165B</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle font-medium" >1.075T</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle">< RangeBar/></td>
                            <td className="text-left pr-2.5 pl-5 pb-1.5 pt-5px align-middle" >< RangeBar/></td>
                            <td className="text-left pr-2.5 pl-5 pb-1.5 pt-5px align-middle"  style={{height:"39px"}}> < MiniChart /> </td>
                        </tr>

                        <tr>
                            <td className="text-left pl-1.5 pr-15px pb-1.5 pt-5px align-middle font-semibold">
                                BTC-USD
                                <div className="symbol"></div>
                            </td>
                            <td className="text-left pr-2.5 pb-1.5 pt-5px pl-2.5 align-middle">Bitcoin USD</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle font-semibold" >54,525.59</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle" >6:09AM UTC</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle font-semibold" >-4,308.80</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle font-semibold" >-7.32%</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle font-semibold" >51.165B</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle font-medium" >1.075T</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle">< RangeBar/></td>
                            <td className="text-left pr-2.5 pl-5 pb-1.5 pt-5px align-middle" >< RangeBar/></td>
                            <td className="text-left pr-2.5 pl-5 pb-1.5 pt-5px align-middle"  style={{height:"39px"}}> < MiniChart /> </td>
                        </tr>

                        <tr>
                            <td className="text-left pl-1.5 pr-15px pb-1.5 pt-5px align-middle font-semibold">
                                BTC-USD
                                <div className="symbol"></div>
                            </td>
                            <td className="text-left pr-2.5 pb-1.5 pt-5px pl-2.5 align-middle">Bitcoin USD</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle font-semibold" >54,525.59</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle" >6:09AM UTC</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle font-semibold" >-4,308.80</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle font-semibold" >-7.32%</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle font-semibold" >51.165B</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle font-medium" >1.075T</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle">< RangeBar/></td>
                            <td className="text-left pr-2.5 pl-5 pb-1.5 pt-5px align-middle" >< RangeBar/></td>
                            <td className="text-left pr-2.5 pl-5 pb-1.5 pt-5px align-middle"  style={{height:"39px"}}> < MiniChart /> </td>
                        </tr>

                        <tr>
                            <td className="text-left pl-1.5 pr-15px pb-1.5 pt-5px align-middle font-semibold">
                                BTC-USD
                                <div className="symbol"></div>
                            </td>
                            <td className="text-left pr-2.5 pb-1.5 pt-5px pl-2.5 align-middle">Bitcoin USD</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle font-semibold" >54,525.59</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle" >6:09AM UTC</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle font-semibold" >-4,308.80</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle font-semibold" >-7.32%</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle font-semibold" >51.165B</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle font-medium" >1.075T</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle">< RangeBar/></td>
                            <td className="text-left pr-2.5 pl-5 pb-1.5 pt-5px align-middle" >< RangeBar/></td>
                            <td className="text-left pr-2.5 pl-5 pb-1.5 pt-5px align-middle"  style={{height:"39px"}}> < MiniChart /> </td>
                        </tr>

                        <tr>
                            <td className="text-left pl-1.5 pr-15px pb-1.5 pt-5px align-middle font-semibold">
                                BTC-USD
                                <div className="symbol"></div>
                            </td>
                            <td className="text-left pr-2.5 pb-1.5 pt-5px pl-2.5 align-middle">Bitcoin USD</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle font-semibold" >54,525.59</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle" >6:09AM UTC</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle font-semibold" >-4,308.80</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle font-semibold" >-7.32%</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle font-semibold" >51.165B</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle font-medium" >1.075T</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle">< RangeBar/></td>
                            <td className="text-left pr-2.5 pl-5 pb-1.5 pt-5px align-middle" >< RangeBar/></td>
                            <td className="text-left pr-2.5 pl-5 pb-1.5 pt-5px align-middle"  style={{height:"39px"}}> < MiniChart /> </td>
                        </tr>

                        <tr>
                            <td className="text-left pl-1.5 pr-15px pb-1.5 pt-5px align-middle font-semibold">
                                BTC-USD
                                <div className="symbol"></div>
                            </td>
                            <td className="text-left pr-2.5 pb-1.5 pt-5px pl-2.5 align-middle">Bitcoin USD</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle font-semibold" >54,525.59</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle" >6:09AM UTC</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle font-semibold" >-4,308.80</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle font-semibold" >-7.32%</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle font-semibold" >51.165B</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle font-medium" >1.075T</td>
                            <td className="text-right pl-5 pb-1.5 pt-5px align-middle">< RangeBar/></td>
                            <td className="text-left pr-2.5 pl-5 pb-1.5 pt-5px align-middle" >< RangeBar/></td>
                            <td className="text-left pr-2.5 pl-5 pb-1.5 pt-5px align-middle"  style={{height:"39px"}}> < MiniChart /> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )

}

export default TrendingTickers;