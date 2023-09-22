const ul = document.createElement('ul');
const userWrapper = document.getElementsByClassName('userWrapper')[0];

fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (let user of users) {
            const button = document.createElement('button');
            button.addEventListener('click', (e) => {
                location.href = `user-details.html?id=${user.id}`;
            })
            button.innerText = 'Details';

            const li = document.createElement('li');
            li.innerText = `${user.id} - ${user.name}`;

            ul.append(li,button);
        }
            userWrapper.appendChild(ul);
    })