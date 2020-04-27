import $ from 'jquery';

function fetchAllTasks() {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'GET',
      url: '/api/v1/tasks',
      success: data => resolve(data),
      error: error => reject(error),
    });
  });
}

function createTask(task) {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'POST',
      url: '/api/v1/task',
      data: {task},
      success: data => resolve(data),
      error: data => reject(data),
    })
  });
}

export {createTask, fetchAllTasks};
