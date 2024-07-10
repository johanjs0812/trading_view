import formatNumberINT from "./formatNumberINT";

const extractAndSortVolume = (array) => {
    let responses = array.map(item => formatNumberINT(item.Volume));
    // responses = responses.sort((a, b) => a - b);
    return responses;
};

export default extractAndSortVolume;