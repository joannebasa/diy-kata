const booleanToWord = boolean => {
// it has to be either true or false
// if true, say "it's true!"
// if false, "it's false!"
  if (boolean = true) {
    return "it's true!";
  } else {
    return "it's false!";
  };
};

// to check:
//console.log (booleanToWord("2" === 2)); //this is false
module.exports = booleanToWord;