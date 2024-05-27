// src/components/ExibicaoEdicaoEndereco.js
import React, { useState } from 'react';

function ExibicaoEdicaoEndereco({ enderecoInicial }) {
  const [endereco, setEndereco] = useState(enderecoInicial);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEndereco({ ...endereco, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Endereço editado:', endereco);
    // Aqui você pode enviar o endereço editado para algum lugar, como um servidor, para salvar
  };

  return (
    <div>
      <h2>Exibição e Edição de Endereço</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" value={endereco.nome} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="lote">Lote:</label>
          <input type="text" id="lote" name="lote" value={endereco.lote} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="cidade">Cidade:</label>
          <input type="text" id="cidade" name="cidade" value={endereco.cidade} onChange={handleChange} />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default ExibicaoEdicaoEndereco;
