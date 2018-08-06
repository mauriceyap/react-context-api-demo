import React from 'react';
import ReactDOM from 'react-dom';
import Macks from './Macks';

it
('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Macks />, div);
  ReactDOM.unmountComponentAtNode(div);
});
