import $ from 'jquery';

function fetchAllUsers() {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'GET',
      url: '/api/v1/users',
      success: data => resolve(data),
      error: error => reject(error),
    });
  });
}

function createUser({name, email, phoneNumber}) {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'POST',
      url: '/api/v1/users',
      data: {user: {name, email, phone_number: phoneNumber}},
      success: data => resolve(data),
      error: data => reject(data),
    })
  });
}

export {createUser, fetchAllUsers};
