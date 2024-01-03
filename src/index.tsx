import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Starter from './01Starter/Starter';
import JSRefresher from './02JSRefresher/JSRefresher';
import Essentials from './03Essentials/Essentials';
import ConditionalContentTest from './03Essentials/exercises/ConditionalContentTest';
import ConditionalContent from './03Essentials/exercises/ConditionalContent'
import DynamicStyling from './03Essentials/exercises/DynamicStyling';
import Todo from './03Essentials/exercises/Todo';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* Part1 */}
    {/* <Starter /> */}
    {/* Part2 */}
    {/* <JSRefresher /> */}
    {/* Part3 */}
    {/* <ConditionalContentTest /> */}
    {/* <ConditionalContent /> */}
    {/* <DynamicStyling /> */}
    <Todo />
    {/* <Essentials /> */}
  </React.StrictMode>
);

