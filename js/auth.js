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

    fetch('https://rkvpdspcctvbhbcxozgl.supabase.co/rest/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrdnBkc3BjY3R2YmhiY3hvemdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc4NTgzNDQsImV4cCI6MjA2MzQzNDM0NH0.zNXHuu1N6THMfihsnv0EduI36qJJ4oQ7pNbnAN8e8Bs',                 
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrdnBkc3BjY3R2YmhiY3hvemdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc4NTgzNDQsImV4cCI6MjA2MzQzNDM0NH0.zNXHuu1N6THMfihsnv0EduI36qJJ4oQ7pNbnAN8e8Bs'
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