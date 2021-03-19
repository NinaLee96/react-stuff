import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [library, setLibrary] = useState();

  useEffect(() => {
    const getBooks = async () => {
      try {
        const books = await axios.get('/books');
        console.log(books);
        setLibrary(books);
      } catch (err) {
        console.log(err);
      }
    };
    getBooks();
  }, []);
  return <div>Home</div>;
};

export default Home;
