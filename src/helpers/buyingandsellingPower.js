const buyingandsellingPower = (mua, ban, options) => {
    const totalVolumeMua = mua.reduce((acc, item) => {
        const volume = typeof item === 'string' ? parseFloat(item) : item;
        return acc + volume;
    }, 0);

    const totalVolumeBan = ban.reduce((acc, item) => {
        const volume = typeof item === 'string' ? parseFloat(item) : item;
        return acc + volume;
    }, 0);

    console.log(totalVolumeBan, totalVolumeMua, options)

    const percentageMua = (totalVolumeMua / (totalVolumeMua + totalVolumeBan)) * 100;
    const percentageBan = (totalVolumeBan / (totalVolumeMua + totalVolumeBan)) * 100;

    if (options === "buy") {
        return percentageMua.toFixed(2);
    } else if (options === "sell") {
        return percentageBan.toFixed(2);
    } else {
        return "0";
    }
};

export default buyingandsellingPower;
