let nexBtn = document.querySelector('.next-btn');
let heroVideo = document.querySelector('.hero-video');

let videoList = ['test.mp4', 'test2.mp4'];

let i = 0;

nexBtn.addEventListener('click', () => {
    i += 1;

    heroVideo.src = videoList[i];

    if(i === 1){
        i = -1;
    }
})

auto = setInterval(() => {
    nexBtn.click();
}, 7000)
