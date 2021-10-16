// Execute file with node array.js

// In javascript we do not have to declare primitive data types 
// we can store any data type in our variable.
const sneakers = [1,2,3,4,5,6,7,8,9];

const getSneakers = () => {
    console.log("Item in index 2 of the sneakers collection is " + sneakers[2])
    console.log("The original array elements are :")

    for(i = 0; i < 5; i++) {
        //console.log("Sneaker" + "["+ sneakers.findIndex(sneaker => sneaker > i) + "] = " + sneakers[i])
        sneakerCollection = sneakers[i]
        console.log("Sneaker" + "["+ sneakers.findIndex(sneaker => sneaker > i) + "] = " + sneakerCollection)

    }
};

getSneakers();