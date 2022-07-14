const loginForm = document.querySelector('#login-form');

const loginFormHandler = async (e) => {
  e.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  // console.log('USERNAME ---- ', username);
  // console.log('PASSWORD ----', password);

  if (username && password) {
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      const modal = document.querySelector('#myModal');
      const auth = document.querySelector('.modal-btn');
      const closeModal = document.querySelector('.close-modal');
      const modalMsg = document.querySelector('#modal-content-text');

      if (response.ok) {
        return document.location.replace('/');
      }

      auth.onclick = () => {
        modalMsg.textContent =
          'Invalid username or password. Please try again.';
        closeModal.textContent = 'Close';
        return (modal.style.display = 'block');
      };

      closeModal.onclick = () => {
        modalMsg.textContent = '';
        closeModal.textContent = '';
        return (modal.style.display = 'none');
      };
      
    } catch (err) {
      console.log(err);
    }
  }
};

loginForm.addEventListener('submit', loginFormHandler);
