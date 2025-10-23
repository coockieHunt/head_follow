/**
 * Copies the provided quote text to the clipboard using the Clipboard API.
 * On successful copy, logs a confirmation message and plays an audio sound.
 * Handles any errors that occur during the copy process.
 * @param {string} quote - The quote text to be copied to the clipboard.
 */
import WriteSong from '../assets/write.ogg';

function copyQuote(quote) {
  // Use the Clipboard API to copy the quote text
  navigator.clipboard.writeText(quote).then(() => {
    console.log('Quote copied to clipboard');
    const audio = new Audio(WriteSong);
    audio.play();
  }).catch(err => {
    console.error('Error copying quote: ', err);
  });
}

export default copyQuote;