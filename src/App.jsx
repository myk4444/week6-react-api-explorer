
import { useEffect, useState } from 'react';
import './App.css';
import UserCard from './UserCard.jsx';

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  // Fetch users from the API when the app loads
  useEffect(function () {
    async function getUsers() {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );

      const data = await response.json();
      setUsers(data);
    }

    getUsers();
  }, []);

  // Filter users by name based on the search input
  const filteredUsers = users.filter(function (user) {
    return user.name
      .toLowerCase()
      .includes(search.toLowerCase());
  });

  return (
    <main className="container">
      <h1>React User API Explorer</h1>
      <p>Explore users loaded from a public API.</p>

      <label htmlFor="search">Search users by name</label>
      <input
        id="search"
        type="text"
        value={search}
        onChange={function (event) {
          setSearch(event.target.value);
        }}
        placeholder="Enter a name..."
      />

      <section className="user-list" aria-label="Users">
        {filteredUsers.map(function (user) {
          return (
            <UserCard
              key={user.id}
              name={user.name}
              email={user.email}
              company={user.company.name}
            />
          );
        })}
      </section>
    </main>
  );
}

export default App;
