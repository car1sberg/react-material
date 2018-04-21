import React, { Component, Fragment } from 'react';
import Header from './Components/Layouts/Header';
import Footer from './Components/Layouts/Footer';
import MainContent from './Components/MainContent';
import { categories, bookmarks } from './store';


class App extends Component {
  state = {
    bookmarks,
    categories
  }

  getBookmarksByCategory(id) {
    let currentCategory = categories.find(category => category.id === id);
    let filteredBookmarks = bookmarks.filter(bookmark => bookmark.category === currentCategory.name);
    this.setState({bookmarks: filteredBookmarks});
  }

  getAllBookmarks() {
    this.setState({bookmarks: bookmarks})
  }

  handleSelectedCategory(category) {
    this.setState({ category })
  }

  render() {
    const { bookmarks, category } = this.state;
    return (
      <Fragment>
        <Header getAllBookmarks={this.getAllBookmarks.bind(this)} />
        <MainContent 
          categories={categories} 
          bookmarks={bookmarks}
          getBookmarksByCategory={this.getBookmarksByCategory.bind(this)} />

        <Footer 
          category={category}
          categories={categories}
          getBookmarksByCategory={this.getBookmarksByCategory.bind(this)}
          onSelect={this.handleSelectedCategory.bind(this)} />
      </Fragment>
    );
  }
}

export default App;
