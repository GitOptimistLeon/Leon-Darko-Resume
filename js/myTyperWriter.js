// Type Writer script

    // window.onload = function() {
    //   typeWriter()
    // };
    var i = 0;
    var txt = 'Web Developer & Flutter Developer.';
    var speed = 150;

    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("typewrite").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }

// Type Writer script
