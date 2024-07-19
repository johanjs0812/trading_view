export default function calculateKLtoKLTBPercentage(khoiLuong, klTb10Phien) {
    if (typeof khoiLuong === 'string') {
        khoiLuong = parseFloat(khoiLuong);
    }
    if (typeof klTb10Phien === 'string') {
        klTb10Phien = parseFloat(klTb10Phien);
    }

    if (typeof khoiLuong !== 'number' || typeof klTb10Phien !== 'number' || klTb10Phien === 0) {
        return ""
    }

    const klKltbPercentage = (khoiLuong / klTb10Phien) * 100;
    return klKltbPercentage.toFixed(2) + '%';
}
