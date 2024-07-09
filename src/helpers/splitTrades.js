export default function splitTrades(trades) {
    const sellTrades = [];
    const buyTrades = [];

    trades.forEach(trade => {
        if (trade.Close < trade.Open) {
            sellTrades.push(trade); 
        } else if (trade.Close > trade.Open) {
            buyTrades.push(trade);  
        }
    });

    sellTrades.sort((a, b) => b.Close - a.Close);
    buyTrades.sort((a, b) => b.Close - a.Close);

    return {
        sellTrades,
        buyTrades
    };
}
