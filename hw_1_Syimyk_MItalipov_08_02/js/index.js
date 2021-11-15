// Первое задание
let username = prompt('Your Name');
console.log(username);

alert(`Hello! ${username}`);

// Второе задание

number1 = prompt('Введите какое нибудь чило)')
number2 = prompt('Введите какое нибудь число ещё раз)')
if (number1 < number2) {
    alert('Первое число меньше втрого');
} else if (number1 > number2) {
    alert('Первое число больше второго')
} else {
    alert('Первое и второе число равны')
}
// Третье задание

age = prompt('Введите ваш возраст')
if (age < 16) {
    alert('Ты школьник!Доступ для тебя закрыт!')
} else if (age > 16 && age <= 18) {
    alert('Ты либо школьник,либо студент!Мы еще подумаем!')
} else {
    alert('Ты либо студент, либо работаешь.Мы сможем открыть тебе доступ без проблем!')
}


