

document.getElementById('index-text-selected').style.animationIterationCount = 'initial';
var indexTextsData = "";
fetch("json\\main-texts.json")
  .then((res) => res.text())
  .then((text) => {
    indexTextsData = text;
    indexTxts = JSON.parse(indexTextsData);
    document.getElementById('index-text').innerHTML = indexTxts[0]["text"];
   })
  .catch((e) => console.error(e));


function changeIdxText(index){
    document.getElementById("navbar").className = "navbar sticky-top navbar-expand-lg navbar-dark stopped";
    document.getElementById('index-text-selected').className = "navbar-brand navbar-dark stopped";
    document.getElementById('index-text').className = "card-text container-fluid stopped";
    document.getElementById('bottom-menu').className = "container-fluid stopped";
    document.getElementById('front-img').className = "card-img stopped";
    for (var i = 0; i < 1; i++) {
        
        if (index != i) {
            document.getElementById(`btn-index-text-${i}`).className = "nav-link";
        }
        else {
            document.getElementById(`btn-index-text-${i}`).className = "nav-link active";
        }
    }
    fetch("json\\main-texts.json")
  .then((res) => res.text())
  .then((text) => {
    indexTextsData = text;
    indexTxts = JSON.parse(indexTextsData);
    document.getElementById("index-text").innerHTML = indexTxts[index]["text"];
    document.getElementById("front-img").src = indexTxts[index]["img"];

    document.getElementById("index-text-selected").innerHTML = indexTxts[index]["title"];
    

    setTimeout(() => {
      document.getElementById('index-text-selected').className = "navbar-brand navbar-dark fadeIn";
      document.getElementById("navbar").className = "navbar sticky-top navbar-expand-lg navbar-dark fadeInDown";
      document.getElementById('index-text').className = "card-text container-fluid tracking-in-expand";
      document.getElementById('bottom-menu').className = "container-fluid fadeInDownBig";
      document.getElementById('front-img').className = "card-img fadeInUpA";
    }, 5);
  } )
  .catch((e) => console.error(e));
    };


