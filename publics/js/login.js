const { default: Navbar } = require("../../src/components/Navbar");

const loginFormHandler = async function (event) {
    event.preventDefault();
  
    const errorElement = document.getElementById('error-message')
    const usernameEl = document.querySelector('#username-input-login')
    const passwordEl = document.querySelector('#password-input-login')
    //awaits user to login and turns them into home
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({
        email: usernameEl.value,
        password: passwordEl.value
      }),
      headers: { 'Content-Type': 'application/json' }
    })
    //pass or email invalid, returns error
  let messages = []
    if (!response.ok) {
      messages.push('Invalid password or email')
      errorElement.innerText = messages;
    } else
    document.location.replace('/style/')
  }
  
  document
    .querySelector('#login-form')
    .addEventListener('submit', Navbar)
  