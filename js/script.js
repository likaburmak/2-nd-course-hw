//task 1

let a = 10;
alert(a);
a = 20;
alert(a);

//task 2

const yearProductionFirstIphone = 2007;
// yearProductionFirstIphone=prompt (‘Год выпуска первого iPhone?’);
alert(yearProductionFirstIphone);

//task 3
const nameCreatorJavaScript = "Брендан Эйх";
// nameCreatorJavaScript  = prompt (‘Имя создателя языка JavaScript?’);
alert(nameCreatorJavaScript);

//task 4
let x = Number(10);
let y = Number(2);
alert(x + y);
alert(x - y);
alert(x * y);
alert(x / y);

//task 5

let result = 2 ** 5;
alert(result);

//task 6

alert(9 % 2);

//task 8

let age = prompt("Сколько вам лет?")
alert(age);

//task 10
let name = prompt("Введите ваше имя?")
alert(`Привет, ${name}!`);

//task 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

//task 9
let user = {
    name: 'Lika',
    age: 30,
    isAdmin: true,
    ['city of residence']: 'Moscow',
}
user.age = 29;
delete user['city of residence'];
let info = prompt("Какую информацию хотите узнать пользователе?")
alert(user[info]);

