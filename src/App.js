import './App.css';
import { useRecoilState } from 'recoil';
import { websiteState } from './Recoil/atoms';
import { Route } from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage'
import Navigation from './Global/Navigation';
import Home from './Home/Home'
import About from './About/About'
import SalonEtiquette from './SalonEtiquette/SalonEtiquette';

function App() {
  const [website, setWebite] = useRecoilState(websiteState)

  if (website === 'landing') {
    return (
      <div className="App">
        <LandingPage />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Navigation />

        <Route path='/' exact component={Home} />

        <Route path='/about' exact component={About} />

        <Route path='/salon-etiquette' exact component={SalonEtiquette} />
      </div>
    )
  }
}

export default App;
