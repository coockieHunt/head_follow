import './App.css';
import './styles/skull.css'
import './styles/quote.css'

import FollowObjectDown from './components/followObjectDown.jsx';

const quoteText = `Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist. Be curious.`;

function App() {
  return (
    <>
      {
        <>
          <span id="quote">
            “ {quoteText}”
          </span>
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
