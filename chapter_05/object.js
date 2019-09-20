
// objects in JavaScript may be defined as an unordered collection of related data, of primitive or reference types, in the form of “key: value” pairs.

let details = {
    name : 'Alex Aryan',
    profession : 'Engineering',
    email : 'alex@google.com',
    location : 'Bangalore'
};


// Accessing Object property.

console.log(details.name);


// Accessing Object Property.

console.log(details['profession']);

// Accessing Object Property.

details['location'] = 'Bangaluru';

console.log(details.location);


//-------------------------------------------------------------------------------------------------------------------------------------------------------

// method in object as value.

let sum = {
    on1 : 12,
    tw2 : 13,
    // syntax to define method in object.
    out(){
         return this.on1 + this.tw2;
    },

    // syntax to define method in object.
    sumOut : function(){
        return this.on1+this.tw2;
    }
}

// function access of object.
console.log(sum.out());
console.log(sum.sumOut());

