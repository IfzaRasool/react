// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import Service from './components/service';
import Solutions from './components/solutions';
// import Register from './components/register';

function App() {
  return (
    <div className="App">
      <main>
        <div className="hero">
          <Header />
          <Home />
        </div>
        {/* <Register /> */}
        <Service />
        <Solutions />
      </main>
    </div>
  );
}

export default App;
