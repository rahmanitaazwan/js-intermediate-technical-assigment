function getObjectValue(obj, path, delimiter = ".") {
  const paths = path.split(delimiter);
  const result = paths.reduce(function(acc, curr) {
    if (acc === null) {
      return null;
    }
    const activeObj = acc[curr];
    if (activeObj !== undefined) {
      return activeObj;
    }
    return null;
  }, obj);
  return result;
}

function getObjectValue2(obj, path) {
  const paths = path.split("."); // ['ingredients', 'espresso', 'origin']
  let result = obj;
  for (let i = 0; i < paths.length; i++) {
    if (result === null) {
      break;
    }
    const activeVal = paths[i];
    const activeObj = result[activeVal]; // mengambil nilai property dari object
    if (activeObj !== undefined) {
      result = activeObj;
    } else {
      result = null;
    }
  }
  return result;
}

const milkBasedCoffee = {
  name: "latte",
  ingredients: {
    espresso: {
      origin: "lampung",
      roastProfile: "medium to dark",
      ratio: 1
    },
    milk: {
      brand: "susu murni",
      isVegan: false,
      ratio: 5
    }
  },
}

const espresso = getObjectValue2(milkBasedCoffee, "ingredients.espresso.origin");
const coffeeBrand = getObjectValue2(milkBasedCoffee, "ingredients.espresso.brand");
const isMilkVegan = getObjectValue2(milkBasedCoffee, "ingredients.milk.isVegan");
const fooBar = getObjectValue2(milkBasedCoffee, "foo.bar");

console.log(espresso);
console.log(coffeeBrand);
console.log(isMilkVegan);
console.log(fooBar);
