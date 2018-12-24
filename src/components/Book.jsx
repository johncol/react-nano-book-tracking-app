import React from 'react';
import PropTypes from 'prop-types';

import BookMenu from './BookMenu';

const Book = props => {
  const { book, onSetBookShelf } = props;
  return (
    <section className="card book">
      <div
        className="book-cover"
        alt={book.title}
        style={{ backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}
      />
      <h5 className="card-title book-title">{book.title}</h5>
      <BookMenu book={book} onSetBookShelf={shelf => onSetBookShelf(book, shelf)} />
    </section>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onSetBookShelf: PropTypes.func.isRequired
};

export default Book;
