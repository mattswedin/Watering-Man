class Sound {
    constructor(filename) {
        this.sound = document.createElement("audio");
        this.sound.src = 'src/assets/sound/Horrors trim.mp3';
        this.sound.setAttribute('preload', 'auto');
        this.sound.volume = 0.2;
        //  Specifies that audio controls should be displayed (such as a play/pause button etc)
        // we don't want it
        this.sound.setAttribute('controls', 'loop');
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);
    }
    fade_out(){
        if (this.sound.volume > 0) {
        this.sound.volume -= .2;
        }
    }

    play() {
        this.sound.play();
    }

    stop() {
        this.sound.pause();
    }
}

export default Sound;