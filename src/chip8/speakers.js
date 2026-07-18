// Ad Maiorem Dei Gloriam!

export default class Speakers {
    init() {
        if (this.audioContext) this.audioContext.close();
        this.audioContext = new AudioContext();
        this.oscilator = new OscillatorNode(this.audioContext);
        this.gain = new GainNode(this.audioContext);

        this.oscilator.connect(this.gain).connect(this.audioContext.destination);

        this.gain.gain.value = 0.005;

        this.oscilator.frequency.value = 200;
        this.oscilator.start();

        this.state = "resumed";
        this.stopPlaying();
    }

    startPlaying() {
        if (this.state != "resumed") this.audioContext.resume();
        this.state = "resumed";
    }

    stopPlaying() {
        if (this.state != "suspended") this.audioContext.suspend();
        this.state = "suspended";
    }
}