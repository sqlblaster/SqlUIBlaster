import React from 'react';
import ReactDOM from 'react-dom';
import { DataSourceConstructor } from './App/DataSourceConstructor';
import { tablesMock } from './App/DataSourceConstructor/redux/tables/tables.mock';

ReactDOM.render(
  // <React.StrictMode>
    <DataSourceConstructor databaseSchema={{ tables: tablesMock }} showQuery/>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);
