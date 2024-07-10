const formatNumberINT = (input) => {
    if (!input) {
        return input;
    }

    let number;
    
    if (typeof input === 'string') {
        number = parseFloat(input.replace(/,/g, '')); 
        if (isNaN(number)) {
            return input; 
        }
    } else {
        number = input;
    }
    
    return number.toLocaleString();
}

export default formatNumberINT;

