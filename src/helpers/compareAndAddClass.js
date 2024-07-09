export default function compareAndAddClass(value, comparisonValue, classGiam, classDefault, classTang) {
    const numValue = parseFloat(value);
    const numComparisonValue = parseFloat(comparisonValue);

    if (isNaN(numValue) || isNaN(numComparisonValue)) {
        return classDefault;
    }

    if (numValue < numComparisonValue) {
        return classGiam;
    } else if (numValue > numComparisonValue) {
        return classTang;
    } else if (numValue === numComparisonValue) {
        return classDefault;
    }
}
