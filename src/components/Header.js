const Header = () => {

    return(
        <>
            <div className="flex h-10 items-center" id="horizontal-menu">

                <div style={{ backgroundColor: "var(--bg-background-option)", color: "var(--color-text-white)"}}
                    className="flex ml-2.5 mr-10 h-6 cursor-pointer items-center w-168px rounded-20px relative">

                    <div className="absolute h-full w-6/12 rounded-20px" id="slideOption"></div>

                    <span className="flex h-full items-center justify-center text-sm font-medium w-84px z-10 leading-5">
                        Cơ sở
                    </span>

                    <span className="flex h-full items-center justify-center text-sm font-medium w-84px z-10 leading-5">
                        Phái sinh
                    </span>
                </div>

                <div className="flex items-center w-full" id="horizontal-root">
                    <li id="Bang_gia">
                        <span class="title-listmenu active">Bảng giá</span>
                    </li>
                    <li id="Giao_dich">
                        <span class="title-listmenu ">Giao dịch cơ sở</span>
                        <i class='bx bx-caret-down'></i>
                    </li>
                    <li id="Giao_dich_tien">
                        <span class="title-listmenu ">Giao dịch tiền</span>
                        <i class='bx bx-caret-down'></i>
                    </li>
                    <li id="Thong_tin_tai_khoan">
                        <span class="title-listmenu ">Báo cáo</span>
                        <i class='bx bx-caret-down'></i>
                    </li>
                    <li id="Thong_tin_thi_truong">
                        <span class="title-listmenu ">Thị trường</span>
                        <i class='bx bx-caret-down'></i>
                    </li>
                    <li id="Dau_tu">
                        <span class="title-listmenu ">Sản phẩm khác</span>
                        <i class='bx bx-caret-down'></i>
                    </li>
                    <li id="Dich_vu_ho_tro">
                        <span class="title-listmenu ">Trợ giúp</span>
                        <i class='bx bx-caret-down'></i>
                    </li>
                </div>

            </div>
        </>
    )

}

export default Header;