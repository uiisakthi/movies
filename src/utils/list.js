export function range(number) {
    return [...Array(number).keys()];
}

export function pageSlice(arr, pageSize, pageNumber) {
    const startIndex = pageNumber * pageSize;
    const endIndex = (pageNumber + 1) * pageSize;
    return arr.slice(startIndex, endIndex);
}