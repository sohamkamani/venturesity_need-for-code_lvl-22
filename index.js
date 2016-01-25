var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var convertToVenturese = function(original) {
  if(!/^[a-zA-Z]+$/.test(original)){
    console.log('Sorry, the input must consist of letters only');
    return rl.close();
  }

  var translatedString = original.replace(/[aeiou]/g, 'v').replace(/[AEIOU]/g, 'V');
  console.log('Translated output : ',translatedString);
  rl.close();
};

rl.question('Please enter input (letters only) : ', convertToVenturese);
