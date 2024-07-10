import "../styles/DeepAndNews.css";
import splitTrades from "@/helpers/splitTrades";
import roundToUSD from "@/helpers/roundtoTwoUSD";
import formatNumberINT from "@/helpers/formatNumberINT";

const renderRows = (buy, sell) => {

    // console.log("f12", buy, sell)

    if (!buy || !sell || !Array.isArray(buy) || !Array.isArray(sell)) {
        return null;
    }

    buy = buy.slice(0, 3);

    return buy.map((muaItem, index) => (
        <div className="flex text-xs xam-odd" key={index}>
            <div className="w-2/4 flex border-right-info">
                <div className="w-2/5 text-center py-1.5">{formatNumberINT(muaItem.Volume )}</div>
                <div className="w-3/5 text-center py-1.5 txt-green">{roundToUSD(muaItem.Close)}</div>
            </div>

            <div className="w-2/4 flex">
                <div className="w-3/5 text-center py-1.5 txt-green">{roundToUSD(sell[index]?.Close)}</div>
                <div className="w-2/5 text-center py-1.5">{formatNumberINT(sell[index]?.Volume)}</div>
            </div>
        </div>
    ));
};

const DeepAndNews = ({SymbolResponse}) => {

    let data = {};

    if (SymbolResponse) {
        data = splitTrades(SymbolResponse.Infoby1p);
    }

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

                    {renderRows(data.buyTrades, data.sellTrades)}

                </div>
            </div>
        </>
    )

}

export default DeepAndNews;