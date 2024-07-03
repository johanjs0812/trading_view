import Link from 'next/link';
import "../styles/StickyTableHeader.css"

const StickyTableHeader = () => {
    return(
        <>
            <div id='StickyTableHeader'> 
                <table className="banggia fixed-header">
                    <colgroup>
                        <col className="show-on-mobile col-symbol" />
                        <col className="show-on-mobile col-price" />
                        <col className="show-on-mobile col-price" />
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
                    <thead>
                        <tr>
                        <th rowspan="2" className="show-on-mobile sortable">Mã CK</th>
                        <th rowspan="2" className="cell-highlight sortable">TC</th>
                        <th rowspan="2" className="cell-highlight sortable">Trần</th>
                        <th rowspan="2" className="cell-highlight sortable">Sàn</th>
                        <th rowspan="2" className="sortable has-toggle relative	text-center" data-slider-group="accumulated">
                            <div>
                                <Link href="/" className="btn-link btn-sm toggle-left">
                                    <i class='bx bx-caret-left' ></i>
                                </Link>
                                <span data-slider-field="accumulatedVol" className="slidable">
                                    <span className="has-content">Tổng KL</span>
                                </span>
                                <Link href="/" className="btn-link btn-sm toggle-right">
                                    <i class='bx bx-caret-right' ></i>
                                </Link>
                            </div>

                            <i class='bx bx-caret-down absolute block text-center w-full'></i>
                        </th>
                        <th colspan="6">Bên mua</th>
                        {/* <th colspan="3" className="cell-highlight hidden-xxl">Khớp lệnh</th> */}
                        <th colspan="3" className="cell-highlight visible-xxl-table-cell">Khớp lệnh</th>
                        <th colspan="6">Bên bán</th>
                        <th colspan="3" className="cell-highlight">Giá</th>
                        <th colspan="2">Dư</th>
                        <th colspan="2">ĐTNN</th>
                        </tr>

                        <tr>
                            <th className="sortable">Giá 3</th>
                            <th className="sortable">KL 3</th>
                            <th className="sortable">Giá 2</th>
                            <th className="sortable">KL 2</th>
                            <th className="sortable">Giá 1</th>
                            <th className="sortable">KL 1</th>
                            <th className="cell-highlight sortable">Giá</th>
                            <th className="cell-highlight sortable">KL</th>

                            <th className="cell-highlight sortable has-toggle border" data-slider-group="priceDiff">
                                <div className='flex items-center '>
                                    <Link href="/" className="btn-link btn-sm toggle-left h-full block px-px cursor-pointer">
                                        <i class='bx bx-caret-left ' ></i>
                                    </Link>
                                    <p data-slider-field="changeRaw" className="slidable h-full">
                                        <span className="has-content text-sm">+/-</span>
                                    </p>
                                    <Link href="/" className="btn-link btn-sm toggle-right h-full block px-px cursor-pointer">
                                        <i class='bx bx-caret-right ' ></i>
                                    </Link>
                                </div>
                            </th>

                            <th className="sortable">Giá 1</th>
                            <th className="sortable">KL 1</th>
                            <th className="sortable">Giá 2</th>
                            <th className="sortable">KL 2</th>
                            <th className="sortable">Giá 3</th>
                            <th className="sortable">KL 3</th>
                            <th className="cell-highlight sortable">Cao</th>
                            <th className="cell-highlight sortable">TB</th>
                            <th className="cell-highlight sortable">Thấp</th>
                            <th className="sortable">Mua</th>
                            <th className="sortable">Bán</th>

                            <th colspan="2" className=" has-toggle">
                                <div className="slidable w-full flex">
                                    <div className="sortable cell-1-2 has-content w-2/4 border-r border-454545 border-solid flex">
                                        <a className="btn-link toggle-left  items-center block px-1">
                                            <i class='bx bx-caret-left' ></i>
                                        </a>
                                        <p className='w-full text-left'>
                                        Mua
                                        </p>
                                    </div>
                                    <div className="sortable cell-1-2 has-content w-2/4 items-center flex">
                                        <p className='w-full text-right'>
                                        Bán
                                        </p>
                                        <a className="btn-link toggle-right block px-1">
                                            <i class='bx bx-caret-right' ></i>
                                        </a>
                                    </div>
                                </div>
                            </th>

                        </tr>
                    </thead>
                </table>
            </div>
        </>
    )
}

export default StickyTableHeader;