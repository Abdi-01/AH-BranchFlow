import logo from './logo.svg';
import './App.css';
import LandingPage from './Pages/Landing';
import NavbarComponent from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <LandingPage />
    </div>
  );
}

export default App;
