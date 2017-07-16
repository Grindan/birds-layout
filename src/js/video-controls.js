window.onload = function(){
    let video = document.getElementById('video');

    let btnPlayOrPause = document.getElementById('btnPlayOrPause');
    let btnPlayOrPauseIcon = document.getElementById('btnPlayOrPauseIcon');
    let playingStatus = { play: 'fa-play', pause: 'fa-pause' };

    let btnVolume = document.getElementById('btnVolume');
    let btnVolumeIcon = document.getElementById('btnVolumeIcon');
    let volumeStatus = { aboveZero: 'fa-volume-up', zero: 'fa-volume-off' };
    let volume = document.getElementById('volume');

    btnPlayOrPause.addEventListener('click', playOrPauseVideo);
    btnVolume.addEventListener('click', muteVideo);
    volume.addEventListener('change', changeVolume);

    function playOrPauseVideo() {
        if (video.paused || video.ended) {
            video.play();
            btnPlayOrPauseIcon.classList.remove(playingStatus.play);
            btnPlayOrPauseIcon.classList.add(playingStatus.pause);
        } else {
            video.pause();
            btnPlayOrPauseIcon.classList.remove(playingStatus.pause);
            btnPlayOrPauseIcon.classList.add(playingStatus.play);
        }
    }

    function muteVideo() {
        video.muted = !video.muted;
        if (video.muted) {
            btnVolumeIcon.classList.remove(volumeStatus.aboveZero);
            btnVolumeIcon.classList.add(volumeStatus.zero);
            volume.value = 0;
        } else {
            btnVolumeIcon.classList.remove(volumeStatus.zero);
            btnVolumeIcon.classList.add(volumeStatus.aboveZero);
            video.volume = volume.value = 0.5;
        }
    }

    function changeVolume() {
        video.volume = volume.value;
        if (volume.value == 0 && !video.muted) {
            muteVideo();
        } else if (video.muted) {
            muteVideo();
        };
    }

};