import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Starter from './01Starter/Starter';
import JSRefresher from './02JSRefresher/JSRefresher';
import Essentials from './03Essentials/Essentials';
import ConditionalContentTest from './03Essentials/exercises/ConditionalContentTest';
import ConditionalContent from './03Essentials/exercises/ConditionalContent'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <Starter /> */}
    {/* <JSRefresher /> */}
    {/* <Essentials /> */}
    <ConditionalContentTest />
    {/* <ConditionalContent /> */}
  </React.StrictMode>
);

