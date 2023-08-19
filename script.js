console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('song/Cold.mp3');
let masterPlay = document.getElementById('masterPlay');
let MyProgressBar = document.getElementById('MyProgressBar');
let gif = document.getElementById('gif');

let songs = [
    {songName:"Cold", filePath:"./song/Cold.mp3", coverPath: "./image/1.jfif"},
    {songName:"Arrow", filePath:"./song/Arrow.mp3", coverPath: "./image/2.jfif"},
    {songName:"Destiny", filePath:"./song/Destiny.mp3", coverPath: "./image/3.jfif"},
    {songName:"FightBack", filePath:"./song/FightBack.mp3", coverPath: "./image/4.jfif"},
    {songName:"Firefly", filePath:"./song/Firefly.mp3", coverPath: "./image/5.jfif"},
    {songName:"Goodbye", filePath:"./song/Goodbye.mp3", coverPath: "./image/6.jfif"},
    {songName:"Lights", filePath:"./song/Lights.mp3", coverPath: "./image/7.jfif"},
    {songName:"Tobu", filePath:"./song/Tobu.mp3", coverPath: "./image/8.jfif"},
]

// Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

// Listen to events

audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    MyProgressBar.value = progress;
})
MyProgressBar.addEventListener(('change'), ()=> {
    audioElement.currentTime=MyProgressBar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        const name =songs[songIndex].songName;
        audioElement.src =`./song/${name}.mp3`;
        audioElement.currentTime = 0; 
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById("next").addEventListener('click', ()=>{
        if(songIndex>=9){
                songIndex=0;
        }
        else{
            songIndex +=1;
        }
        const name =songs[songIndex].songName;
        audioElement.src =`./song/${name}.mp3`;
        audioElement.currentTime = 0; 
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})

document.getElementById("previous").addEventListener('click', ()=>{
    if(songIndex<=0){
            songIndex=0;
    }
    else{
        songIndex -=1;
    }
    const name =songs[songIndex].songName;
    audioElement.src =`./song/${name}.mp3`;
    audioElement.currentTime = 0; 
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})