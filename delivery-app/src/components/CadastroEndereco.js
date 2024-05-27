// src/components/CadastroEndereco.js
import React, { useState } from 'react';

function CadastroEndereco() {
  const [endereco, setEndereco] = useState({
    nome: '',
    lote: '',
    cidade: '',
    pais: 'Marte', // Marte como padrão
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEndereco({ ...endereco, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Endereço cadastrado:', endereco);
    // Aqui você pode enviar o endereço para algum lugar, como um servidor, para salvar
    // Após cadastrar, você pode redirecionar o usuário para outra página
    // history.push('/outra-pagina');
  };

  return (
    <div>
      <h2>Cadastro de Endereço</h2>
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
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastroEndereco;
