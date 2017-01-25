import React from 'react';
import SnippetList from '../components/SnippetList';
import Snippet from '../components/Snippet';

const Home = () => (
  <div className="home" style={{display: 'flex', flex: 1}}>
    <SnippetList />
    <Snippet />
  </div>
);

export default Home;
