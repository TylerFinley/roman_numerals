var romanNumeral = function(remainder) {

  var numerals = []
  var counter = 0;
  while (remainder >= 1000) {
    remainder -= 1000
    numerals.push("M");
  }
  while (remainder >= 500 && remainder < 1000) {
    remainder -= 500
    numerals.push("D");
  }
  while (remainder >= 100 && remainder < 500) {
    remainder -= 100
    numerals.push("C");
  }
  while (remainder >= 50 && remainder < 100) {
    remainder -= 50
    numerals.push("L");

  }
  while (remainder >= 10 && remainder < 50) {
    remainder -= 10
    numerals.push("X");

  }
  while (remainder >= 5 && remainder < 10) {
    remainder -= 5
    numerals.push("V");

  }
  while (remainder >= 1 && remainder < 5) {
    remainder -= 1
    numerals.push("I");


  }
 numerals = numerals.join('');

 numerals = numerals.replace("DCCCC", "CM");
 numerals = numerals.replace("CCCC", "CD");
 numerals = numerals.replace("LXXXX", "XC");
 numerals = numerals.replace("XXXX", "XL");
 numerals = numerals.replace("VIIII","IX");
 numerals = numerals.replace("IIII","IV");

  return numerals;
}

$(document).ready(function() {
  $("form#roman-numerals").submit(function(event) {
    var number = parseInt($("input#number").val());
    var result = romanNumeral(number);

    $("#roman").text("")
    $("#roman").text(result)
    event.preventDefault();
  })
});
