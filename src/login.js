// const { Homepage } = require("./components");
// const { default: Navbar } = require("./components/Navbar");

// const loginFormHandler = async function (event) {
//     event.preventDefault();
  
//     const errorElement = document.getElementById('error-message')
//     const usernameEl = document.querySelector('#username-input-login')
//     const passwordEl = document.querySelector('#password-input-login')
//     //awaits user to login and turns them into home
//     const response = await fetch('/api/user/login', {
//       method: 'POST',
//       body: JSON.stringify({
//         email: usernameEl.value,
//         password: passwordEl.value
//       }),
//       headers: { 'Content-Type': 'application/json' }
//     })
//     //pass or email invalid, returns error
//   let messages = []
//     if (!response.ok) {
//       messages.push('Invalid password or email')
//       errorElement.innerText = messages;
//   }
  
//   document
//     .querySelector('#login-form')
//     .addEventListener('submit', Homepage)}
import { userRef, useState, useEffect } from 'react';

const login = () => {
const useRef = useRef();
const errRef = useRef();

const [user, setUser] = useState('');
const [pwd, usePwd] = useState('');
const [errMsg, setErrMsg] = useState('');
const [success, setSuccess] = useState(false);

useEffect(() => {
  userRef.current.focus();
}, [])

useEffect(() => {
  setErrMsg('');
}, [user, pwd])

const handleSubmit = async (e) => {
  e.preventDefault();
}

  return (
    <>
      {success ? (
        <section>
          <h1>You've logged in!</h1>
          <br />
          <p>
            <a href='#'>Home</a>
          </p>
        </section>
      ) : (

    <section>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text"
        id="username"
        ref={userRef}
        autoComplete="off"
        onChange={(e) => setUser(e.target.value)}
        value={user}
        required></input>

        <label htmlFor="password">Password:</label>
        <input type="password"
        id="password"
        ref={userRef}
        onChange={(e) => setPwd(e.target.value)}
        value={pwd}
        required></input>
        <button>Sign In</button>
      </form>

      <p>Need an Account?<br />
      <span className='line'>
        {/* {put router link here}*/}
        <a href='#'>Create</a>
      </span></p>
        
    </section>
      )}
      </>
  )
}

export default Login