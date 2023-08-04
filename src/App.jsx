import React, { useState } from 'react';
import { books } from "../booksCollection";
import Card from './Components/Card';
import Navbar from './Components/Navbar';

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
    <main>
      <Navbar/>
      <div className='p-4 md:p-8 lg:p-12 xl:p-16'>
      <div>
        {/* hero section */}
        <div className="max-w-screen-xl flex justify-center mb-4">
          <h2 className="text-3xl lg:text-4xl text-white font-bold font-mono">Books Collection.</h2>
          
        </div>
        <input
          type="text"
          className='mb-6 flex justify-center p-2 w-full text-gray-200 bg-[#2d2d2d] text-center rounded-full mx-auto focus:outline-none'
          placeholder="Type by book name or author name"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        {/* Input field for search */}
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
    </main>
  );
}

export default App;
