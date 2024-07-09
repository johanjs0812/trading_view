import formatNumberToUSD from "./formattoUSD";

const calculateTransactionValue = (currentPrice, totalVolume) => {
    // Chuyển đổi kiểu dữ liệu nếu cần
    if (typeof currentPrice === 'string') {
        currentPrice = parseFloat(currentPrice);
    }
    if (typeof totalVolume === 'string') {
        totalVolume = parseFloat(totalVolume);
    }

    // Kiểm tra nếu dữ liệu đầu vào không hợp lệ
    if (isNaN(currentPrice) || isNaN(totalVolume)) {
        return 'Invalid input data';
    }

    // Tính toán tổng giá trị giao dịch
    const totalTransactionValue = currentPrice * totalVolume;

    // Định dạng tổng giá trị giao dịch thành USD
    return formatNumberToUSD(totalTransactionValue);
}

export default calculateTransactionValue;
