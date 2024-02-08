import React from 'react';
import ReactDOM from 'react-dom/client';
import './Login.css';

export default function Page() {
    async function onSubmit(event) {
      event.preventDefault()
   
      const formData = new FormData(event.target)
      const data = Object.fromEntries(formData.entries());

      console.log(data);

      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
          }
      })
   
      // Handle response if necessary
      // const data = await response.json()
      // ...
    }
   
    return (
    <form onSubmit={onSubmit}>
        <div className="input-group">
            <label htmlFor="email" >Email</label>
            <input type="email" name="email" autoComplete="off" />
        </div>
        <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" autoComplete="current-password" />
        </div>
        <button type="submit">Submit</button>
    </form>
    )
  }