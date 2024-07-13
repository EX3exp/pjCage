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
        document.getElementById('play-button').innerHTML = `<span class="tooltiptext" id="play-button-tooltip" style="position: fixed; right: 100%; width: 100%; height: 100%;">노래 불러오는 중...</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hourglass" viewBox="0 0 16 16">
  <path d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5m2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702c0 .7-.478 1.235-1.011 1.491A3.5 3.5 0 0 0 4.5 13v1h7v-1a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351v-.702c0-.7.478-1.235 1.011-1.491A3.5 3.5 0 0 0 11.5 3V2z"/>
</svg>`;
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