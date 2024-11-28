hneth mntyrshjn fxghjkteg zdegdjngd mngdn ertyszghfb n rgsnv zdghnv zsethv sxzethv 

let users = [];


     fetch('https://jsonplaceholder.typicode.com/users')
         .then(response => response.json())
         .then(data => {
             users = data;  
         });

     function getRandomUser() {
         if (users.length > 0) {
             const randomIndex = Math.floor(Math.random() * users.length);
             const user = users[randomIndex];

             document.getElementById('userDetails').innerHTML = `
                 <p><strong>Name:</strong> ${user.name}</p>
                 <p><strong>Email:</strong> ${user.email}</p>
                 <p><strong>Phone:</strong> ${user.phone}</p>
                 <p><strong>Website:</strong> ${user.website}</p>
                 <p><strong>Company:</strong> ${user.company.name}</p>
             `;
         } else {
             document.getElementById('userDetails').innerHTML = 'Loading users...';
         }
     }
