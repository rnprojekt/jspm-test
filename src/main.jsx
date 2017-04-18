
import 'spectre/dist/spectre.min.css!';
import 'main.css!';

import React from 'react';
import ReactDOM from 'react-dom';

let root = document.createElement('div');
root.setAttribute("id", "root");
window.document.body.appendChild(root);


function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
