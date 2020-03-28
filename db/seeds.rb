user1 = User.create(:name => 'Test User 1', :email => 'test@test.com', :phone_number => '1-123-123-1234')
user2 = User.create(:name => 'Test User 2', :email => 'test2@test.com', :phone_number => '1-123-123-9876')

Task.create(:title => 'Task 1', :user_id => user1.id)
Task.create(:title => 'Task 2', :user_id => user1.id)
Task.create(:title => 'Task 3', :user_id => user2.id)
Task.create(:title => 'Task 4', :user_id => user2.id)
