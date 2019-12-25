import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CubeComponent } from './components/CubeComponent';
import { MainContainerConnect } from './containers/MainContainer';

function App() {
  return (
    <>
      <CubeComponent />
      {/* <MainContainerConnect content='123' buttonText='123' title='123' /> */}
    </>
  );
}

export default App;
