import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Macks from './Macks';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Macks />, document.getElementById('root'));
registerServiceWorker();
