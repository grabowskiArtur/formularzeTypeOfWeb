import React from 'react';
import ReactDOM from 'react-dom';
import MyFirstForm from './MyFirstForm ';
import FileInput from "./FileInput";

ReactDOM.render(<MyFirstForm />, document.getElementById('app'));
ReactDOM.render(<FileInput />, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

