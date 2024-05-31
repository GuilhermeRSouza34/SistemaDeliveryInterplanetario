import React from 'react';
import AddressForm from '../components/AddressForm';

const AddAddress = ({ history }) => {
  const handleAddAddress = (addressData) => {
    // Salva o novo endereço (simulação)
    console.log('Endereço adicionado:', addressData);
    history.push('/');
  };

  return (
    <div>
      <h2>Cadastrar Endereço</h2>
      <AddressForm onSubmit={handleAddAddress} />
    </div>
  );
};

export default AddAddress;
