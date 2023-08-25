function toggleMenu() {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav');
    if (menu) {
        menu.classList.toggle('active');
    }
    if (nav) {
        nav.classList.toggle('active');
    }
}

var j = jQuery.noConflict();

j(document).ready(function(){
    j('.carousel').carousel();
});


//document.addEventListener('DOMContentLoaded', function() {
    // Check if the flag exists in local storage
    //const hasRefreshed = localStorage.getItem('hasRefreshed');

    // If the flag doesn't exist, refresh the page and set the flag
   // if (!hasRefreshed) {
       // localStorage.setItem('hasRefreshed', true);
       // location.reload();
    //}
//});


//Change the background video when clic on the gallery images
function changeVideo(name){
    const bgVideoList = document.querySelectorAll('.bg-video');
    const trailers = document.querySelectorAll('.trailer');
    const models = document.querySelectorAll('.model');

    // mapping video for background-video change
    bgVideoList.forEach(video => {video.classList.remove('active');
    if(video.classList.contains(name)){
        video.classList.add('active');
    }
});

// mapping model (Model-Name) video change
models.forEach(model => {model.classList.remove('active');
if(model.classList.contains(name)){
    model.classList.add('active');
}
});

// mapping trailer video change
trailers.forEach(video => {video.classList.remove('active');
if(video.classList.contains(name)){
    video.classList.add('active');
}
});
}


// Define the play and pause button on click event
function toggleplay() {
    const play = document.querySelector('.play');
    const pause = document.querySelector('.pause');
    play.classList.toggle('active');  // Remove the period here
    pause.classList.toggle('active'); // Remove the period here
}

// Define the pauseVideo function
function pauseVideo() {
    const bgVideoList = document.querySelectorAll('.bg-video');
    bgVideoList.forEach(video => {
        video.pause();
        console.log("Paused video");
    });

    toggleplay();
}

// Define the playVideo function
function playVideo() {
    const bgVideoList = document.querySelectorAll('.bg-video');
    bgVideoList.forEach(video => {
        video.play();
        console.log("Played video");
    });

    toggleplay();
}
