const loginForm = document.querySelector('#login-form');

const loginFormHandler = async (e) => {
  e.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  console.log('USERNAME---', username);
  console.log('PASSWORD----', password);

  if (username && password) {
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        return console.log('You just logged in')
        // return document.location.replace('/');
      }
    } catch (err) {
      console.log(err);
    }
  }
};

loginForm.addEventListener('submit', loginFormHandler);
