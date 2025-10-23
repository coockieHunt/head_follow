import './App.css';
import './styles/skull.css'
import './styles/quote.css'
import './styles/quoteBlock.css'

import FollowObjectDown from './components/followObjectDown.jsx';
import TopNotifier from './components/topNotifier.jsx';
import copyQuote from './utils/copyQuote.jsx';
import { useState } from 'react';

const curQuoteText = `Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist. Be curious.`;


function App() {
const [AlertText, setAlertText] = useState("");
const [notifierTrigger, setNotifierTrigger] = useState(0);

  function handleCopyQuote() {
    copyQuote(curQuoteText);
    setAlertText("Quote copied!");
    setNotifierTrigger(t => t + 1); 
  }

  return (
    <>
      {
        <>
        <div id='QuoteBlock'>
          <span id='AlertText'>{<TopNotifier message={AlertText} trigger={notifierTrigger}/>}</span>
          <span id="quoteText" onClick={handleCopyQuote}>
            “ {curQuoteText} ”
          </span>
        </div>
          
          {<FollowObjectDown />}
          <div style={{ position: 'fixed', bottom: '10px', right: '10px', fontSize: '12px', color: '#666' }}>
            Created by <a href="https://jonathangleyze.fr">jonathangleyze.fr</a>
          </div>
        </>
      }
    </>
  );
}




export default App;
