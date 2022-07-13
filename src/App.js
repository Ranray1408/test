import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import Post from './components/Posts';
import PostsList from './components/PostsList';
import './styles/App.css';

function App() {

  return (
    <div className="App">
      <Counter />
      <ClassCounter />
      <PostsList listTitle={'posts list1'} />
    </div>
  );
}

export default App;
