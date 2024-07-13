var offset = 0;
var info_idx = 0;
var characterTxts;

const max_idx = 10;
const min_idx = 0;
const maxOffset = 8;
const minOffset = 0;
fetch("json\\characters.json")
        .then((res) => res.text())
        .then((text) => {
        let characterTextsData = text;
        characterTxts = JSON.parse(characterTextsData);
    })
    .catch((e) => console.error(e));

function preloading (imageArray) {
    let n = imageArray.length;
    for (let i = 0; i < n; i++) {
        let img = new Image();
        img.src = imageArray[i];
    }
}

preloading([
    characterTxts[offset]["img"],
    characterTxts[offset]["img"].split(".")[0] + "_hover.png",
    characterTxts[offset+1]["img"],
    characterTxts[offset+1]["img"].split(".")[0] + "_hover.png",
    characterTxts[offset+2]["img"],
    characterTxts[offset+2]["img"].split(".")[0] + "_hover.png",
    characterTxts[offset+3]["img"],
    characterTxts[offset+3]["img"].split(".")[0] + "_hover.png",
    characterTxts[offset+4]["img"],
    characterTxts[offset+4]["img"].split(".")[0] + "_hover.png",
    characterTxts[offset+5]["img"],
    characterTxts[offset+5]["img"].split(".")[0] + "_hover.png",
    characterTxts[offset+6]["img"],
    characterTxts[offset+6]["img"].split(".")[0] + "_hover.png",
    characterTxts[offset+7]["img"],
    characterTxts[offset+7]["img"].split(".")[0] + "_hover.png",
    characterTxts[offset+8]["img"],
    characterTxts[offset+8]["img"].split(".")[0] + "_hover.png",
    characterTxts[offset+9]["img"],
    characterTxts[offset+9]["img"].split(".")[0] + "_hover.png",
    characterTxts[offset+10]["img"],
    characterTxts[offset+10]["img"].split(".")[0] + "_hover.png"
])



function mouseover_character(idx) {
    console.log("mouseover_character");
    document.getElementById("characters").className = "bg-dark text-light stopped";
    document.getElementById("character-container").className = "text-light stopped";
    document.getElementById("left-button-character").style.backgroundColor = "#f1ebeb";
    document.getElementById("left-button-character").style.color = "#1f155c";
    document.getElementById("right-button-character").style.backgroundColor = "#f1ebeb";
    document.getElementById("right-button-character").style.color = "#1f155c";
    document.getElementById(`button-character-${idx}`).className = "stopped";
    
   
    
    for (let i = 0; i < 3; i++) {
        if (i != idx) {
            document.getElementById(`button-character-${i}`).src = "img/closed.png";
        }
    }
    document.getElementById(`button-character-${idx}`).src = characterTxts[offset+idx]["img"].split(".")[0] + "_hover.png";
    
    document.getElementById("word-character").innerText = '"' + characterTxts[offset+idx]["word"] + '"';
    document.getElementById("title-character").innerText = characterTxts[offset+idx]["ko"];

    setTimeout(() => {
        document.getElementById("word-character").className = "blink-1";
        document.getElementById(`button-character-${idx}`).className = "fadeOutButton";
        document.getElementById("title-character").className = "tracking-in-expand";
    }, 100);
}

function mouseleave_character(idx) {
    console.log("mouseleave_character");
    document.getElementById("characters").className = "bg-light text-dark stopped";
    document.getElementById("left-button-character").style.backgroundColor = "#191918cc";
    document.getElementById("left-button-character").style.color = "#f1f91b";
    document.getElementById("character-container").className = "text-dark stopped";
    document.getElementById("right-button-character").style.backgroundColor = "#191918cc";
    document.getElementById("right-button-character").style.color = "#f1f91b";
    document.getElementById(`button-character-${idx}`).className = "stopped";
    document.getElementById(`button-character-${idx}`).src = characterTxts[offset+idx]["img"];
    document.getElementById("title-character").innerText = "Characters";
    document.getElementById("word-character").innerText = "\"……\"\n\n";


    for (let i = 0; i < 3; i++) {
        if (i != idx) {
            document.getElementById(`button-character-${i}`).src = characterTxts[offset+i]["img"];
        }
    }

    setTimeout(() => {
        document.getElementById("word-character").className = "fadeIn";
        document.getElementById(`button-character-${idx}`).className = "fadeInButton";
    }, 50);
}



