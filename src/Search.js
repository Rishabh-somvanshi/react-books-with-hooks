import React, { useState, useEffect } from 'react';

const baseUrl = 'https://jsonplaceholder.typicode.com/todos/';
const UserContext = React.createContext();
export function searchBooks(query) {
  //const url = new URL(baseUrl + '/search.json');
  // const url = new URL(baseUrl + '/todos.json');
  // url.searchParams.append('title', query);
  // console.log(url);
  return fetch(baseUrl).then((response) => response.json());
}
//useContext
const Header = () => {
  const user = React.useContext(UserContext);
  return <h1>Welcome, {user.name}!</h1>;
};

export function Search() {
  const [results, setResults] = React.useState(0);
  const [count, setCount] = useState(0);
  const inputRef = React.useRef(null);
  const [user] = React.useState({ name: 'Fred' });

  const handleSearch = (event) => {
    //inputRef.current.focus();
    searchBooks(event.target.value).then((response) => {
      setResults(response);
    });
  };

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  const resultList = (results || []).map((book) => (
    <tr key={book.id}>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.userId}</td>
    </tr>
  ));

  return (
    <div>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
      {/* 
      
       */}
      <UserContext.Provider value={user}>
        <Header />
      </UserContext.Provider>
      <div className="search-input">
        <input
          onChange={handleSearch}
          ref={inputRef}
          type="text"
          placeholder="Search"
        />
      </div>
      <h1 className="h1">Search Results</h1>
      <div className="books">
        <table>
          <thead>
            <tr>
              <th className="author-col">id</th>
              <th className="year-col">title</th>
              <th className="year-col">completed</th>
            </tr>
          </thead>
          <tbody>{resultList}</tbody>
        </table>
      </div>
    </div>
  );
}
