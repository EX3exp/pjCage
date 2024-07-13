document.addEventListener("click", function(event) {
    var targetElement = event.target;

    if (!targetElement.classList.contains("navbar-toggler")) {
      var navbarCollapse = document.querySelector(".navbar-collapse");
        if (navbarCollapse.classList.contains("show")) {
          navbarCollapse.classList.remove("show");
          setTimeout(() => {
            document.getElementById("navtogglecontainer").className = "container-fluid justify-content-center fadeOut";
          }, 1.0);
          
          
        }
      }
    });