import "../styles/DeepAndNews.css";

const DeepAndNews = () => {

    return(
        <>
            <div id="DeepAndNews">
                <div className="header flex ">
                    <div className="text-center w-2/4 active">
                        <div className="py-1.5 text-xs font-semibold text-color-not-click cursor-pointer act-act">Độ sâu thị trường</div>
                        <div className="hr w-3/5 mx-auto"></div>
                    </div>

                    <div className="text-center w-2/4">
                        <div className="py-1.5 text-xs font-semibold text-color-not-click cursor-pointer act-act">Lịch sự kiện</div>
                        <div className="hr w-3/5 mx-auto"></div>
                    </div>
                </div>

                <div className="title-table flex text-xs font-semibold bg-row-xam">
                    <div className="w-2/4 flex border-right-info">
                        <div className="w-2/5 text-center py-1.5">KL mua</div>
                        <div className="w-3/5 text-center py-1.5">Giá mua</div>
                    </div>

                    <div className="w-2/4 flex">
                        <div className="w-3/5 text-center py-1.5">Giá bán</div>
                        <div className="w-2/5 text-center py-1.5">KL bán</div>
                    </div>
                </div>

                <div className="info-price">

                    <div className="flex text-xs xam-odd">
                        <div className="w-2/4 flex border-right-info">
                            <div className="w-2/5 text-center py-1.5">20</div>
                            <div className="w-3/5 text-center py-1.5 txt-green">5.12</div>
                        </div>

                        <div className="w-2/4 flex">
                            <div className="w-3/5 text-center py-1.5 txt-green">5.21</div>
                            <div className="w-2/5 text-center py-1.5">30</div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}

export default DeepAndNews;