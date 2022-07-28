const apiUrl = 'https://hangman-renatobmps.herokuapp.com/';
// const apiUrl = 'http://localhost:3000/'

function postSign(event) {
  event.preventDefault();

  const data = {
    name: document.getElementById('login').value,
    password: document.getElementById('password').value,
    confirmPassword: document.getElementById('confirm_password').value,
  };

  if (!data.name || data.name.length < 3) {
    alert('Problema com o login');
    return document.getElementById('login').focus();
  }

  if (!data.password || data.password.length < 3) {
    alert('Problema com a senha');
    return document.getElementById('password').focus();
  }

  if (data.password !== data.confirmPassword) {
    alert("Senhas não conferem");
    return document.getElementById("confirm_password").focus();
  }

  fetch(apiUrl + 'users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(async response => {
    const body = await response.json();

    if (body.error) throw new Error(body.error);

    fetch('http://localhost:3000/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: data.name,
        password: data.password
      })
    }).then(async response => {
      const body = await response.json();

      if (body.error) throw new Error(body.error);

      const { token } = body;

      localStorage.setItem('token', token);

      window.location.href = './index.html';
    }).catch(error => {
      console.error(error);
      alert(error || 'Problema com o login');
    });
  }).catch(error => {
    console.error(error);
    alert(error || 'Problema com o login');
  });
}

(() => {
  const token = localStorage.getItem('token');

  if (token) {
    window.location.href = './index.html';
  }
})()
