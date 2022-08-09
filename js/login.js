// const apiUrl = 'https://hangman-renatobmps.herokuapp.com/';
const apiUrl = 'http://localhost:3000/';

function postLogin(event) {
  event.preventDefault();

  const data = {
    user: document.getElementById('login').value,
    password: document.getElementById('password').value
  };

  if (!data.user || data.user.length < 3) {
    alert('Problema com o login');
    return document.getElementById('login').focus();
  }

  if (!data.password || data.password.length < 3) {
    alert('Problema com a senha');
    return document.getElementById('password').focus();
  }

  fetch(apiUrl + 'login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(async response => {
    const body = await response.json();

    if (body.error) throw new Error(body.error);

    const { token } = body;

    localStorage.setItem('token', token);

    window.location.href = './index.html';
  }).catch(error => {
    console.log(error);
    alert(error || 'Problema com o login');
  });
}

(() => {
  const token = localStorage.getItem('token');

  if (token) {
    window.location.href = './index.html';
  }
})()
