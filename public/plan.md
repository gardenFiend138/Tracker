# Tracker

A basic app for creating and tracking tasks.

***

# Tools

React, Flow, Redux, Rails, Postgress

***

# Schemas

### Tasks
**Field** | **Type**
id | auto increment int
created_time | timestamp
last_modified_time | timestamp
title | string required
description | string required
is_complete | boolean required default false
user_id | foreign key int required

### Users
**Field** | **Type**
id | auto increment int
created_time | timestamp
last_modified_time | timestamp
name | string required
email | string required
phone_number | string required

***

# Routes

### MVP:
POST '/user' => create user
GET '/users' => get all user names
GET '/user/:id' => all tasks for a user
POST '/task' => create task
GET '/task/:id' => get task by ID
POST '/task/complete/:id' => mark task as complete

### Next Steps:
PATCH '/task/:id' => edit task
DELETE '/task/:id' => delete task
GET '/user/:id' => not new, but updates needed; add field 'is_public' to Tasks, and only show public tasks unless client is author
POST '/session' => log in user

***

# MVP

User can:
[] create profile
[] select name from list and go to profile
[] create tasks
[] mark tasks as complete
[] view tasks

### Next Steps

User can:
[] edit tasks
[] delete tasks
[] view other user's tasks
[] log in to view profile

