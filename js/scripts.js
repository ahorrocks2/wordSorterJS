var wordOrder = function(phrase) {
  var phraseArray = phrase.toLowerCase().split(" ");
  var wordHash = {}
  var wordCount = 0;

  for(var i = 0; i < phraseArray.length; i+=1) {
    var word = phraseArray[i];
    wordHash[word] = 1;
  };

  return wordHash;
};
