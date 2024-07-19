const formatNumberToUSD = (number) => {
    if (typeof number === 'string') {
        number = parseFloat(number);
    }

    if (isNaN(number)) {
        return number;
    }

    return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(number);
}

export default formatNumberToUSD;