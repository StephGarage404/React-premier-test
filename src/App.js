import logo from './logo.svg';
import './App.css';
import Test from './components/Square';
import Square from './components/Square';

function App() {
  return (
    <div className="App">
     <h1 className='bg-red-500'>hello</h1>

      <div class="grid grid-cols-3 gap-4">
          <div class=""><Square></Square></div>
          <div class=""><Square></Square></div>
          <div class=""><Square></Square></div>
          <div class=""><Square></Square></div>
          <div class=""><Square></Square></div>
          <div class=""><Square></Square></div>
          <div class=""><Square></Square></div>
          <div class=""><Square></Square></div>
          <div class=""><Square></Square></div>
      </div>

    </div>
  );
}

export default App;
