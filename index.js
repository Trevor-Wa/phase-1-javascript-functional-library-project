function myEach(collection, callback) {
    for (let element in collection) {
        callback(collection[element])
    }
    return collection;
}

function myMap(collection, callback) {
    let newCollection = []
    for (let element in collection) {
        newCollection.push(callback(collection[element]))
    }
    return newCollection
}

function myReduce(collection, callback, acc) {
    let copy = [...collection]
    acc = acc|| copy.shift();
    for (let accessor in copy) {
        acc = callback(acc,copy[accessor],copy) 
    }
        return acc;
}

function myFind(collection, callback) {
    for (let element in collection) {
        let number = collection[element]
        if (callback(number)) {
            return number
        }
    }
}

function myFilter(collection, callback) {
    let newCollection = []

    for (let element in collection) {
        let number = collection[element];
        if (callback(number)) {
            newCollection.push(number)
        }
    }
    return newCollection
}

function mySize(collection) {
    return Object.keys(collection).length
}

function myFirst(collection, n = 1) {
    let count = 1;
    let newArray = [];

    for (let element in collection) {
        if (count <= n) {
            newArray.push(collection[element])
            count++
        }
    }
    return newArray.length > 1 ? newArray : newArray[0]
}

function myLast(collection, n = 1){
   let startingIndex = collection.length - n;

   return n > 1 ? collection.slice(startingIndex, collection.length) : collection[startingIndex];
}

function myKeys(collection) {
    return Object.keys(collection)
}

function myValues(collection) {
    return Object.values(collection)
}