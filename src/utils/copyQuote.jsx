function copyQuote(quote) {
  navigator.clipboard.writeText(quote).then(() => {
    console.log('Quote copied to clipboard');
  }).catch(err => {
    console.error('Error copying quote: ', err);
  });
}

export default copyQuote;