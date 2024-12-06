function getDaysInMonth(month) {
    const currentYear = new Date().getFullYear();
    let days;

    const isLeapYear = (currentYear % 4 === 0 && (currentYear % 100 !== 0 || currentYear % 400 === 0));

    switch (month.toLowerCase()) {
        case 'january':
            days = 31;
            break;
        case 'february':
            days = isLeapYear ? 29 : 28;
            break;
        case 'march':
            days = 31;
            break;
        case 'april':
            days = 30;
            break;
        case 'may':
            days = 31;
            break;
        case 'june':
            days = 30;
            break;
        case 'july':
            days = 31;
            break;
        case 'august':
            days = 31;
            break;
        case 'september':
            days = 30;
            break;
        case 'october':
            days = 31;
            break;
        case 'november':
            days = 30;
            break;
        case 'december':
            days = 31;
            break;
        default:
            return 'Invalid month';
    }

    return days;
}

console.log(getDaysInMonth('February')); 
console.log(getDaysInMonth('April'));