export function readableNum(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}