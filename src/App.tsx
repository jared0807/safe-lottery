import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Layout/Header"
import Join from "./components/Home/Join"
import Win from "./components/Home/Win"
import Round from "./components/Home/Round"
import Winner from "./components/Home/Winner"
import History from "./components/Home/History"
import Gold from "./components/Home/Gold"
import Question from "./components/Home/Question"
import { TonConnectUIProvider } from '@tonconnect/ui-react';

function App() {
  return (
    <TonConnectUIProvider manifestUrl="https://tonconnect-manifest.json">
      <div className="App">
        <header className="App-header">
          
          <Header />
          <Join />
          <Win />
          <Round />
          <Winner />
          <History />
          <Gold />
          <Question />
        </header>
      </div>
    </TonConnectUIProvider>
  );
}

export default App;
