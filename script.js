console.log("Welcome to Spotify");
//initialize the Variables
let songIndex = 0;
let audioElement = new Audio(
  "./songs/Tune-Mere-Jaana-Kabhi-Nahi-Jaana(PagalWorld).mp3"
);
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songs = [
  {
    songName: "Tune Mere Jaana",
    filePath: "./songs/Tune-Mere-Jaana-Kabhi-Nahi-Jaana(PagalWorld).mp3",
    coverPath: "./covers/1.jpg",
  },
  {
    songName: "na jaana",
    filePath: "./songs/2.mp3",
    coverPath: "./covers/2.jpg",
  },
  {
    songName: "ishq",
    filePath: "./songs/3.mp3",
    coverPath: "./covers/3.jpg",
  },
  {
    songName: "Let me love you",
    filePath: "./songs/4.mp3",
    coverPath: "./covers/4.jpg",
  },
  {
    songName: "rooh",
    filePath: "./songs/5.mp3",
    coverPath: "./covers/5.jpg",
  },
  {
    songName: "jannat",
    filePath: "./songs/6.mp3",
    coverPath: "./covers/6.jpg",
  },
  {
    songName: "man bharraya",
    filePath: "./songs/7.mp3",
    coverPath: "./covers/7.jpg",
  },
];
songItems.forEach((element, i) => {
  console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// audioElement.play();
//Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});
//listen to events
audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});
myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});
