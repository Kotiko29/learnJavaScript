import style from './src/assets/style/index.styl'; // 
const apiURL = 'https://jsonplaceholder.typicode.com/';

// DOM Elements
const usersListEl = document.querySelector('.users-list');
const userInfoEl = document.querySelector('.user-info');


// 1. реализовать запрос получения пользователей
// 2. реализовать обработчик ответа от сервера
// 3. рендер списка пользователей
// 4. повесить событие клика на список
// 5. повесть маркер на каждый элемент списка (чтобы определять пользователя по id)
// 6. получаем id пользователя
// 7. делаем запрос на сервер и получаем инфу о выбранном пользователе
// 8. обработчик на получение ответа от сервера
// 9. функция рендеринга инфо о польователе

// Events

usersListEl.addEventListener('click', onUserHandler);

// Event handlers
function onUserHandler(event) {
    event.preventDefault();

    if(event.target.dataset.userId) {
        const userId = event.target.dataset.userId;
        getUserInfoHTTP(userId, onGetUserInfoCallback);
    }
}

// HTTP Functions
function getUsersHttp(cb) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `${apiURL}users`);

    xhr.addEventListener('load', () => {
        // console.log(xhr.response);
        if(xhr.status !== 200) {
            console.log('Error', xhr.status);
            return;
        }

        const response = JSON.parse(xhr.responseText);
        cb(response);
    });

    xhr.send();
}

function getUserInfoHTTP(id, cb) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `${apiURL}users/${id}`);

    xhr.addEventListener('load', () => {
        // console.log(xhr.response);
        if(xhr.status !== 200) {
            console.log('Error', xhr.status);
            return;
        }

        const response = JSON.parse(xhr.responseText);
        cb(response);
    });

    xhr.send();
}

function onGetUserInfoCallback(user) {
    if(!user.id) {
        console.log('user not found');
        return;
    }

    renderUserInfo(user);
}

function getUsersCallback(users) {
    if(!users.length) {
        console.log('Массив пустой');
        return;
    }

    renderUsersList(users);
}

// Render functions
function renderUsersList(users) {
    const fragment = users.reduce((acc, user) => acc + userListItemTemplate(user), '');

    usersListEl.insertAdjacentHTML('afterbegin', fragment);
}

function renderUserInfo(user) {
    userInfoEl.innerHTML = '';
    const temlate = userInfoTemplate(user);
    userInfoEl.insertAdjacentHTML('afterbegin', temlate);
}

// Template functions

function userListItemTemplate(user) {
    return `<button type="button" class="list-group-item list-group-item-action active" data-user-id="${user.id}">${user.name}</button>`;
}

function userInfoTemplate(user) {
    return `
    <div class="card border-dark mb-3">
        <div class=" card-header">${user.name}</div>
        <div class="card-body text-dark">
            <h5 class="card-title">${user.email}</h5>
            <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>Nickname:</b> ${user.username}</li>
            <li class="list-group-item"><b>Website:</b> ${user.website}</li>
            <li class="list-group-item"><b>Company:</b> ${user.company.name}</li>
            <li class="list-group-item"><b>City:</b> ${user.address.city}</li>
            </ul>
        </div>
        <div class="card-footer bg-transparent border-dark">Phone: ${user.phone}</div>
    </div>
    `
}

// Init App

getUsersHttp(getUsersCallback);


