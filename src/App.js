import React, { Component, Fragment } from 'react';
import Header from './Components/Layouts/Header';
import Footer from './Components/Layouts/Footer';
import MainContent from './Components/MainContent';
import _ from 'lodash';
import { categories, bookmarks } from './store';


class App extends Component {
  state = {
    bookmarks,
    categories,
  }

  getBookmarksByCategory = (id) => {
    let currentCategory = categories.find(category => category.id === id);
    let filteredBookmarks = bookmarks.filter(bookmark => bookmark.category === currentCategory.name);
    this.setState({bookmarks: filteredBookmarks});
  }

  getAllBookmarks = () => this.setState({bookmarks: bookmarks});


  handleSelectedCategory = (category) => {
    console.log(category)
    this.setState({ category });
  }

  onhandleDeleteBookmark = (bookmarkId) => {
    this.setState(({ bookmarks }) => ({
      bookmarks: bookmarks.filter(item => item.id !== bookmarkId),
    }))
    _.remove(bookmarks, {id:bookmarkId})
  }

  handleBookmarkCreate = (bookmark) => {
    bookmarks.push(bookmark)
    this.setState(({ bookmarks }) => ({
      bookmarks: [
        ...bookmarks,
        bookmark
      ]
    }))
    console.log('bookmarks', bookmarks)
    console.log('bookmark', bookmark)
    
  }

  render() {
    const { bookmarks, category, categories } = this.state;

    return (
      <Fragment>
        <Header 
          getAllBookmarks={this.getAllBookmarks}
          categories={categories}
          onBookmarkCreate={this.handleBookmarkCreate} />
        <MainContent 
          category={category}
          onDelete={this.onhandleDeleteBookmark}
          categories={categories} 
          bookmarks={bookmarks}
          getBookmarksByCategory={this.getBookmarksByCategory} />

        <Footer 
          category={category}
          categories={categories}
          getAllBookmarks={this.getAllBookmarks}
          getBookmarksByCategory={this.getBookmarksByCategory}
          onSelect={this.handleSelectedCategory} />
      </Fragment>
    );
  }
}

export default App;
