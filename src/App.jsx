
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {
  
  function handleClick(){
    alert('button clicked');
  }

  function handleClick2(){
    alert('button clicked');
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h1>Vite + React</h1>
      <Friends></Friends>

      <Users></Users>
      <Team></Team>

       <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() => {alert('third clicked')}}>third</button>
      {/* vejailla */}
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  )
}

export default App
