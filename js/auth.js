function login(){
    alert('Пользователь с таким Email не найден\nЗарегистрируйтесь!')
}

document.getElementById('auth-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const first_name = document.getElementById('first_name').value;
    const last_name = document.getElementById('last_name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('https://bosareituqlakbwqulig.supabase.co/rest/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvc2FyZWl0dXFsYWtid3F1bGlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyNTkzOTksImV4cCI6MjA2MzgzNTM5OX0.u3eZs1XYGJAFThrDBGeDziVIYcua1bQaUMoTMjl7TSQ',                 
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvc2FyZWl0dXFsYWtid3F1bGlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyNTkzOTksImV4cCI6MjA2MzgzNTM5OX0.u3eZs1XYGJAFThrDBGeDziVIYcua1bQaUMoTMjl7TSQ'
      },
      body: JSON.stringify({
        first_name,
        last_name,
        phone,
        address,
        email,
        password
      })
    })
    .then(response => {
      if (!response.ok) throw new Error("Помилка: " + response.status);
      return response.json();
    })
    .then(data => {
      alert('Успішно додано!');
      console.log(data);
    })
    .catch(error => {
      document.getElementById('result').textContent = 'Помилка: ' + error.message;
      console.error(error);
      alert(error);
    });
  });