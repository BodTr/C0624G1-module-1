const month = prompt('Please enter a month');
const year = prompt('Please enter a year');
const convertToNumb = Number[month]
const thirtyOneDayMonthArr = [1, 3, 5, 7, 8, 10, 12]
// const thirtyDayMonthArr = [4, 6, 9, 11]
if (convertToNumb === 2) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        `Năm ${year} là năm nhuận, tháng nhập là tháng 2`
    } else {
        `Năm ${year} laf năm không nhuận và tháng nhập là tháng 2`
    }
} else if (thirtyOneDayMonthArr.includes(convertToNumb)) {
    `Tháng ${month} có 31 ngày)`
} else {
    `Tháng ${month} có 30 ngày`
}