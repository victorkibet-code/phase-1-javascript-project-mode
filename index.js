const apiUrl = 'https://api.github.com/search/users?q=octocat';

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    
    //console.log('API Data:', data);

    
    //const outputElement = document.getElementById('output');
    //outputElement.textContent = JSON.stringify(data, null, 25);
  })

document.getElementById('inquiryForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;


  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);
});
