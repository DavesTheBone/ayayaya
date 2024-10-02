window.onload = function() {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('playButton');

    // ページが読み込まれた時に音楽を自動再生しない
    audio.pause();

    // ボタンをクリックすると音楽を再生
    playButton.onclick = function() {
        audio.play();
        playButton.style.display = 'none'; // ボタンを隠す
    };
};
