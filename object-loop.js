let myObject = {
    name:'John Doe',
    age:25,
    city:'Tokyo',
    isStudent: true
};

// const keys = Object.keys(myObject)

for(const prop in myObject)

console.log(`key:${prop} | type: ${typeof myObject[prop]}`)