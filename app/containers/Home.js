import React from 'react';
import { Link } from 'react-router';
import SearchBar from '../components/SearchBar';

const Home = () => (
  <div className="page home">
    <SearchBar />
    <p>aaaa</p>
    <Link to="/favorites">ads</Link>
    {/* if no suggestions, display quote
    if suggestions, display list */}
    {/* <SuggestionList /> */}
  </div>
);

export default Home;
