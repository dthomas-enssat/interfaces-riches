import React, { Component }   from 'react';
import { UserStateProvider }  from './providers/UserProvider';
import UsersComponent         from "./components/UserComponent"
import './App.css';

class App extends Component {
  render () {
    return (
      <div>
        <UserStateProvider>
          <UsersComponent />
        </UserStateProvider>
      </div>
    );
  }
}

export default App;