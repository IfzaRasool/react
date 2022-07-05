// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <div className="hero">
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
