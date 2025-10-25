/**
 * Plays a short click sound using the Web Audio API.
 * Creates an oscillator and gain node to produce a sine wave at 440 Hz,
 * with a quick exponential decay for a click effect.
 * The sound lasts approximately 0.2 seconds.
 */
let ctx = new AudioContext();

function PlayClickSound() {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, now); 

    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.2);
}

export default PlayClickSound;