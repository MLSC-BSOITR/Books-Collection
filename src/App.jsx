import React, { useState } from 'react';
import { books } from "../booksCollection";
import Card from './Components/Card';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to filter books based on search query
  const filteredBooks = books.filter((book) => {
    const bookNameLower = book.bookName?.toLowerCase() || '';
    const authorNameLower = book.authorName?.toLowerCase() || '';
    const searchQueryLower = searchQuery.toLowerCase();
    return (
      bookNameLower.includes(searchQueryLower) ||
      authorNameLower.includes(searchQueryLower)
    );
  });

  return (
    <div className='p-4 md:p-8 lg:p-12 xl:p-16'>
      <div>
        {/* Input field for search */}
        <input
          type="text"
          placeholder="Search by book name or author name"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {filteredBooks.map((value) => (
          <Card
            key={value.id}
            bookName={value.bookName}
            authorName={value.authorName}
            bookLink={value.bookLink}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
