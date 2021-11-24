//The first Exersice

showMinSum = () => {
    let argument1 = (prompt('Enter your number'));
    let argument2 = (prompt('Enter your number'));

    if (argument1 < argument2) {
        console.log(argument1)
        alert(argument1)
    } else {
        console.log(argument2)
        alert(argument2)
    }
}

showMinSum()


/// Second exersice
 countChar =  (symbol, word) =>{
    let num = 0
    for (let i = 0; i < word.length; i++) {
        if (symbol === word[i]) {
            num++
        }
    }
    return num
}

console.log(countChar('s', 'abbccssssssssdddd'))

/// Third exersice
let products = [
    {
        productName: 'milk',
        cost: 48
    },
    {
        productName: 'bread',
        cost: 20
    },
    {
        productName: 'egg',
        cost: 11
    },
]
console.log(products)

addProduct= (cookies, candies) =>{

    products.push({
            productname: 'cookies',
            cost: 23
        },
        {
            productname: 'candies',
            cost: 33
        },)

}

addProduct()