import splitTrades from "./splitTrades";
import formatNumberINT from "./formatNumberINT";

export default function getNthTrade(Infoby1p, type, n, attribute) {
    const data = splitTrades(Infoby1p);

    // Kiểm tra xem data có tồn tại và có các thuộc tính cần thiết không
    if (data && Array.isArray(data.sellTrades) && Array.isArray(data.buyTrades)) {
        if (type === "sell") {
            if (data.sellTrades.length >= n) {
                return formatNumberINT(data.sellTrades[n - 1][attribute]);
            } else {
                return ``;
            }
        } else if (type === "buy") {
            if (data.buyTrades.length >= n) {
                return formatNumberINT(data.buyTrades[n - 1][attribute]);
            } else {
                return ``;
            }
        } else {
            return "";
        }
    }
}
