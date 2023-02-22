function convertRtoI(x, base) {
    const parsed = parseInt(x, base);
    if (isNaN(parsed))
        return 0;
    return parsed;
}
console.log(convertRtoI('20B', 16));
console.log(convertRtoI('F0', 16));
console.log(convertRtoI('004', 16));
console.log(convertRtoI('46', 10));