function scrollCarouselInfo(direction) {
    console.log("scrollCarouselInfo");
    document.getElementById("character-container").className = "container stopped";
    if (isShowingProfile) {
        toCharacterProfile();
    }
    let classNameCarouselInfo = "";
    if (direction == 'left') {
        classNameCarouselInfo = "character-carousel moveLeft";
        if (info_idx > min_idx) {
            if (info_idx == max_idx) {
                document.getElementById("right-button-character-info").style.visibility = "visible";
            }
            info_idx -= 1;
            if (info_idx == min_idx) {
                document.getElementById("left-button-character-info").style.visibility = "hidden";
            }
        }
    }
    else if (direction == 'right') {
        classNameCarouselInfo = "character-carousel moveRight";
        if (info_idx < max_idx) {
            if (info_idx == min_idx) {
                document.getElementById("left-button-character-info").style.visibility = "visible";
            }
            info_idx += 1;
            if (info_idx == max_idx) {
                document.getElementById("right-button-character-info").style.visibility = "hidden";
            }
        }
        else {
            
        }
    }
    else{
        console.log('Invalid direction');
    }

    
    setTimeout(() => {
        document.getElementById("character-container").className = classNameCarouselInfo;
    }, 2);
    showCharacters();
    
   
}

function scrollCarousel(direction) {
    document.getElementById('button-character-2').src = "img/closed.png";
    document.getElementById('button-character-1').src = "img/closed.png";
    document.getElementById('button-character-0').src = "img/closed.png";
    console.log("scrollCarousel");
    document.getElementById("characterCarousel").className = "character-carousel stopped";
    var classNameCarousel = "";
    if (direction == 'left') {
        
        classNameCarousel = "character-carousel moveLeft";
        if (offset > minOffset) {
            if (offset == maxOffset) {
                document.getElementById("right-button-character").style.visibility = "visible";
            }
            offset -= 1;
            if (offset == minOffset) {
                document.getElementById("left-button-character").style.visibility = "hidden";
            }
        }


    }
    else if (direction == 'right') {
        classNameCarousel = "character-carousel moveRight";
        
        if (offset < maxOffset) {
            if (offset == minOffset) {
                document.getElementById("left-button-character").style.visibility = "visible";
            }
            offset += 1;
            if (offset == maxOffset) {
                document.getElementById("right-button-character").style.visibility = "hidden";
            }

            
            
            
        }
        else {
            
        }
    }
    else{
        console.log('Invalid direction');
    }
    
    
    setTimeout(() => {
        document.getElementById('button-character-2').src = characterTxts[offset + 2]["img"];
        document.getElementById('button-character-1').src = characterTxts[offset + 1]["img"];
        document.getElementById('button-character-0').src = characterTxts[offset]["img"];
    }, 0.1);
    setTimeout(() => {
        document.getElementById("characterCarousel").className = classNameCarousel;
    }, 50);
}

function showCharacterInfo(idx) {
    console.log("showCharacterInfo");
    document.getElementById("characters").className = "bg-light text-dark stopped";
    info_idx = offset + idx;
    showCharacters();
}


function toCharacterPage() {
    console.log("toCharacterPage");
    document.getElementById("characters").className = "bg-light text-dark stopped" ;
    isShowingProfile = false;
    document.getElementById('character-container').innerHTML = `<h2 style="font-size: larger;" id="title-character">Characters</h2>
          <h3 style="font-size:medium; font-family: 'IBM Plex Sans KR'; text-align: center;" id="word-character" class="blink-1"> 손가락을 가져다 대면 무언가 들릴 것 같은데…<br><br></h3>
          <div class="position-relative">
              <button class="carousel-arrow left" id="left-button-character" style="visibility: hidden; user-select: none;" onmouseover="mouseover('left-button-character', 'carousel-arrow left', 'heartbeat', 10)" onclick="scrollCarousel('left')"  onmouseleave="mouseleave('left-button-character', 'carousel-arrow left')" >&#8249;</button>
              <div class="character-carousel" id="characterCarousel" style="user-select:none;">
                  <img src="img/jose.png"  class="card-img fadeIn" onmouseover="mouseover_character(0)" onmouseleave="mouseleave_character(0)" id="button-character-0" style="width: 30%; height: auto; user-select: none;" alt="Character 1" onclick="showCharacterInfo(0)">
                  <img src="img/D.png" class="card-img fadeIn" onmouseover="mouseover_character(1)" onmouseleave="mouseleave_character(1)" id="button-character-1" style="width: 30%; height: auto; user-select: none;" alt="Character 2" onclick="showCharacterInfo(1)">
                  <img src="img/N.png" class="card-img fadeIn" onmouseover="mouseover_character(2)" onmouseleave="mouseleave_character(2)" id="button-character-2" style="width: 30%; height: auto; user-select: none;" alt="Character 4" onclick="showCharacterInfo(2)">
                </div>
              <button class="carousel-arrow right" id="right-button-character" style="user-select:none;"  onmouseover="mouseover('right-button-character', 'carousel-arrow right', 'heartbeat', 10)" onmouseleave="mouseleave('right-button-character', 'carousel-arrow right')"  onclick="scrollCarousel('right')">&#8250;</button>
          </div>`;

    let offset_t = offset;
    offset = 0;

    

    for (let i = 0; i < offset_t; i++) {
        scrollCarousel('right');
    }
    
    
}





