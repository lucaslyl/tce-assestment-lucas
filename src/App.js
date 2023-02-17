import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <div className='border parent p-5'>
        <div className='border children p-2 bg-black'>
          1<div className='border grandchildren p-2 bg-white'>1</div>
          <div className='border grandchildren p-2 bg-white'>1</div>
        </div>
        <div className='border children'></div>
      </div>
    </div>
  );
}

export default App;
