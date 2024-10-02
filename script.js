window.onload = function() {
    const audio = document.getElementById('audio');
    // ページがロードされたときに音楽を再生
    audio.play().catch(error => {
        console.log('Music playback is blocked, like seriously? Let the user play it already, you clueless fucking　idiot');
    });
};
