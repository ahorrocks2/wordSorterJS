var wordOrder = function(phrase) {
  var phraseArray = phrase.toLowerCase().split(" ");
  var wordHash = {}

  phraseArray.forEach(function(word) {
    wordHash[word] = 1;
    var index = phraseArray.indexOf(word);

    for(var j = index + 1; j < phraseArray.length; j += 1) {
      if ((j === phraseArray.length) && (phraseArray[j] === 1)) {
        wordHash[word] = 1;
      };

      if (phraseArray[j] === word) {
        wordHash[word] += 1;
      };
    };
  });

  return wordHash;
};

$(document).ready(function() {
  $("form").submit(function(event) {
    var phrase = $("#input").val();
    var result = wordOrder(phrase);

    $("#result").text(result);
    $("#result").show();
    event.preventDefault();
  });
});
