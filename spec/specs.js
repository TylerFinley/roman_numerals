describe('romanNumeral', function() {
  it('it will change the integer 2 to II', function() {
      expect(romanNumeral(2)).to.equal("II");
  });

  it('it will change the integer 5 to V', function() {
      expect(romanNumeral(5)).to.equal("V");
  });

  it('it will change the integer 10 to X', function() {
      expect(romanNumeral(10)).to.equal("X");
  });

  it('it wil change the interger 19 to XIX', function() {
      expect(romanNumeral(19)).to.equal("XIX");
  });
});
