export default function isNegativeNumber(value) {
    if (value < 0) {
        return "txt-red";
    }else if(value > 0){
        return "txt-lime";
    } else if(value == 0){
        return "";
    }
}