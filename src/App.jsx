import './App.css';
import './styles/skull.css'
import './styles/quoteBlock.css'
import './styles/skeleton/header.css'
import './styles/skeleton/footer.css'

import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeMute, faVolumeUp, faChevronLeft, faChevronRight, faClose, faCopy} from "@fortawesome/free-solid-svg-icons";
import FollowObjectDown from './components/followObjectDown.jsx';
import TopNotifier from './components/topNotifier.jsx';
import DustFlow from './components/dustFlow.jsx';

import copyQuote from './utils/copyQuote.jsx';
import {PlayClickSound} from './utils/interactSond.jsx';
import curQuoteData from './data/quote.json';
import config from './data/config.json';


function App() {
  // State variables
  const [AlertText, setAlertText] = useState("");
  const [notifierTrigger, setNotifierTrigger] = useState(0);
  const [muted, setMuted] = useState(false);
  const [curQuoteIndex, setCurQuoteIndex] = useState(0);
  const [fullPageOpen, setFullPageOpen] = useState(false);

  // Handle quote copy action
  function handleCopyQuote(textCopy) {
    copyQuote({ quote: textCopy, muted });
    setAlertText(config.copy_success_message);
    setNotifierTrigger(t => t + 1); 
  }

  // const variable
  const icon_multiplier_class = "fa-2x";
  const icon_disabled_class = muted ? "mute-button sound_off" : "mute-button";

  // Render quote based on its type
  const QuoteType = (dataQuote) => {
    switch(dataQuote.type) {
      case "quote":
        return (
          <div>
            <p className='short'> 
              “ {dataQuote.quote} ”
            </p>
           
          </div>
        );
      case "text":
        return (
          <div>
            <h2>{dataQuote.title}</h2>
            <p className='long'>{dataQuote.text.substring(0, config.max_quote_length)}...</p>
            <button onClick={() =>  setFullPageOpen(true)}>voir plus</button>
          </div>
        );
      default:
        return <span style={{ color: 'red' }}>[Unsupported quote type]</span>;
    }
  };

  // Components for quote display
  const QuoteLong = () => {
    return(        
      <div id='QuoteBlock' className='max'>
        <div className="FullPage">
          <div className="top">
            <button onClick={() => setFullPageOpen(false)}><FontAwesomeIcon icon={faClose} /></button>
            <h2>{curQuoteData[curQuoteIndex].title}</h2>
            <button onClick={() => handleCopyQuote(curQuoteData[curQuoteIndex].text)}><FontAwesomeIcon icon={faCopy} /></button>
          </div>
          <div className='content'>
            <p>{curQuoteData[curQuoteIndex].text}</p>
          </div>
            
        </div>
      </div>
    ) ;
  }

  // Simple quote display
  const QuoteSimple = () => {
    return(
      <>
          <title>{config.title_app}</title>
          <div id='QuoteBlock' className='min'>
              <button 
                className={curQuoteIndex > 0 ? "arrowButton" : "arrowButton disabled"}
                onClick={() => curQuoteIndex > 0 ? setCurQuoteIndex(curQuoteIndex - 1) : null}>
                  <FontAwesomeIcon icon={faChevronLeft} />
              </button>
            <div id='quoteContainer'>
              <span onClick={curQuoteData[curQuoteIndex].type === "quote" ? () => handleCopyQuote(curQuoteData[curQuoteIndex].quote) : null}>
                {QuoteType(curQuoteData[curQuoteIndex])}
              </span>
            </div>
            <button 
              className={curQuoteIndex < curQuoteData.length - 1 ? "arrowButton" : "arrowButton disabled"}
              onClick={() => curQuoteIndex < curQuoteData.length - 1 ? setCurQuoteIndex(curQuoteIndex + 1) : null}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </>
    );
  }
  
  return (
    <>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="16x16 32x32" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/web-app-manifest-192x192.png" />
      <link rel="icon" type="image/png" sizes="512x512" href="/web-app-manifest-512x512.png" />

      <DustFlow />
      <FollowObjectDown muted={muted}/>
      
      <div className="header">
        <h1>{config.title_page}</h1>
        <span id='AlertText'>{<TopNotifier message={AlertText} trigger={notifierTrigger}/>}</span>
        <button onClick={() => (setMuted(!muted), PlayClickSound())} className={icon_disabled_class}>
          {muted ?  <FontAwesomeIcon icon={faVolumeMute} className={icon_multiplier_class} /> : <FontAwesomeIcon icon={faVolumeUp} className={icon_multiplier_class} />}
        </button>
      </div>

      {fullPageOpen ? <QuoteLong /> : <QuoteSimple />}

      <div className="footer">
        App <a href='https://github.com/coockieHunt/quoteViewerSkull'>quoteViewerSkull</a> Created by <a href="https://jonathangleyze.fr">jonathangleyze.fr</a>
      </div>
    </>
  );
}


export default App;
