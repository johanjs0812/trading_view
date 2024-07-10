import roundToUSD from "./roundtoTwoUSD";

const extractAndSortClose = (buy, sell) => {
    const buyClose = buy.map(item => roundToUSD(item.Close));
    const sellClose = sell.map(item => roundToUSD(item.Close));

    const allClose = [...buyClose, ...sellClose];

    // allClose.sort((a, b) => a - b);

    return allClose;
};

export default extractAndSortClose;