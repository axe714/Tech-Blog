const loginForm = document.querySelector('#login-form');

const loginFormHandler = async (e) => {
    e.preventDefault();
  
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    console.log('USERNAME---' , username)
    console.log('PASSWORD----', password)
}

loginForm.addEventListener('submit', loginFormHandler)