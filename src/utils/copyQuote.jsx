/**
 * Copies the provided quote text to the clipboard using the Clipboard API.
 * On successful copy, logs a confirmation message and plays an audio sound.
 * Handles any errors that occur during the copy process.
 * @param {string} quote - The quote text to be copied to the clipboard.
 * @param {boolean} muted - Whether the audio should be muted or not.
 * 
 */
import WriteSong from '../assets/write.ogg';
import {PlayOggSound} from './interactSond.jsx';

function copyQuote({quote, muted = false}) {
  navigator.clipboard.writeText(quote).then(() => {
    !muted && PlayOggSound(WriteSong, 1.0, true);
  }).catch(err => {console.error('Error copying quote: ', err);});
}

export default copyQuote;