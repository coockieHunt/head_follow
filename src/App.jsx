import './App.css';
import './styles/skull.css'
import './styles/quoteBlock.css'
import './styles/skeleton/header.css'

import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeOff, faVolumeUp, faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import FollowObjectDown from './components/followObjectDown.jsx';
import TopNotifier from './components/topNotifier.jsx';
import DustFlow from './components/dustFlow.jsx';

import copyQuote from './utils/copyQuote.jsx';
import PlayClickSound from './utils/interactSond.jsx';
import curQuoteData from './quote.json';


function App() {
  // State variables
  const [AlertText, setAlertText] = useState("");
  const [notifierTrigger, setNotifierTrigger] = useState(0);
  const [muted, setMuted] = useState(false);
  const [curQuoteIndex, setCurQuoteIndex] = useState(0);

  // Handle quote copy action
  function handleCopyQuote() {
    copyQuote({quote: curQuoteData[curQuoteIndex].quote, muted});
    setAlertText("Quote copied!");
    setNotifierTrigger(t => t + 1); 
  }

  // const viaruable
  const icon_multiplier_class = "fa-2x";
  const icon_disabled_class = muted ? "mute-button sound_off" : "mute-button";

  
  return (
    <>
      {<> 
        <DustFlow />
        <div className="header">
          <button onClick={() => (setMuted(!muted), PlayClickSound())} className={icon_disabled_class}>
            {muted ?  <FontAwesomeIcon icon={faVolumeOff} className={icon_multiplier_class} /> : <FontAwesomeIcon icon={faVolumeUp} className={icon_multiplier_class} />}
          </button>
        </div>
        <div id='QuoteBlock'>
          <span id='AlertText'>{<TopNotifier message={AlertText} trigger={notifierTrigger}/>}</span>
          
          <button 
            className={curQuoteIndex > 0 ? "arrowButton" : "arrowButton disabled"}
            onClick={() => curQuoteIndex > 0 ? setCurQuoteIndex(curQuoteIndex - 1) : null}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
          <div id='quoteContainer'>
            <span id="quoteText" onClick={handleCopyQuote} >“ {curQuoteData[curQuoteIndex].quote} ”</span>
          </div>
          <button 
            className={curQuoteIndex < curQuoteData.length - 1 ? "arrowButton" : "arrowButton disabled"}
            onClick={() => curQuoteIndex < curQuoteData.length - 1 ? setCurQuoteIndex(curQuoteIndex + 1) : null}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>

          {<FollowObjectDown muted={muted}/>}
          <div style={{ position: 'fixed', bottom: '10px', right: '10px', fontSize: '12px', color: '#666' }}>
            Created by <a href="https://jonathangleyze.fr">jonathangleyze.fr</a>
          </div>
        </>
      }
    </>
  );
}


export default App;
