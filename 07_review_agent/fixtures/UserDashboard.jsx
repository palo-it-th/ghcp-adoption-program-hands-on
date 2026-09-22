// ⚠️⚠️⚠️  INTENTIONALLY VULNERABLE — TRAINING FIXTURE  ⚠️⚠️⚠️
//
// ไฟล์นี้จงใจเขียนให้แย่ ใช้เป็นโจทย์ให้ Copilot code review หาปัญหา
// ห้ามคัดลอกส่วนไหนของไฟล์นี้ไปใช้จริงเด็ดขาด
//
// ช่องโหว่ที่ฝังไว้: XSS, sensitive data exposure, insecure token storage,
// no CSRF protection, logging sensitive data, poor error handling,
// direct DOM manipulation in React

import React, { useEffect, useRef, useState } from 'react';

export default function UserDashboard() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const bioRef = useRef(null);

  // ISSUE: token kept in localStorage, readable by any script on the page
  const token = localStorage.getItem('token');

  useEffect(() => {
    // ISSUE: no CSRF token, no credentials mode, no error boundary
    fetch('http://api.example.com/users', {
      headers: { Authorization: token },
    })
      .then((r) => r.json())
      .then((data) => {
        // ISSUE: logs every user record, passwords and SSNs included
        console.log('Loaded users:', data);
        setUsers(data);
      });
    // ISSUE: no catch, so a failed request silently renders an empty table
  }, [token]);

  // ISSUE: search term interpolated into the URL without encoding
  const runSearch = () => {
    fetch(`http://api.example.com/users?q=${search}`)
      .then((r) => r.json())
      .then(setUsers);
  };

  // ISSUE: direct DOM manipulation with innerHTML — stored XSS from user bios
  useEffect(() => {
    if (bioRef.current && users.length) {
      bioRef.current.innerHTML = users.map((u) => `<p>${u.bio}</p>`).join('');
    }
  }, [users]);

  // ISSUE: destructive action with no confirmation and no authorization check
  const deleteUser = (id) => {
    fetch(`http://api.example.com/users/${id}`, {
      method: 'DELETE',
      headers: { Authorization: token },
    }).then(() => setUsers(users.filter((u) => u.id !== id)));
  };

  return (
    <div>
      <h1>Users</h1>

      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={runSearch}>Search</button>

      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            {/* ISSUE: password and SSN rendered into the page */}
            <th>Password</th>
            <th>SSN</th>
            <th>Card</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            // ISSUE: array index would be a poor key, and this uses none at all
            <tr>
              <td>{u.username}</td>
              <td>{u.email}</td>
              <td>{u.password}</td>
              <td>{u.ssn}</td>
              <td>{u.credit_card}</td>
              <td>
                {/* ISSUE: inline handler, no confirmation dialog */}
                <button onClick={() => deleteUser(u.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ISSUE: this node is filled with raw innerHTML above */}
      <div ref={bioRef} />

      {/* ISSUE: renders unescaped HTML supplied by users */}
      <div dangerouslySetInnerHTML={{ __html: users.map((u) => u.bio).join('') }} />
    </div>
  );
}
