
  var myVar;

  function myFunctionLoader() {
      myVar = setTimeout(showPage, 6000);
  }

  function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
  }
