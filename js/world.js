var world_idx = 0;
var worldTxts;

const max_world_idx = 5;
const min_world_idx = 0;

fetch("json\\world.json")
        .then((res) => res.text())
        .then((text) => {
        let worldTextsData = text;
        worldTxts = JSON.parse(worldTextsData);
    })
    .catch((e) => console.error(e));



function scrollWorld(direction) {
    document.getElementById("world-text").className = "stopped";
    document.getElementById("title-world").className = "stopped";

    console.log("scrollWorld");
    document.getElementById("world-container").className = "container stopped";
    
    let classNameWorld = "";
    if (direction == 'left') {
        classNameWorld = "world-carousel moveLeft";
        if (world_idx > min_world_idx) {
            if (world_idx == max_world_idx) {
                document.getElementById("right-button-world").style.visibility = "visible";
            }
            world_idx -= 1;
            if (world_idx == min_world_idx) {
                document.getElementById("left-button-world").style.visibility = "hidden";
            }
        }
    }
    else if (direction == 'right') {
        classNameWorld = "world-carousel moveRight";
        if (world_idx < max_world_idx) {
            if (world_idx == min_world_idx) {
                document.getElementById("left-button-world").style.visibility = "visible";
            }
            world_idx += 1;
            if (world_idx == max_world_idx) {
                document.getElementById("right-button-world").style.visibility = "hidden";
            }
        }
        else {
            
        }
    }
    else{
        console.log('Invalid direction');
    }

    
    setTimeout(() => {
        document.getElementById("world-inner").className = classNameWorld;
    }, 2);

    document.getElementById("title-world").innerHTML = 
    `${(world_idx + 1).toString() + ". " + worldTxts[world_idx]["ko"]} 
    <span id="world-sub"
                    style="font-size: 9pt; font-family: 'Grandiflora One'; margin-right: 25px; text-align: start;">
                    ${worldTxts[world_idx]["en"]}`;
    
    document.getElementById("world-text").innerText = worldTxts[world_idx]["text"];

    setTimeout(() => {
        document.getElementById("world-text").className = "tracking-in-expand";
        document.getElementById("title-world").className = "blink-1";
    }, 2);

}