// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from "../components/App";

document.addEventListener('DOMContentLoaded', () => {
  let mainContainer = document.createElement('div');
  mainContainer.classList.add('main');
  
  render(
    <App />,
    document.body.appendChild(mainContainer)
  );
});
