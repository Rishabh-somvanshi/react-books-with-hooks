import React from 'react';

const baseUrl = 'https://jsonplaceholder.typicode.com/todos/';

export function searchBooks(query) {
  //const url = new URL(baseUrl + '/search.json');
  // const url = new URL(baseUrl + '/todos.json');
  // url.searchParams.append('title', query);
  // console.log(url);
  return fetch(baseUrl).then((response) => response.json());
}

export function Search() {
  const [results, setResults] = React.useState(0);

  const handleSearch = (event) => {
    searchBooks(event.target.value).then((response) => {
      //console.log('search', console.log(response.json()));
      setResults(response);
    });
  };

  const resultList = (results || []).map((book) => (
    <tr key={book.id}>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.completed}</td>
    </tr>
  ));
  return (
    <div>
      <div className="search-input">
        <input onChange={handleSearch} type="text" placeholder="Search" />
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
