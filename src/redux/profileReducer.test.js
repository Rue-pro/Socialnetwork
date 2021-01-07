import React from 'react';
import { addPost } from './profileReducer'
const { default: profileReducer } = require("./profileReducer");

let state = {
  posts: [
    {
      id: 1,
      content: "Post 1",
      likesCount: 1
    }, {
      id: 2,
      content: "Post 2",
      likesCount: 18
    }
  ],
}

test('length of posts should be incremented', () => {
  // 1. test data
  let action = addPost('awdawd');
  // 2. action
  let newState = profileReducer(state, action)

  // 3. expectation
  expect(newState.posts.length).toBe(3)
  expect(newState.posts[3].id).toBe(3)
});
