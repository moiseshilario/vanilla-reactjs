import React from 'react';
import { render } from 'react-dom';

import './style.scss';

import Post from './components/Post';

import data from './database';

const App = () => (
  <div>
    <header className="header">RocketBook</header>
    <ul>
      {data.map((userInfo) => {
        console.log(userInfo);
        return (
          <li key={userInfo.id}>
            <Post postInfo={userInfo} />
          </li>
        );
      })}
    </ul>
  </div>
);

render(<App />, document.getElementById('app'));
