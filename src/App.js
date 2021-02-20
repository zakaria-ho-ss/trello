import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Header from './Layouts/Header'
import Footer from './Layouts/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
      <Footer/>
     
    </div>
  );
}

export default App;
