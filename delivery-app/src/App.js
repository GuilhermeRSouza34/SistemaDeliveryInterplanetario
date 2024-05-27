// src/App.js
import React from 'react';
import CadastroEndereco from './components/CadastroEndereco';
import ExibicaoEdicaoEndereco from './components/ExibicaoEdicaoEndereco';

function App() {
  const enderecoExemplo = {
    nome: 'Exemplo',
    lote: '1234',
    cidade: 'CidadeExemplo',
    pais: 'Marte',
  };

  return (
    <div className="App">
      <CadastroEndereco />
      <ExibicaoEdicaoEndereco enderecoInicial={enderecoExemplo} />
    </div>
  );
}

export default App;
