const nav = document.getElementById("topNav");
      window.onscroll = function () {
        if (window.pageYOffset > 100) {
          nav.classList.add("sticky")
        } else {
          nav.classList.remove("sticky");
        }
      }