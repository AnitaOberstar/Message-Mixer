// Import the encryptors functions
const {caesarCipher, symbolCipher, reverseCipher} = require('./encryptors.js');

const encodeMessage = (str) => {
  // Use the encryptor functions here.
  result = caesarCipher(str, 4);
  result = reverseCipher(result);
  result = symbolCipher(result);
  return result;
}

const decodeMessage = (str) => {
  // Use the encryptor functions here.
  result = symbolCipher(str);
  result = reverseCipher(result);
  result = caesarCipher(result, -4);
  return result;
}

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === 'encode') {
    output = encodeMessage(str);
  } 
  if (process.argv[2] === 'decode') {
    output = decodeMessage(str);
  } 
  
  process.stdout.write(output + '\n');
  process.exit();
}

// Run the program.
process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', handleInput);