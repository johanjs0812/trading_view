const convertToPercentage = (input) => {
    let number;
    
    // Kiểm tra nếu input là chuỗi, chuyển thành số
    if (typeof input === 'string') {
        number = parseFloat(input);
        
        // Kiểm tra nếu không phải số sau khi chuyển đổi
        if (isNaN(number)) {
            throw new Error('Input string cannot be converted to a number.');
        }
    } else {
        number = input;
    }
    
    // Chuyển đổi thành phần trăm và định dạng kết quả
    const percentage = number * 100;
    return percentage.toFixed(2) + '%';
};

export default convertToPercentage;

