import React, { Component, Fragment } from 'react';
import Header from './Components/Layouts/Header';
import Footer from './Components/Layouts/Footer';
import MainContent from './Components/MainContent';
import { categories, bookmarks } from './store';


class App extends Component {
  state = {
    bookmarks
  }
  render() {
    return (
      <Fragment>
        <Header />
        <MainContent categories={categories} bookmarks={bookmarks} />

        <Footer categories={categories} />
      </Fragment>
    );
  }
}

export default App;
