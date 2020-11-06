// Sticky Nav Script

    window.onscroll = function() {
      stickyNavFunction()
    };
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    function stickyNavFunction() {
      if (document.body.scrollTop > 685) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }

 // Sticky Nav Script
