describe('wordOrder', function() {
  it('return the count of one word', function() {
    expect(wordOrder("phoenix")).to.eql({'phoenix': 1});
  });

  it('return the count of each entered word in a sentence', function() {
    expect(wordOrder("this is a phoenix")).to.eql({'this': 1, 'is': 1, 'a': 1, 'phoenix': 1});
  });
});
