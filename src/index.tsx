import React from 'react';
import ReactDOM from 'react-dom';
import { DataSourceConstructor } from './App/DataSourceConstructor';

ReactDOM.render(
  <React.StrictMode>
    <DataSourceConstructor databaseSchema={{ tables:[] }}/>
  </React.StrictMode>,
  document.getElementById('root')
);
