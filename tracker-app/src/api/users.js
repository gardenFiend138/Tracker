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

export {fetchAllUsers};
