import { useState } from 'react';
import './App.css';
import Movie from './components/Movie';
import NavBar from './components/NavBar'
function App() {
  const [search,setSearch] = useState('')
  return (
    <div className="App">
      <NavBar setSearch={setSearch}/>
      <Movie search={search} />
    </div>
  );
}

export default App;
