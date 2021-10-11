const person = {
  name: "person A",
  age: 100,
  favDrinks: [
    "coffee", //0
    "jamu temulawak", //1
    "tea"//2
  ],
  greeting: function(nama) {
    return "Hello, " + nama;
  }
}

/// EDIT HERE
// clue: mutate object property value
person["name"] = "Namaku sendiri";
person.favDrinks[1] = "tap water";

/// STOP

console.log(person.name);
console.log(person.age);
console.log(person.favDrinks); // ["coffee", "tap water", "tea"]
console.log(person.greeting("John Watson"));
