import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import Lesson02 from './lesson02/lesson02';
import LoginForm from './components/LoginForm/loginForm';
 




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App /> 
    <Lesson02 />
    <LoginForm />
  </div>
);
