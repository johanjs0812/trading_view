import formatNumberINT from "./formatNumberINT";

const getLastVolumePrice = (array) => {
    const x = array[array.length - 1];
    console.log(x)
    return formatNumberINT( x.Volume);
}

export default getLastVolumePrice;