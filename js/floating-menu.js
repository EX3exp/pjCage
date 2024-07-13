function selectfloatmenu(idx) {
    for (let i = 0; i < 4; i++) {
        if (i == idx) {
            document.getElementById(`button-floatmenu-${i}`).innerText = document.getElementById(`button-floatmenu-${i}`).innerText.replace('△', '▲').replace('▽', '▼').replace('◁', '◀').replace('▷', '▶');
        }
        else {
            document.getElementById(`button-floatmenu-${i}`).innerText = document.getElementById(`button-floatmenu-${i}`).innerText.replace('▲', '△').replace('▼', '▽').replace('◀', '◁').replace('▶', '▷');
        }
    }
    
}
