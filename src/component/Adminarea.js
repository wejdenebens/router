import React from 'react'

const Adminarea = props => {
    return (
        <>
        <h1>Home</h1>

      <div>
        <p>You must log in to view the page at /admin</p>
        <button onClick={login}>Log in</button>
      </div>
   
    </>
   );}

  export const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true;
      setTimeout(cb, 100);
    }
  };
export default Adminarea