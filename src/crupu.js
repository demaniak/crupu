(function () {
  document.addEventListener("DOMContentLoaded", function(event) {
    var yearElements = document.getElementsByClassName('crupu.year'),
    i =0,
    fullYear = new Date ().getFullYear();

    for (i = 0; i < yearElements.length; i++) {
      yearElements[i].innerHTML = fullYear;
    }
  });

})();
