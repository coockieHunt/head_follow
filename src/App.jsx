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


const curQuoteText = [
  `Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist. Be curious.`,
  `The important thing is not to stop questioning. Curiosity has its own reason for existing.`,
  `Science is a way of thinking much more than it is a body of knowledge.`,
  `Somewhere, something incredible is waiting to be known.`,
  `The good thing about science is that it's true whether or not you believe in it.`,
  `Equipped with his five senses, man explores the universe around him and calls the adventure Science.`,
];


function App() {
  // State variables
  const [AlertText, setAlertText] = useState("");
  const [notifierTrigger, setNotifierTrigger] = useState(0);
  const [muted, setMuted] = useState(false);
  const [curQuoteIndex, setCurQuoteIndex] = useState(0);

  // Handle quote copy action
  function handleCopyQuote() {
    copyQuote({quote: curQuoteText[curQuoteIndex], muted});
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
            <span id="quoteText" onClick={handleCopyQuote} >“ {curQuoteText[curQuoteIndex]} ”</span>
          </div>
          <button 
            className={curQuoteIndex < curQuoteText.length - 1 ? "arrowButton" : "arrowButton disabled"}
            onClick={() => curQuoteIndex < curQuoteText.length - 1 ? setCurQuoteIndex(curQuoteIndex + 1) : null}>
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
