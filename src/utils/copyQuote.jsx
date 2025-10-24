/**
 * Copies the provided quote text to the clipboard using the Clipboard API.
 * On successful copy, logs a confirmation message and plays an audio sound.
 * Handles any errors that occur during the copy process.
 * @param {string} quote - The quote text to be copied to the clipboard.
 * @param {boolean} muted - Whether the audio should be muted or not.
 * 
 */
import WriteSong from '../assets/write.ogg';

function copyQuote({quote, muted = false}) {
  // Use the Clipboard API to copy the quote text
  navigator.clipboard.writeText(quote).then(() => {
    const audio = new Audio(WriteSong);
    if (!muted) {audio.play();}
  }).catch(err => {console.error('Error copying quote: ', err);});
}

export default copyQuote;