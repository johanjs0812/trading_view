import Link from 'next/link';
import "../styles/MatchedPriceFooter.css";

const MatchedPriceFooter = () =>{
    return(
        <>
        <div id="MatchedPriceFooter" className='text-13px'>
            <div className='set-cm-menu placeorder-sticky'>
                <div>
                    <button className='btn-order'><i className='bx bxs-cart'></i> Đặt lệnh</button>
                </div>
                <ul className='footer-quick-nav flex'>
                    <li style={{width: "auto"}}>
                        <span id="price-status" className="txt-green">Price streaming connected</span>
                    </li>
                    <li><Link href="/"><i class='bx bx-line-chart'></i> Bảng giá</Link></li>
                    <li className=""><Link href="/"><i class='bx bxs-bell'></i> Thông báo</Link></li>
                    <li className="" ><Link href="/"><i class='bx bx-money' ></i> Tài sản</Link></li>
                    <li className="" ><Link href="/"><i class='bx bx-file'></i> Danh mục</Link></li>
                    <li className="" ><Link href="/"><i class='bx bx-book'></i> Sổ lệnh</Link></li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default MatchedPriceFooter;