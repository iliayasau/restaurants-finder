import React from 'react';
import { Helmet } from "react-helmet";
import { Provider } from 'react-redux';
import store from './store';

import SearchForm from './components/searchForm';

const App = () => {
  return (
    <Provider store={store}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Restaurants Finder</title>
        <meta name="description" content="Search for Restaurants by City" />
        <link rel="canonical" href="http://restaurants-finder1.herokuapp.com" />
      </Helmet>
      <SearchForm />
    </Provider>
  );
};

export default App;