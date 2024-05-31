import React, { useState } from 'react';

const AddressForm = ({ onSubmit, initialData = {} }) => {
  const [address, setAddress] = useState(initialData.address || '');
  const [lotNumber, setLotNumber] = useState(initialData.lotNumber || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ address, lotNumber });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Endereço:</label>
        <input 
          type="text" 
          value={address} 
          onChange={(e) => setAddress(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Número do Lote:</label>
        <input 
          type="text" 
          value={lotNumber} 
          onChange={(e) => setLotNumber(e.target.value)} 
          required 
          pattern="\d{4}" 
          title="Número do lote deve ter 4 dígitos"
        />
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default AddressForm;
