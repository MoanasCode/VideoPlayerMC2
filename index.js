const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $bwd = document.querySelector('#bwd');
const $fwd = document.querySelector('#fwd');

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)

function handlePlay(){
    $video.play()
    $play.hidden = true 
    $pause.hidden = false
console.log('diste click al boton play')
}

function handlePause(){
    $video.pause()
    $play.hidden = false
    $pause.hidden = true
console.log('diste click al boton pause')
}

$bwd.addEventListener('click', handleBwd)
function handleBwd(){
    $video.currentTime -= 10
console.log('bwd 10 sec', $video.currentTime)
}

$fwd.addEventListener('click', handleFwd)
function handleFwd(){
    $video.currentTime += 10
console.log('fwd 10 sec', $video.currentTime)
}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)


function handleLoaded(){
    $progress.max = $video.duration
    console.log('loading video', $video.duration)
}

function handleTimeUpdate() {
    $progress.value = $video.currentTime
}

$progress.addEventListener('input', handleInput)

function handleInput() {
    $video.currentTime = $progress.value
    console.log($progress.value)
}