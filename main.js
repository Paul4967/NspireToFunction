
function convertStringToVariables() {
  const _inputString = document.getElementById('inputString').value;

  // Unicode minus sign (U+2212)
  const unicodeMinus = '−';
  // ASCII hyphen-minus (U+002D)
  const asciiMinus = '-';

  const inputString = _inputString.split(unicodeMinus).join(asciiMinus);

  // Split the string by " and " to get each key=value pair
  const keyValuePairs = inputString.split(" and ");

  // Create an empty object to store the key-value pairs
  const variables = {};

  // Loop through each key=value pair
  keyValuePairs.forEach(pair => {
  // Split each pair by '=' to separate the key and value
  const [key, value] = pair.split('=');
  // Convert the value to a number and assign it to the corresponding key in the variables object
  variables[key] = value;
});






const numberOfDefinedVariables = keyValuePairs.length;
console.log("Number of defined variables:", numberOfDefinedVariables);



// Destructure the variables object to create individual variables
const { a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z } = variables;

console.log(a);
console.log(b);
console.log(c);





function generateFunctionString(numberOfVariables) {
    const variables = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];
    let functionString = '';
  
    for (let i = 0; i < numberOfVariables; i++) {
      const variable = variables[i];
      const exponent = numberOfVariables - 1 - i;
      
      if (i > 0) {
        functionString += '+';
      }
  
      if (exponent > 1) {
        functionString += `${variable}*x^${exponent}`;
      } else if (exponent === 1) {
        functionString += `${variable}*x`;
      } else {
        functionString += `${variable}`;
      }
    }
  
    const functionElement = document.getElementById('function');
    functionElement.textContent = functionString;
    return functionString;
  }

  // Generate and print the function string based on numberOfDefinedVariables
  const functionString = generateFunctionString(numberOfDefinedVariables);
  console.log("Generated function:", functionString);

};


