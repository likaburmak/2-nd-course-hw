//task 1
let password = String(prompt('Введите пароль'));
if (password === 'skypro') {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

//task 2
let c = Number(2);
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//task 3
let d = Number(10);
let e = Number(9);
if (d > 100 || e > 100) {
    console.log('Верно')
} else {
    console.log('Неверно');
}
//task 4
let a = '2';
let b = '3';
alert(Number(2) + Number(3));

//task 5
let monthNumber = Number(prompt('Введите номер месяца'));
switch (monthNumber) {
    case 12: case 1: case 2:
        console.log('Зима')
        break;
    case 3: case 4: case 5:
        console.log('Весна')
        break;
    case 6: case 7: case 8:
        console.log('Лето')
        break;
    case 9: case 10: case 11:
        console.log('Осень')
        break;
    default: console.log('Такого месяца не существует')
        break;
}
