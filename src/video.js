/*

ID = "DIW8DE2CiQM";
window.onYouTubeIframeAPIReady = function () {
    window.player = new YT.Player("player", {
        videoId: ID,
        playerVars: {
            autoplay: 1,
            controls: 0,
            loop: 1,
            cc_load_policy: 0,
            disablekb: 1,
            fs: 0,
            iv_load_policy: 3,
            modestbranding: 1,
            enablejsapi: 1,
            showinfo: 0,
            playlist: ID,
            end: 104,
            start: 10,
            origin: window.location.origin
        },
        events: {
            'onReady': initVideo,
        }
    });
};

initVideo = (e) => {
    e.target.setVolume(30);
    //e.target.playVideo();
};

*/