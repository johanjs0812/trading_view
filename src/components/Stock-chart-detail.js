import "../styles/StockChartDetail.css";
import Link from 'next/link';
import CandleStickChart from "./Candlestick-chart";
import DeepAndNews from "./Deep-and-news";
import OrderBook from "./Order-book";

const StockChartDetail = () => {
    return(
        <>
            <div id="StockChartDetail">
                <section className="skylight-wrapper stock-details">

                    <div className="skylight-dialog">

                        <div className="skylight-close-button text-right font-semibold">
                            <i class='bx bx-x' ></i>
                        </div>

                        <div className="flex items-center justify-between px-2.5 w-full mb-3">
                            <div className="flex items-center gap-15px">
                                <h2 className="font-semibold text-base">AAM - Thủy sản Mekong</h2>
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
                                        <th style={{ width: '5%' }}>Sàn</th>
                                        <th style={{ width: '5%' }}>TC</th>
                                        <th style={{ width: '5%' }}>Trần</th>
                                        <th style={{ width: '5%' }}><span>Giá <br /> khớp</span></th>
                                        <th style={{ width: '5%' }}>+/-</th>
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
                                        <td><span>Thực phẩm &amp; Đồ uống</span></td>
                                        <td><span>4,80</span></td>
                                        <td><span>104.3%</span></td>
                                        <td><span>39</span></td>
                                        <td className="cell-highlight txt-gia-san"><span>7.47</span></td>
                                        <td className="cell-highlight txt-gia-tc"><span>8.03</span></td>
                                        <td className="cell-highlight txt-gia-tran"><span>8.59</span></td>
                                        <td className="txt-lime cell-highlight has-tooltip tooltip-bottom">
                                            <span>8.11</span>
                                        </td>
                                        <td className="txt-lime cell-highlight"><span>0.08</span></td>
                                        <td className="txt-lime cell-highlight"><span>1.00<small>%</small></span></td>
                                        <td><span>0.4</span></td>
                                        <td></td>
                                        <td><span>19,190</span></td>
                                        <td><span>-248</span></td>
                                        <td><span>-1.27%</span></td>
                                        <td><span>-1.21%</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div id="chart-deep-market-orderbook" className="flex">
                            < CandleStickChart />
                            < DeepAndNews />
                            < OrderBook />
                        </div>

                    </div>

                </section>
            </div>     
        </>
    )
}

export default StockChartDetail;
