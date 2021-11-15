//// The first exersice

var array =  [1232, -132, 356, 2123, 2.5, 23, 12] ;
for (var i = 0, sum = 0; i < array.length; sum+=array [i++]);
console.log(sum)
alert(sum)
/// The second exersirce
for (let i = 2; i<100; i++)
    if (i % 2 === 0) {
        console.log(i)

    }
// /// Третье задание
var people = [
    {
        name: 'Adilet',
        salary: 23000
    },
    {
        name: 'Syimyk',
        salary: 59000
    },
    {
        name: 'Meerim',
        salary: 38000
    },
    {
        name: 'Nurdin',
        salary: 15000
    }
]
for (var i = 0; i < people.length; i++) {
    var person = people[i]
    person.salary +- 1000
    // name [3] +- 1000
    if (i===[3])
        person.salary += 1000
    console.log(person.salary)
}
//// The 4-th exersirce
for (var i = 0; i < people.length; i++){
    var person = people[i]
    if (person.salary <= 20000){
        person.level = 'Junior'
    }else if (person.salary <=50000)
        person.level = 'Middle'

    else {
        person.level = 'Senior'
    }
}
console.log(people)