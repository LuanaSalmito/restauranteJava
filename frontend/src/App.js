import './App.css';
import DishesList from './DishesList';
import DishesForm from './DishForm';

function App() {
  return (
    <div className="App">
      <div className='menu'>
      <h1>Sushiya</h1>
      </div>
      
      <DishesList />

      <DishesForm />
      
    </div>
  );
}

export default App;
