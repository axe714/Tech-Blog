const signupForm = document.querySelector('#signup-form');

const signupFormHandler = async (e) => {
  e.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && password) {
    try {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({
          username,
          password,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
    //   console.log('USERNAME ---- ', username);
    //   console.log('PASSWORD ----', password);

      const modal = document.querySelector('#myModal');
      const auth = document.querySelector('.modal-btn');
      const closeModal = document.querySelector('.close-modal');
      const modalMsg = document.querySelector('#modal-content-text');

      if (response.ok) {
        document.location.reload()
        return document.location.replace('/')
      }

      auth.onclick = () => {
        modalMsg.textContent =
          'Please make sure all fields are filled, username is unique, and password is atleast 8 characters long.';
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

signupForm.addEventListener('submit', signupFormHandler);
