import WriteSong from '../assets/write.ogg';

function copyQuote(quote) {
  navigator.clipboard.writeText(quote).then(() => {
    console.log('Quote copied to clipboard');
    const audio = new Audio(WriteSong);
    audio.play();
  }).catch(err => {
    console.error('Error copying quote: ', err);
  });
}

export default copyQuote;