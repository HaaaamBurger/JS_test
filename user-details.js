const params = new URLSearchParams(document.location.search);
const id = params.get('id');

const userWrapper = document.getElementsByClassName('userWrapper')[0];
const ul = document.createElement('ul');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(data => {
        const mainUserInfoLi = document.createElement('li');
        mainUserInfoLi.innerText = `id: ${data.id}, name: ${data.name}, username: ${data.username}, email: ${data.email}`;

        userAddressLi = document.createElement('li');
        userAddressLi.innerText = `street: ${data.address.street}, suite: ${data.address.suite}`

        ul.append(mainUserInfoLi,userAddressLi);
        userWrapper.appendChild(ul)
    })