function showCharacters() {
    console.log("showCharacters");
    var left_visible_html = "visible";
    var right_visible_html = "visible";
    setTimeout(() => {
        document.getElementById("character-container").className = "text-dark moveRight";
    }, 2);
        if (info_idx == min_idx) {
        left_visible_html = "hidden";
    }
    if (info_idx == max_idx) {
        right_visible_html = "hidden";
    }

    document.getElementById('character-container').innerHTML = `
    <div class="position-relative">
        <button class="carousel-arrow left " id="left-button-character-info" style="visibility: ${left_visible_html}; user-select: none;" onmouseover="mouseover('left-button-character-info', 'carousel-arrow left', 'heartbeat', 10)" onclick="scrollCarouselInfo('left')"  onmouseleave="mouseleave('left-button-character-info', 'carousel-arrow left')" >&#8249;</button>
        <div class="container-fluid">

            <div class="row">
                <div class="col-md-4" >
                 <div class="col-md-4">

                                <button type="button" id="backbtn" class="btn bounce-bottom" style="font-size:larger; background-color: #23e9c5db; color: #051005cd; " onclick="toCharacterPage()" onmouseover="mouseover('backbtn', 'btn')" onmouseleave="mouseleave('backbtn', 'btn')"> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="90" height="30" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
  <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
</svg>

</button><span class="tooltiptext" id="backbtn-tooltip">목록으로!</span>
                            </div>
                    <div id="characterCarousel" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" >
                                <img src="${characterTxts[info_idx]["img"]}" id="info-character-0" class="card-img"  style="margin-right:25px;" alt="Character 1">
                           
                                </div>
                            
                        </div>

                    </div>
                    
                </div>
                <div class="col-md-7 character-info" style="z-index: 1400; margin-left:25px;">
                    <h2 style="font-size: larger; text-align: start;" id="title-character" class="fadeIn">${characterTxts[info_idx]["ko"]}  <span style="font-size: 12pt; font-family: 'Grandiflora One'; margin-right: 25px; margin-left: 25px; ">${characterTxts[info_idx]["en"]} <div class="col-md-12" style="margin-left:70%; margin-right:25px;">
                <button type="button" id="profilebtn" class=btn blink-1"  style="font-size:larger; text-align: start; background-color: #789fe7; color: #f1f91b; " onclick="toCharacterProfile()" onmouseover="mouseover('profilebtn', 'btn')" onmouseleave="mouseleave('profilebtn', 'btn')"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
</svg></button><span class="tooltiptext" id="profilebtn-tooltip">프로필로!</span>
                            </div></span></h2> 
                <div id="info_body" style="z-index:-500; margin-right:35px;">
                    <table class="character-table table table scale-up-hor-left text-dark" style="margin-top: 0; margin-bottom: 0;" >
                        <tbody>
                            
                            <tr>
                                <th style="font-size: 13pt; font-weight:100;font-family: 'Do Hyeon'; text-align: start;" > </th>
                                <td> <p class="fadeInUpB" style="font-size: 9pt; font-family: 'IBM Plex Sans KR'; text-align: start;"> &nbsp;${characterTxts[info_idx]["text-sub"]}<br><br></p>
                    <p style="font-size: 11pt; font-family: 'IBM Plex Sans KR'; margin-left: 25px; text-align: start;"> &nbsp;${characterTxts[info_idx]["text-main"]}<br><br></p></td>
                            </tr>
                            
                        </tbody>
                    </table>
                
                    
                </div>
                </div>
            </div>
        </div>
    <button class="carousel-arrow right" id="right-button-character-info" style="visibility: ${right_visible_html}; user-select:none;"  onmouseover="mouseover('right-button-character-info', 'carousel-arrow right', 'heartbeat',10)" onmouseleave="mouseleave('right-button-character-info', 'carousel-arrow right')"  onclick="scrollCarouselInfo('right')">&#8250;</button>
    </div>
    
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style="z-index: 1600;">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">소속 -  ${characterTxts[info_idx]["affil"]}</h5>
                    <button type="button" id="info-modal-close" class="close" style="border-radius: 10px; font-size:xx-large; width: 50px;" data-dismiss="modal" aria-label="Close" onmouseover="mouseover('info-modal-close', 'close')" onmouseleave="mouseleave('info-modal-close', 'close')">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div><span class="tooltiptext" id="info-modal-close-tooltip" style="width: 100px; right: -300px;">상세정보 끄기</span>
                <div class="modal-body" style="font-size: 11pt; font-family: 'IBM Plex Sans KR'; text-align: left; margin-right: 25px;">
                ${characterTxts[info_idx]["affil-text"].replace("\n", "<br>")}
                </div>

            </div>
        </div>
    </div>`


}



