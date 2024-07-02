const StockMarketSelector = () => {

    return (
        <>    
            <div id="StockMarketSelector" className="flex">

                <div className="flex pl-5px">

                    <div className="text-13px rounded-3px">
                        <input type="text" id="seacrh-iput-CK" placeholder="Nhập mã CK..." />
                    </div>

                    <button id="seacrh-btn-CK">
                        <i class='bx bx-plus-medical'></i>
                    </button>

                </div>

                <div id="switch-priceboard" className="cursor-pointer flex items-center">
                    <p className="text-white text-xs w-3/6">Bảng giá</p>
                    <p className="text-white text-xs w-3/6">Cơ bản</p>
                </div>

            </div>
        </>
    )

}

 export default StockMarketSelector;