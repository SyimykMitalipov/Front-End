

let employes = [
    {
        name: 'Nazira',
        salary: 34600
    },
    {
        name: 'Meerim',
        salary: 38000
    },
    {
        name: 'Firdavs',
        salary: 47263
    },
    {
        name: 'Nurdin',
        salary: 15000
    },
    {
        name: 'Temirlan',
        salary: 58456
    },
    {
        name: 'Semen',
        salary: 56654
    },
    {
        name: 'Syimyk',
        salary: 76543
    },
    {
        name: 'Luisa',
        salary: 59452
    },
    {
        name: 'Kutman',
        salary: 63213
    },
    {
        name: 'Luisa',
        salary: 59452
    },
    {
        name: 'Chyngyzhan',
        salary: 23459
    },
    {
        name: 'Aliya',
        salary: 45697
    }
]

let  s =0;

/// The first exersice

let checkName = employes.filter((letter) => letter.name[0] === 'S')
console.log(checkName)




// The second exersice

const somDollar = employes.map((whoPeople) => {
    whoPeople.salary = Math.floor(whoPeople.salary / 84)
    return whoPeople
})
console.log(somDollar)


// THe threeth exersic

const summSalary = employes.reduce((summ, person) => {
    return summ + person.salary
},0)

console.log(summSalary)











