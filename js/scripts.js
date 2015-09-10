var wordOrder = function(phrase) {
  var phraseArray = phrase.toLowerCase().split(" ");
  var wordHash = {}
  var wordCount = 0;

  for(var i = 0; i < phraseArray.length; i+=1) {
    var word = phraseArray[i];
    wordHash[word] = 1;
  };

  phraseArray.forEach(function(word) {
    var index = phraseArray.indexOf(word);
    for(var j = index + 1; j < phraseArray.length; j += 1) {
      if (phraseArray[j] === word) {
        wordHash[word] = 2;
      };
    };
  });

  return wordHash;
};
