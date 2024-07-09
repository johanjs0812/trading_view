const roundToUSD = (input) => {
    const number = typeof input === 'string' ? parseFloat(input) : input;

    if (isNaN(number)) {
        throw new Error('Input must be a number or a string representing a number');
    }

    return (Math.floor(number * 100) / 100).toFixed(2);
}
  
export default roundToUSD;

