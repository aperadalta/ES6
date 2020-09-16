var multiply = `function multiply(num1, num2) {
    return num1 * num2;
 }`

var multiply2 = `const multiply = (num1, num2) => num1*num2;`
export {multiply, multiply2};
 
 //_____________________________________________________________________________________
 var toCelcius = `function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
 }`

 // answer
 var toCelcius2 = `const toCelsius = fahrenheit => (5/9)*(fahrenheit-32);`
 export {toCelcius, toCelcius2};



 //_____________________________________________________________________________________
 var padZeros = `function padZeros(num, totalLen) {
    var numStr = num.toString();
    var numZeros = totalLen - numStr.length;
    for (var i = 1; i <= numZeros; i++) {
       numStr="0" + numStr; 
       } 
    return numStr;
  } `

  // answer
  var padZeros2 = `const padZeros = (num, totalLen) =>{
    var numStr = num.toString();
    var numZeros = totalLen - numStr.length;
    for (var i = 1; i <= numZeros; i++) {
       numStr="0" + numStr; 
       } 
    return numStr;
  }`
  export {padZeros, padZeros2};


  
//_____________________________________________________________________________________
 var power = `function power(base, exponent) { 
    var result=1; 
    for (var i=0; i < exponent; i++) { 
          result *=base; 
    } 
    return result;
 } `;

 //answer
 var power2 = `(base, exponent) => {
    var result=1; 
    for (var i=0; i < exponent; i++) { 
          result *=base; 
    } 
    return result;
 }`;
 
 export {power, power2};

//_____________________________________________________________________________________
 var greet = `function greet(who) {
     console.log("Hello " + who);
 }`;

 //answer
 var greet2 = "const greet = who => console.log(`Hello ${who}`);";

 export {greet, greet2};