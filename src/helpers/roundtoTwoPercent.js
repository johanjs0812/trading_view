const roundToTwoDecimals = (input) => {
    // console.log('%', input)
    const number = typeof input === 'string' ? parseFloat(input) : input;

    if (isNaN(number)) {
       return input;
    }

    return Math.floor(number * 100) / 100 + "%";
}

export default roundToTwoDecimals;