import ScrollUpButton from 'react-scroll-up-button';

import NavBar from './components/NavBar/NavBar';
import LandingPage from './pages/LandingPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
      <ScrollUpButton />
    </div>
  );
}

export default App;
