// Web Audio API
let audioContext;
let audioBuffer;
let audioSource;

async function loadAudio(url) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
}

function playAudio() {
    audioSource = audioContext.createBufferSource();
    audioSource.buffer = audioBuffer;
    audioSource.connect(audioContext.destination);
    audioSource.loop = true;
    audioSource.start(0);
}
   
function toggleAudio() {
    if (!audioContext) {

        loadAudio('audio\\Abraxas.wav').then(() => {
            playAudio();
            document.getElementById('play-button').innerHTML = `<span class="tooltiptext" id="play-button-tooltip" style="position: fixed; right: 100%; width: 100%; height: 100%;">눌러서<br>일시정지</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-pause" viewBox="0 0 16 16">
  <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5"/>
</svg>`;
        });
    } else if (audioContext.state === 'suspended') {
        audioContext.resume();
        document.getElementById('play-button').innerHTML = `<span class="tooltiptext" id="play-button-tooltip" style="position: fixed; right: 100%; width: 100%; height: 100%;">눌러서<br>일시정지</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-pause" viewBox="0 0 16 16">
  <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5"/>
</svg>`;
    } else if (audioContext.state === 'running') {
        audioContext.suspend();
        document.getElementById('play-button').innerHTML = `<span class="tooltiptext" id="play-button-tooltip" style="position: fixed; right: 100%; width: 100%; height: 100%;">눌러서<br>이어 재생</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
</svg>`;
    } else {
        playAudio();
    }
}