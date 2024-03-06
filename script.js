function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length); // Generate random index within the range of characters
    result += characters[randomIndex]; // Use the random index to select a character
  }
  
  return result;
}

// Example usage:
const randomString = generateRandomString(10);
console.log(randomString); // Output will be a random string of length 10


// Do not change the code below.
const length = prompt("Enter a number.");
 
alert(generateRandomString(length));