var isShowingProfile = false;
function toCharacterProfile() {
    var affil_html;
    if (characterTxts[info_idx]["affil"] != "미해당") {
        affil_html = `<button type="button" id="affil-btn" class="btn btn-light blink-1" data-toggle="modal" data-target="#exampleModal" style="font-size: 11pt; text-align: center; margin-right: 25px;" onmouseover="mouseover('affil-btn', 'btn btn-light')" onmouseleave="mouseleave('affil-btn', 'btn btn-light')">${characterTxts[info_idx]["affil"]}</button>
                                <span class="tooltiptext" id="affil-btn-tooltip">상세정보</span>
                                </span>`;
        }
    else {
        affil_html = `<button type="button" id="affil-btn" class="btn btn-light blink-1 disabled" data-toggle="modal" data-target="#exampleModal" style="font-size: 11pt; text-align: center; margin-right: 25px;">${characterTxts[info_idx]["affil"]}</button>`;
        }

    console.log("toCharacterProfile");
    prof_html = `<table class="character-table table table scale-up-hor-left text-light" style="margin-top: 0; margin-bottom: 0; " >
                        <tbody>
                            
                            <tr>
                                <th style="font-size: 13pt; font-weight:100;font-family: 'Do Hyeon'; text-align: start;" id="word-character"> 생존여부 </th>
                                <td> <span style="font-size: 11pt; font-family: 'IBM Plex Sans KR'; text-align: center;  margin-right: 25px;" id="word-character"> ${characterTxts[info_idx]["isLive"]}<span></td>
                            </tr>
                            <tr>
                                <th style="font-size: 13pt; font-weight:100;font-family: 'Do Hyeon'; text-align: start;" id="word-character"> 종족</th>
                                <td> <span style="font-size: 11pt; font-family: 'IBM Plex Sans KR'; text-align: center; margin-right: 25px;" id="word-character"> ${characterTxts[info_idx]["tribe"]}<span></td>
                            </tr>
                            <tr>
                                <th style="font-size: 13pt; font-weight:100; font-family: 'Do Hyeon'; text-align: start;" id="word-character"> 생일</th>
                                <td> <span style="font-size: 11pt; font-family: 'IBM Plex Sans KR'; text-align: center; margin-right: 25px;" id="word-character"> ${characterTxts[info_idx]["birthday"]}<span></td>
                            </tr>
                            <tr>
                                <th style="font-size: 13pt; font-weight:100;font-family: 'Do Hyeon'; text-align: start;" id="word-character"> 소속</th>
                            
                                <td> 
                                    ${affil_html}
                                </td>
                                
                                </tr>
                            <tr>
                                <th style="font-size: 13pt; font-weight:100;font-family: 'Do Hyeon'; text-align: start;" id="word-character"> 특기분야</th>
                                <td> <span style="font-size: 11pt; font-family: 'IBM Plex Sans KR'; text-align: center; margin-right: 25px;"> ${characterTxts[info_idx]["field"]}<span></td>
                            </tr>
                            <tr>
                                <th style="font-size: 13pt; font-weight:100;font-family: 'Do Hyeon'; text-align: start;" id="word-character"> 좋아함</th>
                                <td> <span style="font-size: 11pt; font-family: 'IBM Plex Sans KR'; text-align: center; margin-right: 25px;"> ${characterTxts[info_idx]["likes"]}<span></td>
                            </tr>
                            <tr>
                                <th style="font-size: 13pt; font-weight:100;font-family: 'Do Hyeon'; text-align: start;" id="word-character"> 싫어함</th>
                                <td> <span style="font-size: 11pt; font-family: 'IBM Plex Sans KR'; text-align: center; margin-right: 25px;"> ${characterTxts[info_idx]["dislikes"]}<span></td>
                            </tr>
                            <tr>
                                <th style="font-size: 13pt; font-weight:100;font-family: 'Do Hyeon'; text-align: start;" id="word-character"> 특성</th>
                                <td> <span style="font-size: 11pt; font-family: 'IBM Plex Sans KR'; text-align: center; margin-right: 25px;"> ${characterTxts[info_idx]["significant"]}<span></td>
                            </tr>
                            <tr>
                                <th style="font-size: 13pt; font-weight:100;font-family: 'Do Hyeon'; text-align: start;" id="word-character"> 성별</th>
                                <td> <span style="font-size: 11pt; font-family: 'IBM Plex Sans KR'; text-align: center; margin-right: 25px;"> ${characterTxts[info_idx]["sex"]}<span></td>
                            </tr>
                            <tr>
                                <th style="font-size: 13pt; font-weight:100;font-family: 'Do Hyeon'; text-align: start;" id="word-character"> 익명함 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</th>
                                <td> <span style="font-size: 11pt; font-family: 'IBM Plex Sans KR'; text-align: center; margin-right: 25px;"> ${characterTxts[info_idx]["somebody"]}<span></td>
                            </tr>
                        </tbody>
                    </table>
                    `;

    text_html = `<p class="fadeInUpB" style="font-size: 9pt; font-family: 'IBM Plex Sans KR'; text-align: start; margin-right: 35px; margin-left: 25px;"> &nbsp;${characterTxts[info_idx]["text-sub"]}<br><br></p>
                    <p style="font-size: 11pt; font-family: 'IBM Plex Sans KR'; margin-left: 25px; text-align: start; margin-right: 35px;"> &nbsp;${characterTxts[info_idx]["text-main"]}<br><br></p>
                    `;
    
    if (isShowingProfile) {
        // toggle to texts
        document.getElementById("info_body").innerHTML = text_html;
        document.getElementById("characters").className = "bg-light text-dark stopped";
        document.getElementById(`info-character-0`).src = characterTxts[info_idx]["img"];
        document.getElementById("title-character").className = "text-dark stopped";
        document.getElementById("profilebtn-tooltip").innerText =  "프로필로!";
        

        
    }
    else {
        // toggle to profile
        document.getElementById("info_body").innerHTML = prof_html;
        document.getElementById("characters").className = "bg-dark text-light stopped";
        document.getElementById(`info-character-0`).src = characterTxts[info_idx]["img"].split(".")[0] + "_hover.png";
        document.getElementById("title-character").className = "text-light stopped";

        document.getElementById("profilebtn-tooltip").innerText =  "텍스트로!";
    }

    isShowingProfile = !isShowingProfile;
    
    

    bgcolor_t = document.getElementById("profilebtn").style.backgroundColor;
    color_t = document.getElementById("profilebtn").style.color;

    document.getElementById("profilebtn").style.backgroundColor = color_t;
    document.getElementById("profilebtn").style.color = bgcolor_t;
    animate("profilebtn", "blink-1", 10);

    
    document.getElementById("left-button-character-info").style.backgroundColor = "#f1ebeb";
    document.getElementById("left-button-character-info").style.color = "#1f155c";
    document.getElementById("right-button-character-info").style.backgroundColor = "#f1ebeb";
    document.getElementById("right-button-character-info").style.color = "#1f155c";
    document.getElementById(`info-character-0`).className = "stopped";
    

    
    

}
