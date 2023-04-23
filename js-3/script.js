//task 1
let password = String(prompt('Введите пароль'));
if (password === 'skypro') {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

//task 2
let c = Number(2);
if (c>0 && c<10) {
    console.log ('Верно');
} else {
    console.log ('Неверно');
}

//task 3
let d = Number(10);
let e = Number(9);
if (d>100 || e>100) {
    console.log ('Верно')
} else {
    console.log ('Неверно');
}