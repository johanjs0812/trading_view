const calculateAveragePrice = (open, close, high, low) => {
    let x = (open + close + high + low) / 4;
    return x.toFixed(2);
}

export default calculateAveragePrice;