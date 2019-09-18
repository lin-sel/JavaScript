
// String value declare in single quates.
let stringDeclaration = 'Declare';
console.log(stringDeclaration);

// concatination of String.
let  sampleString1 = 'Nilesh';
let  sampleString2 = 'Yadav';

let concatinatioResult = sampleString1 + ' ' + sampleString2;
console.log(concatinatioResult);


// getting string character.

// this will print charater at position 2 in sampleString1.
console.log(sampleString1[2],sampleString1[0],sampleString1[6]); 

// String method 

let experimentalVariable = "Sample Value for Experiment"

// (1) length ( actually length is property of string not a method.)
console.log(experimentalVariable.length);


// (2) toUpperCase()
console.log(experimentalVariable.toUpperCase());

// (3) toLowerCase()
console.log(experimentalVariable.toLowerCase());

// (4) indexOf()
let index = experimentalVariable.indexOf('f');
console.log(index);

// (5) LastindexOf()
let lastIndex = experimentalVariable.lastIndexOf('m');
console.log(lastIndex);

// (6) slice()
let sliceExample = experimentalVariable.slice(0,10);
console.log(sliceExample);

// (7) substr()
let subString = experimentalVariable.substr(4,5);
console.log(subString);

// (8) replace
let replaceFirstcharater = experimentalVariable.replace("m","t");
console.log(replaceFirstcharater);

// (9) search()
let searchingCharacter = experimentalVariable.search("m");
console.log(searchingCharacter);

// (10) charAt()
let getcharacterAt = experimentalVariable.charAt(7);
console.log(getcharacterAt);


// (11) split()
let splitSample = "Hey, I am JavaScript Developer."
let res = splitSample.split(" ");
console.log(res);


// String Template
let sample1 = "Alex";
let sample2 = "Software Engineer";

let outPut = `${sample1} is ${sample2}`;
console.log(outPut);

// Making Html Templates.

let html = `
    <html>
        <head>
            <title>${sample1}</title>
        </head>
        <body>
            <p>${sample2}</p>
        </body>
    </html>
`;

console.log(html);