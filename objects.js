let person = {
    name: 'James',
    age: 30,
    city: 'Lake Worth',
    inClass: true
}

person.hasGlasses = true; //how to add a new property
console.log(person);

person.age = 21; //how to change a property
console.log(person);

// how to destructuring an object
// let {name, age} = person
// console.log(name)
// console.log(age)

// console.log(person.name)

// how to change something in an object
// person.name = "Matt"
// console.log(person.name)

// //how to delete something from an object
// delete person.name
// console.log(person)



// const allProps = Object.keys(person)
// console.log(allProps)

// //this is a way to check if there is a certain property inside an array
// // the != or > -1 is necessary to return a boolean
// const hasAge = allProps.indexOf('age') != -1
// console.log(hasAge)