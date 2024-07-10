let browser = prompt('Enter browser name!')

// Bài 1:

switch(browser) {
    case 'Edge':
        alert("You've got the Edge!");
        break;
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert('Okay we support these browsers too');
        break;
    default:
        alert('We hope that this page look ok!');
}

// Bài 2:

let a = +prompt('a?', '');
switch (a) {
    case 0 :
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
}

// Bài 3:

// let value = prompt('Type a number', 0)
// if (value > 0) {
//     alert(1);
// } else if (value < 0) {
//     alert(-1);
// } else {
//     alert(0);
// }

let value1 = prompt('Type a number', 0)
let isGreaterThan0 = value1 > 0
switch (isGreaterThan0) {
    case true:
        alert(1);
        break;
    case false:
        if (value1 == 0) {
            alert(0);
        } else {
            alert(-1)
        }
        break
}