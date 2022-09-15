// 1-length -----

const sampleName = "length";
const number = sampleName.length;
console.log(number);

// 2-slice -----

const slice = sampleName.slice(0, 3);
console.log(slice);

// 3-substring -----

const substring = sampleName.substring(1, 3);
console.log(substring);

//4-substr ----
const substr = sampleName.substr(1, 3);
console.log(substr);

//5-replace ----

const replace = sampleName.replace("length", "only-name");
console.log(replace);

//6-toUpperCase ----

console.log(sampleName.toUpperCase());

//7-toLowerCase ----

console.log(sampleName.toLowerCase());

//8-trim ----
const trimMethod = "      lorem     ";
console.log(trimMethod.trim(" "));

//9-trimStart ----

console.log(trimMethod.trimStart(" "));

//10-trimEnd ----

console.log(trimMethod.trimEnd(" "));
//11-padStart ----
const str2 = "A Hungry Man ";
console.log(str2.padEnd(20, "."));

//12-padEnd ----
const str1 = "09121234567";
const slicedstr1 = str1.slice(0, 7);
console.log(slicedstr1.padEnd(str1.length, "*"));

//13-startsWith ----
const var1 = "Hello World!";
console.log(var1.startsWith("W", 6));

//14-endsWith ----

console.log(var1.endsWith("!"));

//15-includes ----

const var2 = "this is a sample sentence";

console.log(var2.includes("a", 11));

//16-indexOf ----

console.log(var2.indexOf("a", 9));

//17-lastIndexOf ----

console.log(var2.lastIndexOf("a"));

//18-Repeat ----

console.log(var2.repeat(4));

//19-split ----
const var3 = "Hello how are you today?";
console.log(var3.split(" "));
