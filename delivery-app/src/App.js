// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CadastroEndereco from './components/CadastroEndereco';
import ExibicaoEdicaoEndereco from './components/ExibicaoEdicaoEndereco';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={CadastroEndereco} />
          <Route path="/endereco" component={ExibicaoEdicaoEndereco} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

