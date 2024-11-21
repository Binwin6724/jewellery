import React, { useState, useMemo } from 'react'
import '../css/Users.css'

function Users() {
  const [sortBy, setSortBy] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');

  const sampleUsers = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+1 234-567-8900",
      address: "123 Main St, City, Country",
      joinDate: "2023-12-01"
    },
    {
      id: 2,
      name: "Alice Smith",
      email: "alice@example.com",
      phone: "+1 234-567-8901",
      address: "456 Oak Ave, Town, Country",
      joinDate: "2023-11-15"
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      phone: "+1 234-567-8902",
      address: "789 Pine Rd, Village, Country",
      joinDate: "2023-12-10"
    },
    {
      id: 4,
      name: "Emma Wilson",
      email: "emma@example.com",
      phone: "+1 234-567-8903",
      address: "321 Elm St, City, Country",
      joinDate: "2023-10-20"
    },
    {
      id: 5,
      name: "Michael Brown",
      email: "michael@example.com",
      phone: "+1 234-567-8904",
      address: "654 Maple Dr, Town, Country",
      joinDate: "2023-11-30"
    }
  ];

  const filteredAndSortedUsers = useMemo(() => {
    // First filter the users
    const filtered = sampleUsers.filter(user => {
      const searchFields = [
        user.name,
        user.email,
        user.phone,
        user.address,
        user.joinDate,
        user.id.toString()
      ];
      
      return searchFields.some(field => 
        field.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });

    // Then sort the filtered results
    return filtered.sort((a, b) => {
      let compareA = a[sortBy];
      let compareB = b[sortBy];

      // Special handling for ID which is a number
      if (sortBy === 'id') {
        return sortDirection === 'asc' 
          ? compareA - compareB 
          : compareB - compareA;
      }

      // Handle string comparisons
      if (typeof compareA === 'string') {
        compareA = compareA.toLowerCase();
        compareB = compareB.toLowerCase();
      }

      if (compareA < compareB) return sortDirection === 'asc' ? -1 : 1;
      if (compareA > compareB) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    }); // eslint-disable-next-line
  }, [sortBy, sortDirection, searchQuery]);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const toggleSortDirection = () => {
    setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="users-container">
      <h2>User Records</h2>
      
      <div className="controls-container">
        <div className="search-container">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search users..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>

        <div className="sort-controls">
          <span className="sort-label">Sort by:</span>
          <select 
            className="sort-select"
            value={sortBy}
            onChange={handleSortChange}
          >
            <option value="name">Name</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="address">Address</option>
            <option value="joinDate">Join Date</option>
            <option value="id">ID</option>
          </select>

          <button 
            className="sort-direction"
            onClick={toggleSortDirection}
          >
            {sortDirection === 'asc' ? '↑ Ascending' : '↓ Descending'}
          </button>
        </div>
      </div>

      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Join Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredAndSortedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.address}</td>
              <td>{user.joinDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Users