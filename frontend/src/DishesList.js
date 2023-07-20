import React, { useEffect, useState } from 'react';

const DishesList = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await fetch('http://localhost:8080/dishesList'); 

        if (response.ok) {
          const data = await response.json();
          setDishes(data);
        } else {
          console.error('Error occurred while fetching data:', response.status);
        }
      } catch (error) {
        console.error('Error occurred while making the request:', error);
      }
    };

    fetchDishes();
  }, []);

  return (
    <div className='dishes__list'>
      
      <div className='dishes__container'>
        {dishes.map((dish) => (
          <div key={dish.nome} className='dish'>
          <div className='dish__icons'>
          <h3>{dish.nome}</h3>
          </div>
            
            <p>Descrição: {dish.descricao}</p>
            <p>Preço: {dish.preco}</p>
            <p>Id: {dish.id}</p>
            <p>Disponibilidade: {dish.disponibilidade}</p>
            <p>Categoria: {dish.categoria}</p>
            </div>
        ))}
      </div>
      </div>

  );
};

export default DishesList;