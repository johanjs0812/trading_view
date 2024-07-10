const roundToUSD = (input) => {
    const number = typeof input === 'string' ? parseFloat(input) : input;

    if (isNaN(number)) {
        return "";
    }

    return (Math.floor(number * 100) / 100).toFixed(2);
}
  
export default roundToUSD;

