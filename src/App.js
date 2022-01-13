import React, { Component }   from 'react';
import { UserStateProvider }  from './providers/UserProvider';
import CharactersComponent    from "./components/CharacterComponent"
import './App.css';

class App extends Component {
  render () {
    return (
      <div>
        <UserStateProvider>
          <CharactersComponent />
        </UserStateProvider>
      </div>
    );
  }
}

export default App;