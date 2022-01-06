import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import each components from main components files
import { Welcome, Lorem } from './Component';

// import data
import { users } from './users_data';

const content = users.map(user => {
  <div>
    <Welcome greeting={user.surname} />
    <Lorem lorem={user.lorem} />
  </div>
})

ReactDOM.render(
  <ul>
    {content}
  </ul>,
  document.getElementById("root")
)