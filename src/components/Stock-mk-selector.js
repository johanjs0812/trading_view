import Link from 'next/link';
import "../styles/StockMarketSelector.css";

const StockMarketSelector = () => {

    return (
        <>    
            <div id="StockMarketSelector" className="table w-full">

                <div className="flex pl-5px float-left">

                    <div className="text-13px rounded-3px">
                        <input type="text" id="seacrh-iput-CK" placeholder="Nhập mã CK..." />
                    </div>

                    <button id="seacrh-btn-CK">
                        <i className='bx bx-plus-medical'></i>
                    </button>

                </div>

                <div id="switch-priceboard" className="cursor-pointer flex items-center relative float-left">
                    <div className="absolute w-2/4 h-full text-white rounded-20px flex items-center" id="switch-bg-bg-cb">
                        <i className='bx bx-check '></i>
                    </div>
                    <p className="text-white text-xs w-3/6 z-10 pl-3.5">Bảng giá</p>
                    <p className="text-white text-xs w-3/6 z-10 pl-3.5">Cơ bản</p>
                </div>

                <ul id="primary" className='flex float-left'>

                    <li id="tab1" className="has-sub-menu h-30px mr-1 relative text-13px">
                        <Link href="/" title="Danh mục của tôi" >Danh mục <i class='bx bx-caret-down'></i></Link>
                        <ul className="sub-menu user-categories" id="UserCategoriesWrp">
                            <li className="add">
                                <input className="txtbox_dmnd01" type="text" maxlength="40" placeholder="Tạo danh mục mới..." />
                                <span className="editing-buttons">
                                    <button><i className='bx bx-plus-medical'></i></button>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li className="has-sub-menu active h-30px mr-1 relative text-13px">
                        <Link href="/" title="Sàn giao dịch chứng khoán TP Hồ Chí Minh" className='active'>
                            <span className="hose-tabs ">HOSE <i class='bx bx-caret-down'></i></span>
                        </Link>
                        <ul className="sub-menu">
                            <li className="active">
                                <Link href="/" className='active'><span>HOSE</span></Link>
                            </li>
                            <li className="">
                                <Link href="/" title="VN30"><span>VN30</span></Link>
                            </li>
                            <li className="">
                                <Link href="/" title="ETF" ><span>ETF</span></Link>
                            </li>
                            <li className="">
                                <Link href="/" >Giao dịch lô lẻ</Link>
                            </li>
                            <li className="">
                                <Link href="/" >Giao dịch thỏa thuận</Link>
                            </li>
                        </ul>
                    </li>

                    <li className="has-sub-menu h-30px mr-1 relative text-13px">
                        <Link href="/" title="Sàn giao dịch chứng khoán Hà Nội" >
                            <span className="hnx-tabs">HNX <i class='bx bx-caret-down'></i></span>
                        </Link>
                        <ul className="sub-menu">
                            <li className="">
                                <Link href="/" ><span>HNX</span></Link>
                            </li>
                            <li className="">
                                <Link href="/" ><span>HNX30</span></Link>
                            </li>
                            <li className="">
                                <Link href="/" ><span>Bond</span>
                                </Link>
                            </li>
                            <li className="">
                                <Link href="/" >Giao dịch thỏa thuận</Link>
                            </li>
                        </ul>
                    </li>

                    <li className="has-sub-menu h-30px mr-1 relative text-13px">
                        <Link href="/" title="Các công ty đại chúng chưa niêm yết" ><span>UPCOM <i class='bx bx-caret-down'></i></span></Link>
                        <ul className="sub-menu"><li className=""><Link href="/" ><span>UPCOM</span></Link></li>
                            <li className=""><Link href="/" >Giao dịch thỏa thuận</Link></li>
                        </ul>
                    </li>
                
                    <li className="has-sub-menu menu-filters h-30px mr-1 relative text-13px">
                        <Link href="/" ><span>CP ngành <i class='bx bx-caret-down'></i></span></Link>
                        <ul className="sub-menu">
                            <li className=""><Link href="/">Dầu khí</Link></li>
                            <li className=""><Link href="/">Hóa chất</Link></li>
                            <li className=""><Link href="/">Tài nguyên</Link></li>
                            <li className=""><Link href="/">Xây dựng &amp; Vật liệu</Link></li>
                            <li className=""><Link href="/">Hàng hóa và dịch vụ công nghiệp</Link></li>
                            <li className=""><Link href="/">Ôtô &amp; linh kiện phụ tùng </Link></li>
                        </ul>
                    </li>

                    <li className="has-sub-menu h-30px mr-1 relative text-13px">
                        <Link href="/" >
                            <span>Phái sinh <i class='bx bx-caret-down'></i></span> 
                            <i className="fa fa-bar-chart" ></i>
                        </Link>
                        <ul className="sub-menu">
                            <li className=""><Link href="/" title="VN30" ><span>HĐTL chỉ số VN30</span></Link></li>
                            <li className=""><Link href="/" title="VGB" ><span>HĐTL TPCP</span></Link></li>
                        </ul>
                    </li>

                    <li className="has-sub-menu h-30px mr-1 relative text-13px">
                        <Link href="/" ><span>Chứng quyền <i class='bx bx-caret-down'></i></span></Link>
                        <ul className="sub-menu">
                            <li className=""><Link href="/" >Chứng quyền toàn thị trường</Link></li>
                            <li className=""><Link href="/" >Chứng quyền tại VND</Link></li>
                        </ul>
                    </li>

                </ul>

                <ul id="secondary" className='flex float-right text-13px'>
                    <li>
                        <Link href="/" title="Chọn phong cách cho bảng giá của bạn" className="theme-switcher">
                            <i class='bx bx-tv text-lg'></i>
                        </Link>
                        <ul className="sub-menu" id="theme-switcher">
                            <li className="selected">
                                <Link href="/" className='active'><span>Hiện đại</span></Link>
                            </li>
                            <li className="">
                                <Link href="/"><span>Cổ điển</span></Link>
                            </li>
                            <li className="">
                                <Link href="/"><span>Tuyết trắng</span></Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href="/" title="Ẩn/hiện biểu đồ" id="chart-toggle">
                            <i class='bx bxs-chevron-down text-lg'></i>
                        </Link>
                    </li>
                </ul>

            </div>
        </>
    )

}

 export default StockMarketSelector;