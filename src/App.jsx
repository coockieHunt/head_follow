import './App.css';
import './styles/skull.css'
import './styles/quoteBlock.css'
import './styles/skeleton/header.css'

import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeMute, faVolumeUp, faChevronLeft, faChevronRight, faClose} from "@fortawesome/free-solid-svg-icons";
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
  const [fullPageOpen, setFullPageOpen] = useState(false);

  // Handle quote copy action
  function handleCopyQuote() {
    copyQuote({quote: curQuoteData[curQuoteIndex].quote, muted});
    setAlertText("Quote copied!");
    setNotifierTrigger(t => t + 1); 
  }

  // const variable
  const icon_multiplier_class = "fa-2x";
  const icon_disabled_class = muted ? "mute-button sound_off" : "mute-button";

  const DisplayOnFullPage = () => {
    setFullPageOpen(true);
  }

  const QuoteType = (dataQuote) => {
    switch(dataQuote.type) {
      case "quote":
        return (
          <div className="quotedisplay">
            “ {dataQuote.quote} ”
          </div>
        );
      case "text":
        return (
          <div className="quotedisplay">
            <h2>{dataQuote.title}</h2>
            <p>{dataQuote.text.substring(0, 100)}...</p>
            <button onClick={() => DisplayOnFullPage(dataQuote.text)}>voir plus</button>
          </div>
        );
      default:
        return <span style={{ color: 'red' }}>[Unsupported quote type]</span>;
    }
  };

  const FullPage = ({ text, title }) => {
    return(
      <div className="FullPage" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.8)', color: '#fff', padding: '20px', overflow: 'auto', zIndex: 9999999999999 }}>
        <button onClick={() => setFullPageOpen(false)} style={{ backgroundColor: 'transparent', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '18px' }}><FontAwesomeIcon icon={faClose} /></button>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    ) ;
  }
  
  return (
    <>
      {
        <> 
          {/* interact elements */}
          <DustFlow />
          <FollowObjectDown muted={muted}/>
          {fullPageOpen && <FullPage text={curQuoteData[curQuoteIndex].text} title={curQuoteData[curQuoteIndex]["type"]} />}

          {/* content */}
          <div className="header">
            <button onClick={() => (setMuted(!muted), PlayClickSound())} className={icon_disabled_class}>
              {muted ?  <FontAwesomeIcon icon={faVolumeMute} className={icon_multiplier_class} /> : <FontAwesomeIcon icon={faVolumeUp} className={icon_multiplier_class} />}
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
              <span id="quoteText" onClick={curQuoteData[curQuoteIndex].type === "quote" ? handleCopyQuote : null}>
                
                {QuoteType(curQuoteData[curQuoteIndex])}
              </span>
            </div>
            <button 
              className={curQuoteIndex < curQuoteData.length - 1 ? "arrowButton" : "arrowButton disabled"}
              onClick={() => curQuoteIndex < curQuoteData.length - 1 ? setCurQuoteIndex(curQuoteIndex + 1) : null}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
          
          <div style={{ position: 'fixed', bottom: '10px', right: '10px', fontSize: '12px', color: '#666' }}>
              Created by <a href="https://jonathangleyze.fr">jonathangleyze.fr</a>
          </div>
        </>
      }
    </>
  );
}


export default App;
