function toggleVideo(){
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video');
    video.pause();
    trailer.classList.toggle('active')
}

function changeBg(bg, title) {
    console.log('Changing background to:', bg);
    console.log('Title:', title);

    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');
    banner.style.background = `url("Moviepic/${bg}")`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    const contentsArray = Array.from(contents);

    contentsArray.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(title)) {
            content.classList.add('active');
        }
    });
}

function playVideo(videoSrc) {
    const video = document.querySelector('video');

    // Change the video source
    video.src = videoSrc;

    // Play the new video
    video.play();

    // Show the trailer
    const trailer = document.querySelector('.trailer');
    trailer.classList.add('active');
}

