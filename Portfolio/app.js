



document.onreadystatechange = function() {
    const navbar = document.querySelector('.navbar');
   
    var oldScrollY = window.scrollY;

    window.onscroll = function(e) {
        console.log(oldScrollY);
        if(oldScrollY < window.scrollY){
            navbar.classList.add('navbar-dark');
                navbar.style.display="none"
        } else {
           navbar.style.display="flex"
        }
        oldScrollY = window.scrollY;
      }
    }