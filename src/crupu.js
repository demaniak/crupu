(function () {

  document.addEventListener("DOMContentLoaded", function(event) {
    var crupuYearElements = document.getElementsByClassName('crupu-year'),
    crupuPreElements = document.getElementsByClassName('crupu-pre'),
    i =0,
    fullYear = new Date ().getFullYear();

    for (i = 0; i < crupuYearElements.length; i++) {
      crupuYearElements[i].innerHTML = fullYear;
    }

    for (i = 0; i < crupuPreElements.length; i++) {
      crupuPreElements[i].innerHTML = 'Copyright &copy;';
    }
  });

})();
