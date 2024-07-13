
var idxToShow = 1; // 첫 로드 시 보여줄 뉴스 인덱스

var news_idx = idxToShow;
var newsTxts;
  
const max_news_idx = 1;
const min_news_idx = 0;
document.getElementById('news-sub').innerText = "???";
document.getElementById('news-text').innerText = "전광판을 준비하는 중…";
  fetch("json\\news.json")
          .then((res) => res.text())
          .then((text) => {
          let newsTextsData = text;

          newsTxts = JSON.parse(newsTextsData);
          
        document.getElementById('front-img').src = newsTxts[idxToShow]["thumb"];
        document.getElementById('news-sub').innerText = "―" + newsTxts[idxToShow]["title"] + " 개시 ―";
        document.getElementById('news-text').innerText = newsTxts[idxToShow]["text"];
       document.getElementById('icon-yt').href = newsTxts[idxToShow]["yt"];
       document.getElementById('icon-pt').href = newsTxts[idxToShow]["pt"];
       document.getElementById('icon-x').href = newsTxts[idxToShow]["x"];
    
      })
      .catch((e) => console.error(e));
    
var left_visible_html;
var right_visible_html;
    if (idxToShow == min_news_idx) {
        left_visible_html = "hidden";
    }
    if (idxToShow == max_news_idx) {
        right_visible_html = "hidden";
    }

    document.getElementById("left-button-news").style.visibility = left_visible_html;
    document.getElementById("right-button-news").style.visibility = right_visible_html;
  
  function scrollNews(direction) {
      document.getElementById("news-text").className = "stopped";
      document.getElementById("news-sub").className = "stopped";
      document.getElementById("news-icons").className = "container pt-4 stopped";
      document.getElementById("news_bottoms").className = "btn-group stopped";
  
      console.log("scrollWorld");
      document.getElementById("world-container").className = "container stopped";
      
      let classNameWorld = "";
      if (direction == 'left') {
          classNameWorld = "world-carousel moveLeft";
          if (news_idx > min_news_idx) {
              if (news_idx == max_news_idx) {
                  document.getElementById("right-button-news").style.visibility = "visible";
              }
              news_idx -= 1;
              if (news_idx == min_news_idx) {
                  document.getElementById("left-button-news").style.visibility = "hidden";
              }
          }
      }
      else if (direction == 'right') {
          classNameWorld = "world-carousel moveRight";
          if (news_idx < max_news_idx) {
              if (news_idx == min_news_idx) {
                  document.getElementById("left-button-news").style.visibility = "visible";
              }
              news_idx += 1;
              if (news_idx == max_news_idx) {
                  document.getElementById("right-button-news").style.visibility = "hidden";
              }
          }
          else {
              
          }
      }
      else{
          console.log('Invalid direction');
      }
  
      
      setTimeout(() => {
          document.getElementById("news-container").className = classNameWorld;
      }, 2);
  
      document.getElementById("news-sub").innerText = "―" + newsTxts[news_idx]["title"] + " 개시 ―";
      document.getElementById("front-img").src = newsTxts[news_idx]["thumb"];
      document.getElementById("news-text").innerText = newsTxts[news_idx]["text"];
      document.getElementById('icon-yt').href = newsTxts[news_idx]["yt"];
       document.getElementById('icon-pt').href = newsTxts[news_idx]["pt"];
       document.getElementById('icon-x').href = newsTxts[news_idx]["x"];
  
      setTimeout(() => {
          document.getElementById("news-text").className = "tracking-in-expand";
          document.getElementById("news-sub").className = "blink-1";
          document.getElementById("news-icons").className = "container pt-4 blink-1";
          document.getElementById("news_bottoms").className = "btn-group fadeInDownBig";
      }, 2);
  
  }