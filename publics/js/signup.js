const signupFormHandler = async function (event) {
    event.preventDefault()
    const errorElement2 = document.getElementById('error-message2')
    const nameEl = document.querySelector('#name-input-signup')
    const emailEl = document.querySelector('#username-input-signup')
    const passwordEl = document.querySelector('#password-input-signup')
  
    //when requirement not met, error is thrown
    let messages = []
    if (nameEl.value.length <= 2) {
      messages.push('Name is required!')
    }
  
    if (passwordEl.value.length <= 6) {
      messages.push('Password must be longer than 6 characters!')
  
    }
  
    if (!emailEl.value) {
      messages.push('Please enter a valid email!')
    }
  
    if (messages.length > 0) {
      errorElement2.innerText = messages.join(' ')
    }
  //waits user to create, it process data and stores it
    const response = await fetch('/api/user', {
      method: 'post',
      body: JSON.stringify({
        name: nameEl.value,
        email: emailEl.value,
        password: passwordEl.value
      }),
      headers: { 'Content-Type': 'application/json' }
    })
  
    if (!response.ok) {
      throw new Error('HTTP error: ' + response.status)
    }
  //redirects to main login page
    document.location.replace('/style')
  }
  
  document
    .querySelector('#signup-form')
    .addEventListener('submit')
  