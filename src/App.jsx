import './App.css';
import './styles/skull.css'
import './styles/quoteBlock.css'
import './styles/skeleton/header.css'

import { useState } from 'react';

import FollowObjectDown from './components/followObjectDown.jsx';
import TopNotifier from './components/topNotifier.jsx';
import DustFlow from './components/dustFlow.jsx';

import copyQuote from './utils/copyQuote.jsx';
import PlayClickSound from './utils/interactSond.jsx';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeOff, faVolumeUp } from "@fortawesome/free-solid-svg-icons";

const curQuoteText = `Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist. Be curious.`;


function App() {
const [AlertText, setAlertText] = useState("");
const [notifierTrigger, setNotifierTrigger] = useState(0);

const [muted, setMuted] = useState(false);

  function handleCopyQuote() {
    copyQuote({quote: curQuoteText, muted});
    setAlertText("Quote copied!");
    setNotifierTrigger(t => t + 1); 
  }

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
          <span id="quoteText" onClick={handleCopyQuote} >
            “ {curQuoteText} ”
          </span>
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
