import formatNumberINT from "./formatNumberINT";

const getLastVolumePrice = (array) => {
    if (Array.isArray(array) && array.length > 0) {
        const x = array[array.length - 1];
        console.log(x);
        return formatNumberINT(x.Volume);
    }   
}

export default getLastVolumePrice;
