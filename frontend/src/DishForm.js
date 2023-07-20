import React, { useState } from 'react';
import './Form.css';

const DishForm = ({ onNewDish, existingNames }) => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [disponibilidade, setDisponibilidade] = useState('');
  const [categoria, setCategoria] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the name already exists in the list
    if (existingNames.some(item => item.nome === nome)) {
      setIsNameValid(false);
      alert("Um prato com esse nome já foi cadastrado.");
      return; // Exit the function early if the name is not valid
    }

    console.log(existingNames);

    const newDish = {
      nome: nome,
      descricao: descricao,
      preco: preco,
      disponibilidade: disponibilidade,
      categoria: categoria,
    };

    console.log(newDish);

    try {
      const response = await fetch('http://localhost:5000/addDish', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newDish)
      });

      if (response.ok) {
        // Todo item added successfully
        console.log('Dish added successfully');
        
      } else {
        // Error occurred while adding todo item
        console.log('Error occurred while adding a dish');
      }
    } catch (error) {
      console.error('Error occurred while making the request:', error);
    }

  
    onNewDish(newDish);

    // Clear the form inputs
    setNome('');
    setDescricao('');
    setPreco('');
    setDisponibilidade('');
    setCategoria('');
    
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
        <h1>Cadastrar novo prato</h1>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <input
        type="text"
        placeholder="Preço"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
      />
      <input
        type="text"
        placeholder="Disponibilidade"
        value={disponibilidade}
        onChange={(e) => setDisponibilidade(e.target.value)}
      />
      <input
        type="text"
        placeholder="Categoria"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      />

      <button type="submit">Adicionar prato</button>
    </form>
  );
};

export default DishForm;