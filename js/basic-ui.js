// 사이트 전반에서 공통적으로 사용되는 스크립트

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.spinner-container img');
    images.forEach(img => {
      img.addEventListener('load', function() {
        this.previousElementSibling.style.display = 'none'; // Hide spinner
        this.style.display = 'block'; // Show image
      });
      img.src = img.src; // Trigger load event in case image is cached
    });
  });
function mouseleave(id, classname, animation=null, duration=null) {
    console.log(id, "mouseleave");
    document.getElementById(id).className = classname + " stopped";
    if (animation != null && duration != null) {
        setTimeout(() => {
            document.getElementById(id).className = classname + ' ' + animation;
        }, duration);
    }

    if (document.getElementById(id + "-tooltip") != null) {
        document.getElementById(id + "-tooltip").style.visibility = "hidden";
        document.getElementById(id + "-tooltip").style.opacity = 0;
    }
}

function mouseover(id, classname, animation="jello-horizontal", duration=60){
    console.log(id, "mouseover");
    document.getElementById(id).className = classname + " stopped";
    setTimeout(() => {
        
        document.getElementById(id).className = classname + ' ' + animation;
    }, duration);

    if (document.getElementById(id + "-tooltip") != null) {
        document.getElementById(id + "-tooltip").style.visibility = "visible";
        document.getElementById(id + "-tooltip").style.opacity = 1;
    }
}

function animate(id, animation, duration) {
    document.getElementById(id).className = document.getElementById(id).className + " stopped";
    setTimeout(() => {
        
        document.getElementById(id).className = document.getElementById(id).className + ' ' + animation;
    }, duration);
    
}

function mouseleave_player() {
    console.log("play-button", "mouseleave");
    
    setTimeout(() => {
        document.getElementById('play-button').className = 'floating-player stopped';
            document.getElementById('play-button').className = 'floating-player bounce-bottom';
        }, 6);

    var id = "play-button";
    if (document.getElementById(id + "-tooltip") != null) {
        document.getElementById(id + "-tooltip").style.visibility = "hidden";
        document.getElementById(id + "-tooltip").style.opacity = 0;
    }
    

}

function mouseover_player() {
    console.log("play-button", "mouseover");
    
    setTimeout(() => {
        document.getElementById('play-button').className = 'floating-player stopped';
        document.getElementById('play-button').className = 'floating-player jello-horizontal';
        }, 6);
    
    var id = "play-button";
    
    if (document.getElementById(id + "-tooltip") != null) {
        document.getElementById(id + "-tooltip").style.visibility = "visible";
        document.getElementById(id + "-tooltip").style.opacity = 1;
    }
    
}

function mouseignore(id="") {
    console.log(id, "mouseover ignored");
}