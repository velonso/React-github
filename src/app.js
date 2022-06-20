import React from 'react';
import { Heading } from './components/heading';
import { Main } from './components/MainComponent';

export function App () {
  return (
    <div className="App">
      <div className="send">
        <div className="send__background">
          <div className="send__content">
            <Heading className="send__heading">
              GitHub Search Users
            </Heading>
            <Main/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default App;